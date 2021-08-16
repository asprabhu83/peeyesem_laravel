<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CarFeatureVariantFeatures extends Model
{
    use HasFactory;

    protected $table = 'car_feature_variant_features';

    protected $primary = 'id';

    protected $guarded = ['features_model_id'];

    protected $fillable = [
        'variant_feature_type',
        'variant_feature_value'
    ];
    public function featuresModel() {
        return $this->belongsTo(CarFeatureVariantModel::class, 'features_model_id');
    }
}
