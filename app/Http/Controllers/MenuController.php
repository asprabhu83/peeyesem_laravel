<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\MenuTitle;
use App\Models\MenuItem;
use App\Models\SubMenu;

class MenuController extends Controller
{
    public function menu_title(Request $request) {
        $data = $request->validate([
            'menu_type'=>'required',
        ]);

        $res = MenuTitle::create($data);
        return response($res);
    }

    public function menu_item(Request $request) {
        $data = $request->validate([
            'menu_title_id'=>'required',
            'menu_name'=>'required',
            'menu_link'=>'required',
        ]);

        $res = MenuItem::create($data);
        return response($res);
    }

    public function sub_menu(Request $request) {
        $data = $request->validate([
            'menu_item_id'=>'required',
            'submenu_name'=>'required',
            'submenu_link'=>'required',
        ]);
        $res = SubMenu::create($data);
        return response($res);
    }

    public function menu_index() {
        return response (['menu'=>MenuTitle::with('menuTitles')->get()]);
    }

    public function get_menus($id) {
        $title = MenuTitle::find($id);
        $menu = MenuTitle::findOrFail($id)->menuTitles;
        $menu_id = $menu[0]['id'];
        $submenu = MenuItem::findOrFail($menu_id)->subMenu;

        return response(['title'=>$title, 'menu'=>$menu, 'submenu'=>$submenu]);
    }

    public function delete_menu($id) {
        $menu = MenuTitle::findOrFail($id);
        $menu->delete();

        return 204;
    }
    public function only_menu($id) {
        $menus = MenuTitle::findOrFail($id)->menuTitles;
        $res = [];
        foreach ($menus as $menu) {
            $res[]= $menu['menu_name'];
        };


        $all = MenuTitle::with('menuTitles')->get();
        return response(['menu'=>$all, 'names'=>$res]);
    }
}
