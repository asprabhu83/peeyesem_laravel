<?php

namespace App\Http\Controllers;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\User;
use Illuminate\Support\Facades\DB;
use Laravel\Passport\RefreshToken;
use Laravel\Passport\Token;

class UserController extends Controller
{
    public function register(Request $request)
    {
        $data = $request->validate([
            'name' => 'required|max:255',
            'email' => 'required|email|unique:users',
            'password' => 'required|confirmed',
            'user_role' => 'required|max:255',
            'phone' => 'required'
        ]);

        $data['password'] = bcrypt($request->password);

        $user = User::create($data);

        $token = $user->createToken('API Token')->accessToken;


        return response([ 'user' => $user, 'token' => $token]);
    }

    public function login(Request $request)
    {
        $data = $request->validate([
            'email' => 'email|required',
            'password' => 'required'
        ]);

        if (!auth()->attempt($data)) {
            return response()->json(['status' => 'Unauthenticated'], 401);
        }else{
            $token = auth()->user()->createToken('API Token')->accessToken;

            $user_role=auth()->user()->user_role;

           $permission_id = DB::table('userroles')
           ->select('userroles.permission_id')->where('userroles.user_role',$user_role)
           ->get();



            return response(['status' => '200','user' => auth()->user(),'user_role' => auth()->user()->user_role , 'permission_id' => $permission_id, 'message' => 'success', 'token' => $token]);
        }

        

    }

    public function index(){
        return User::all();
    }

    public function delete(Request $request, $id){
        $user = User::findOrFail($id);
        $user->delete();

        return 204;
    }

    public function update(Request $request, $id){
        $user = User::findOrFail($id);
        $user->update($request->all());

        return $user;
    }

    public function show($id){
        return User::find($id);
    }

      public function currentUser(Request $request) {
       
          return Auth::user();
        }

        public function logout(Request $request){
            $user=Auth::user()->token();
            $user->revoke();
            return response(['message'=>'Log out Successfully']);
        }
}
