<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\ProjectsController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
 */

Route::get('/', function () {
    return Inertia::render('Home', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
        'departments' =>config('data.department'),
        'designations' =>config('data.designation'),
        'employees' => \App\Models\Employee::all(),
        'projects' => \App\Models\Project::all(),
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

    //employees routes
    Route::get('/employees', [App\Http\Controllers\EmployeeController::class, 'index'])->name('employees');
    Route::get('/requisitions', [App\Http\Controllers\RequisitionsController::class, 'index'])->name('requisitions');
    Route::get('/projects', [ProjectsController::class, 'index'])->name('projects');

});

//projects routes
Route::post('/projects', [ProjectsController::class, 'addProject'])->name('addProject');

//requisitions routes
Route::post('/requisitions', [App\Http\Controllers\RequisitionsController::class, 'addRequisition'])->name('addRequisition');

require __DIR__ . '/auth.php';
