<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Project;
use Inertia\Inertia;
use Inertia\Response;

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
}
