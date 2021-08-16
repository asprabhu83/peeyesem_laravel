<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CarHighlightPost extends Model
{
    use HasFactory;

    protected $table = 'car_highlight_posts';

    protected $primary = 'id';

    protected $guarded = ['highlight_id'];

    protected $fillable = [
        'post_title',
        'post_description',
        'post_image'
    ];
    public function highlights() {
        return $this->belongsTo(CarHighlight::class, 'highlight_id');
    }
}
