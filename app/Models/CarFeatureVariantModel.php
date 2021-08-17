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
    ];
    public function modelVariants() {
        return $this->belongsTo(CarFeatureVariant::class, 'features_variant_id');
    }
    public function modelFeatures() {
        return $this->hasMany(CarVariantFeatures::class, 'features_model_id');
    }
    public function variantPrice() {
        return $this->hasOne(CarPriceList::class, 'features_model_id');
    }
}
