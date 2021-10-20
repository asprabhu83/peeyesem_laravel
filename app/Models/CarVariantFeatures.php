<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CarVariantFeatures extends Model
{
    use HasFactory;

    protected $table = 'car_variant_features';

    protected $primary = 'id';

    protected $guarded = [];

    protected $fillable = [
        'features_model_id',
        'variant_feature_type',
        'variant_feature_model',
        'variant_feature_value',
        'variant_category'
    ];
}