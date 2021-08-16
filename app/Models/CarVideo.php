<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CarVideo extends Model
{
    use HasFactory;

    protected $table = 'car_videos';

    protected $primary = 'id';

    protected $guarded = ['car_id'];

    protected $fillable = [
        'youtube_link',
        'local_file_link',
    ];
    public function videoCars() {
        return $this->belongsTo(Car::class, 'car_id');
    }
}
