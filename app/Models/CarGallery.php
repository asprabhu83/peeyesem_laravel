<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CarGallery extends Model
{
    use HasFactory;

    protected $table = 'car_galleries';

    protected $primary = 'id';

    protected $guarded = ['car_id'];

    protected $fillable = [
        'gallery_image',
    ];
    public function gallery() {
        return $this->belongsTo(Car::class, 'car_id');
    }
}
