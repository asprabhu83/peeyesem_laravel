<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CarOverviewDetails extends Model
{
    use HasFactory;

    protected $table = 'car_overview_details';

    protected $primary = 'id';

    protected $guarded = [];

    protected $fillable = [
        'overview_id',
        'car_power',
        'car_transmission',
        'car_mileage',
    ];
    
}
