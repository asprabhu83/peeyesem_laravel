<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Carform extends Model
{
    use HasFactory;
    protected $fillable = [
        'full_name',
        'email_id',
        'mobile_no',
        'vehicle_model',
        'form_type',
        'data_form_value'
    ];
}
