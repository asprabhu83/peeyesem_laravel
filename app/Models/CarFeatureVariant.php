<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CarFeatureVariant extends Model
{
    use HasFactory;

    protected $table = 'car_feature_variants';

    protected $primary = 'id';

    protected $guarded = [];

    protected $fillable = [
        'car_id',
        'feature_title',
        'feature_variant_title',
    ];
    public function featureModel() {
        return $this->hasMany(CarFeatureVariantModel::class, 'features_variant_id');
    }
    public function variantPrice() {
        return $this->hasOne(CarpriceList::class, 'features_variant_id');
    }
}