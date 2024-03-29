<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Item extends Model
{
    use HasFactory;

    protected $fillable =
    [
        'requisition_id',
        'description',
        'quantity',
        'unit_price',
        'total_price',
    ];

    protected $hidden =
    [
        'created_at',
        'updated_at',
    ];

    public function requisition()
    {
        return $this->belongsTo(Requisition::class);
    }

    
}
