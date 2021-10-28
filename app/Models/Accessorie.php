<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Accessorie extends Model
{
    use HasFactory;
    protected $fillable = [
        'full_name',
        'email_id',
        'mobile',
        'page'
    ];
}
