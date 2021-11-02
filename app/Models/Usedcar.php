<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Usedcar extends Model
{
    use HasFactory;
    protected $fillable = [
        'car_model',
        'fuel_type',
        'price',
        'kms_driven',
        'model_image',
        'purchase_year',
        'data_form'
    ];
}
