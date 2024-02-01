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
        'date',
        'department',
        'employee_id',
        'task_id',
        'deposit_status',
        'contract_status',
        'project_manager',
    ];

    protected $hidden =
    [
        'created_at',
        'updated_at',
    ];

    public function employee()
    {
        return $this->belongsTo(Employee::class);
    }

    public function requisitions()
    {
        return $this->hasMany(Requisition::class);
    }

    public function tasks()
    {
        return $this->hasMany(Task::class);
    }


}