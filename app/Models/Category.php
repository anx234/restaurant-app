<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    use HasFactory;
    protected $fillable = ['name','description','image_path']; //保存したいカラム名が複数の場合


    public function menus()
    {
        return $this->belongsToMany(Menu::class, 'category_menu');
    }
}
