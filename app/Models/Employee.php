<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Employee extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'email',
        'job_title',
        'phone',
        'department',
    ];

    protected $hidden = [
        'created_at',
        'updated_at',
    ];

    public function projects()
    {
        return $this->hasMany(Project::class);
    }

    public function requisitions()
    {
        return $this->hasMany(Requisition::class);
    }

    public function tasks()
    {
        return $this->hasMany(Task::class);
    }

    public function items()
    {
        return $this->hasMany(Item::class);
    }

}
