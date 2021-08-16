<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;

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
}
