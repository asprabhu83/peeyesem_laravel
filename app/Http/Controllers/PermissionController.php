<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Permission;
class PermissionController extends Controller
{
    public function store(Request $request){
        return Permission::create($request->all());
    }
    public function index(){
        return Permission::all();
    }
    public function delete(Request $request, $id){
        $user = Permission::findOrFail($id);
        $user->delete();

        return 204;
    }

    public function update(Request $request, $id){
        $user = Permission::findOrFail($id);
        $user->update($request->all());

        return $user;
    }

    public function show($id){
        return Permission::find($id);
    }
}
