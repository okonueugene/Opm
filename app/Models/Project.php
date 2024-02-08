<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Project extends Model
{
    use HasFactory;

    protected $fillable =
        [
        'serial_number',
        'name',
        'description',
        'posting_date',
        'due_date',
        'employee_id',
        'department',
        'deposit_status',
        'contract_status',
        'project_manager',
        'project_client',
        'budget',
        'total_cost',

    ];

    protected $hidden =
        [
        'created_at',
        'updated_at',
        'employee',
    ];

    protected $appends = ['employee_name'];

    public function requisitions()
    {
        return $this->hasMany(Requisition::class);
    }

    public function tasks()
    {
        return $this->hasMany(Task::class);
    }

    public function employee()
    {
        return $this->belongsTo(Employee::class);
    }

    public function getEmployeeNameAttribute()
    {
        return $this->employee->name;
    }

    public function calculateTotalCost()
    {
        // Get all requisitions related to this project
        $requisitions = $this->requisitions;

        // Calculate the total cost by summing up total_cost from requisitions
        $totalCost = $requisitions->sum('total_cost');

        // Update the total_cost attribute of the project
        $this->update(['total_cost' => $totalCost]);

        return $totalCost;

    }

}
