<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class MenuItem extends Model
{
    use HasFactory;

    protected $table = 'menu_items';

    protected $primaryKey = 'id';

    protected $fillable = [
        'menu_title_id',
        'menu_name',
        'menu_link'
    ];

    public function subMenu() {
        return $this->hasMany(SubMenu::class, 'menu_item_id');
    }
}
