<?php

namespace App\Http\Controllers;

use Carbon\Carbon;
use Inertia\Inertia;
use App\Models\Project;
use Illuminate\Http\Request;

// protected $fillable = [
//     'name',
//     'description',
//     'status',
//     'project_id',
// ];

// protected $fillable =
// [
//     'serial_number',
//     'name',
//     'description',
//     'posting_date',
//     'due_date',
//     'employee_id',
//     'department',
//     'deposit_status',
//     'contract_status',
//     'project_manager',
//     'budget',
//     'total_cost',

// ];

class ProjectsController extends Controller
{
    public function index()
    {
        $projects = Project::orderBy('id', 'desc')->get();
        $projects->load('tasks', 'requisitions', 'employee');

        return Inertia::render('Projects/Projects', [
            'projects' => $projects,
        ]);
    }

    public function addProject(Request $request)
    {
        //create a new project
        $project = new Project();
        $project->serial_number = 'PRJ' . time();
        $project->name = $request->name;
        $project->posting_date = date('Y-m-d');
        $project->due_date = Carbon::parse($request->due_date)->format('Y-m-d');
        $project->employee_id = $request->prepared_by;
        $project->department = $request->department;
        $project->deposit_status = $request->deposit_status ?? 0;
        $project->contract_status = $request->contract_status ?? 0;
        $project->project_manager = $request->project_manager;
        
        $project->project_client = $request->project_client;
        $project->budget = $request->budget;
        $project->total_cost = $request->total_cost;
        $project->save();

        //if the project has tasks
        if ($request->tasks) {
            foreach ($request->tasks as $task) {
                $project->tasks()->create([
                    'name' => $task['task_name'],
                    'description' => $task['task_description'],
                ]);
            }
        }

        return response ()->json(['message' => 'Project added successfully']);
    }
}
