<?php

namespace App\Http\Controllers;

use App\Models\Requisition;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class RequisitionsController extends Controller
{
    public function index()
    {
        $requistions = Requisition::all();

        $requistions->load('project', 'items','employee');

        return Inertia::render('Requisitions/Requisitions', [
            'requistions' => $requistions,
        ]);
    }

    public function addRequisition(Request $request)
    {
        $requisition = new Requisition();
        $requisition->serial_number = 'REQ' . time();
        $requisition->project_id = $request->project_id;
        $requisition->employee_id = $request->employee_id;
        $requisition->date = date('Y-m-d');
        $requisition->vendor = $request->vendor;
        $requisition->department = $request->department;
        $requisition->save();

        //if there are items
        if ($request->items) {
            foreach ($request->items as $item) {
                $requisition->items()->create([
                    'description' => $item['description'],
                    'quantity' => $item['quantity'],
                    'unit_price' => $item['unitPrice'],
                    'total_price' => $item['total'],
                ]);
            }
        }

        //get the sum of the total cost of all items
        $totalCost = $requisition->items()->sum('total_price');

        //update the total cost of the requisition
        $requisition->total_cost = $totalCost;
        $requisition->save();

        //get the project and update the total cost
        $project = $requisition->project;
        $project->calculateTotalCost();
        $project->save();



        return response ()->json(['message' => 'Requisition added successfully',  'project' => $project]);
    }
}
