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
        'employee'
    ];

    protected $appends=['employee_name'];

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

    public function getCreatedAtAttribute($value)
    {
        return date('d-m-Y', strtotime($value));
    }

   

    public function getEmployeeNameAttribute()
    {
        return $this->employee->name;
    }

}
