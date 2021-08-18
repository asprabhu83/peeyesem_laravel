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
    public function overviews() {
        return $this->hasMany(CarOverviewDetails::class, 'overview_id');
    }
}