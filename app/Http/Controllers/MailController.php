<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;

use App\Models\User;
use App\Models\VerifyUser;
use Illuminate\Support\Facades\Auth;
use Carbon\Carbon;

class MailController extends Controller
{
    public function mail(Request $request){
        

        $email = $request->input('email');

        // Mail::raw('email', function($message) use ($email)
        // {
        //     $message->subject('Mailgun and Laravel are Easy!');
        //     $message->from('admin@drilld.com', 'Website Name');
        //     $message->to($email);
        // });

        $data = array('email'=>$email);

        Mail::send('email', $data, function($message) use($email)
        {
            $message->to($email, 'John Smith')->subject('Welcome to my site');
        });

        return response(['message' => 'successfully sent to '.$email.'']);


        // Mail::to($email)->view('email');
        // return back()->with('status','Mail sent successfully');    
    }

    public function sendResetLink(Request $request){
        $request->validate([
            'email'=>'required|email|exists:users,email'
        ]);

        $token = \Str::random(64);
        \DB::table('password_resets')->insert([
              'email'=>$request->email,
              'token'=>$token,
              'created_at'=>Carbon::now(),
        ]);
        
        $action_link = 'https://peeyesyemhyundai.co.in/psm-admin/?action=reset_password&token='.$token.'&email='.$request->email.'';
        $body = "We are received a request to reset the password for <b>Peeyesyem Hyundai</b> account associated with ".$request->email.". You can reset your password by clicking the link below";

       \Mail::send('email-forgot',['action_link'=>$action_link,'body'=>$body], function($message) use ($request){
             $message->from('noreply@example.com','Peeyesyem Hyundai');
             $message->to($request->email,'name')
                     ->subject('Reset Password');
       });

       return response(['message' => 'we have emailed your password reset link!']);
   }

   public function showResetForm(Request $request, $token = null){
       return view('dashboard.user.reset')->with(['token'=>$token,'email'=>$request->email]);
   }

   public function resetPassword(Request $request){
       $request->validate([
           'email'=>'required|email|exists:users,email',
           'password'=>'required|confirmed',
           'password_confirmation'=>'required',
       ]);

       $check_token = \DB::table('password_resets')->where([
           'email'=>$request->email,
           'token'=>$request->token,
       ])->first();

       if(!$check_token){
           return back()->withInput()->with('fail', 'Invalid token');
       }else{

           User::where('email', $request->email)->update([
               'password'=>\Hash::make($request->password)
           ]);

           \DB::table('password_resets')->where([
               'email'=>$request->email
           ])->delete();

           return 'success';
       }
   }
}
