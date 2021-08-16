<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Userrole;
class UserRoleController extends Controller
{
    public function store(Request $request){
        return Userrole::create($request->all());
    }
    public function index(){
        return Userrole::all();
    }
    public function delete(Request $request, $id){
        $user = Userrole::findOrFail($id);
        $user->delete();

        return 204;
    }

    public function update(Request $request, $id){
        $user = Userrole::findOrFail($id);
        $user->update($request->all());

        return $user;
    }

    public function show($id){
        return Userrole::find($id);
    }
}
