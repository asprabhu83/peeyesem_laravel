<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CarOverviewDetails extends Model
{
    use HasFactory;

    protected $table = 'car_overview_details';

    protected $primary = 'id';

    protected $guarded = ['overview_id'];

    protected $fillable = [
        'car_power',
        'car_transmission',
        'car_mileage',
    ];
    public function overviews() {
        return $this->belongsTo(CarOverview::class, 'overview_id');
    }
}
