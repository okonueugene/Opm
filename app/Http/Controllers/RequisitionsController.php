<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Inertia\Response;
use App\Models\Requisition;
use Illuminate\Http\Request;

class RequisitionsController extends Controller
{
    public function index()
    {
      $requistions = Requisition::all();

        $requistions->load('project','items','user','employee');

        return Inertia::render('Requisitions/Requisitions', [
            'requistions' => $requistions,
        ]);
    }
}
