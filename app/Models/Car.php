<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Car extends Model
{
    use HasFactory;

    protected $table = 'cars';

    protected $primaryKey = 'id';

    protected $fillable = [
        'car_type_id',
        'car_title',
        'car_image',
        'poster_image'
    ];

    public function carType() {
        return $this->belongsTo(CarType::class, 'car_type_id');
    }
    public function carOverviews() {
        return $this->hasOne(CarOverview::class, 'car_id');
    }
    public function carHighlights() {
        return $this->hasMany(CarHighlight::class, 'car_id');
    }
    public function carGalleries() {
        return $this->hasMany(CarGallery::class, 'car_id');
    }
    public function carVideos() {
        return $this->hasMany(CarVideo::class, 'car_id');
    }
    public function carColors() {
        return $this->hasMany(CarColors::class, 'car_id');
    }
    public function carSpecs() {
        return $this->hasMany(CarSpec::class, 'car_id');
    }
    public function carFeatureVariant() {
        return $this->hasMany(CarFeatureVariant::class, 'car_id');
    }
    // public function carFeatureVariantModel() {
    //     return $this->hasMany(CarFeatureVariantModel::class, 'car_id');
    // }
    public function price() {
        return $this->hasMany(CarPriceList::class, 'car_id');
    }
}