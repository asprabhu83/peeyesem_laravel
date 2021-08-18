<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CarVideo extends Model
{
    use HasFactory;

    protected $table = 'car_videos';

    protected $primary = 'id';

    protected $guarded = [];

    protected $fillable = [
        'car_id',
        'youtube_link',
        'local_file_link',
    ];
}
