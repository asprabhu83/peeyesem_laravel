<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class MenuTitle extends Model
{
    use HasFactory;

    protected $table = 'menu_titles';

    protected $primaryKey = 'id';

    protected $fillable = [
        'menu_type',
    ];

    public function menuTitles() {
        return $this->hasMany(MenuItem::class, 'menu_title_id');
    }
}
