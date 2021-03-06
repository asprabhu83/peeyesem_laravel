<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CarPriceList extends Model
{
    use HasFactory;

    protected $table = 'car_price_lists';

    protected $primary = 'id';

    protected $guarded = [];

    protected $fillable = [
        'car_id',
        'features_variant_id',
        'car_fuel_type',
        'car_price'
    ];
}
