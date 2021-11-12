<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CarFeatureVariantModel extends Model
{
    use HasFactory;

    protected $table = 'car_feature_variant_models';

    protected $primary = 'id';

    protected $guarded = [];

    protected $fillable = [
        'features_variant_id',
        'feature_type',
        'data_value'
    ];

    public function variantFeatures() {
        return $this->hasMany(CarVariantFeatures::class, 'features_model_id');
    }
}
