<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CarPriceList extends Model
{
    use HasFactory;

    protected $table = 'car_price_lists';

    protected $primary = 'id';

    protected $guarded = ['features_variant_id', 'car_id'];

    protected $fillable = [
        'car_fuel_type',
        'car_price'
    ];
    public function featuresModel() {
        return $this->belongsTo(CarFeatureVariantModel::class, 'features_model_id');
    }
}
