<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CarColors extends Model
{
    use HasFactory;

    protected $table = 'car_colors';

    protected $primary = 'id';

    protected $guarded = [];

    protected $fillable = [
        'car_id',
        'color_code',
        'second_color_code',
        'color_title',
        'color_image',
    ];
}
