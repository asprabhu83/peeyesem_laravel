<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CarSpec extends Model
{
    use HasFactory;

    protected $table = 'car_specs';

    protected $primary = 'id';

    protected $guarded = ['car_id'];

    protected $fillable = [
        'spec_type',
        'spec_model',
        'spec_petrol',
        'spec_diesel',
    ];
    public function specCars() {
        return $this->belongsTo(Car::class, 'car_id');
    }
}
