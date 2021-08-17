<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CarOverview extends Model
{
    use HasFactory;

    protected $table = 'car_overviews';

    protected $primaryKey = 'id';
    
    protected $guarded = [];

    protected $fillable = [
        'car_id',
        'car_description',
        'overview_image',
    ];

    public function cars() {
        return $this->belongsTo(Car::class, 'car_id');
    }
    public function overviewDetails() {
        return $this->hasOne(CarOverviewDetails::class, 'overview_id');
    }
}