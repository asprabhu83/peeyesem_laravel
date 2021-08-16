<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CarFeatureVariant extends Model
{
    use HasFactory;

    protected $table = 'car_feature_variants';

    protected $primary = 'id';

    protected $guarded = ['car_id'];

    protected $fillable = [
        'feature_title',
        'feature_variant_title',
    ];
    public function featureCars() {
        return $this->belongsTo(Car::class, 'car_id');
    }
    public function  variantModels() {
        return $this->hasMany(CarFeatureVariantModel::class, 'features_variant_id');
    }
}
