<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CarHighlight extends Model
{
    use HasFactory;

    protected $table = 'car_highlights';

    protected $primaryKey = 'id';
    
    protected $guarded = [];

    protected $fillable = [
        'car_id',
        'highlight_title',
    ];
    public function highlightPost() {
        return $this->hasMany(CarHighlightPost::class, 'highlight_id');
    }
}
