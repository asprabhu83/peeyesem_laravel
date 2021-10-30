<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Sellcar extends Model
{
    use HasFactory;
    protected $fillable = [
        'full_name',
        'email',
        'mobile',
        'car_model',
        'model_variant',
        'fuel_type',
        'registration_number',
        'kms_completed',
        'color',
        'purchase_year',
        'ownership',
        'expected_price',
        'sell_type',
    ];
}
