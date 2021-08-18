<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CarGallery extends Model
{
    use HasFactory;

    protected $table = 'car_galleries';

    protected $primary = 'id';

    protected $guarded = [];

    protected $fillable = [
        'car_id',
        'gallery_image',
    ];
}
