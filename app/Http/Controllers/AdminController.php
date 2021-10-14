<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use App\Registration;
use App\Message;
use App\http\Requests;
use Illuminate\Support\Facades\Hash;
use DB;
use Illuminate\Support\Facades\Redirect;
use Session;
session_start();
use Mail;

class AdminController extends Controller
{
	public function login()
	{
		return view('admin.login');
	}

    public function register_show()
    {
        return view('admin.register');
    }

	/*public function loginsubmit(Request $req)
	{
		$users = Registration::select('*')->where(
    		[
    			['username', '=', $req->username],
    			['password','=', $req->password]
    		]
    	)->get();
    	$req->session()->put('logData',[$req->input()]);
        if($users){
    	return redirect('/dashboard');
        }
		//return view('admin.login');
	}*/

    public function register(Request $req)
    {
    	$this->validate($req,[
    		'firstname'=>'required',
    		'lastname'=>'required',
    		'username'=>'required',
    		'password' => 'min:3|required_with:password_confirm|same:password_confirm',
    		'password_confirm'=>'min:3',

    		//'password' => 'required|confirmed',
    		//'password'=>'required',
    		//'password' => 'nullable|required_with:password_confirmation|string|confirmed',
    		//'password_confirm'=>'required',
    		//'password' => 'required|confirmed|min:6',

    	]);
    //	return 'Validation passed';
    	$registrations = new Registration;
    	$registrations->firstname = $req->input('firstname');
    	$registrations->lastname = $req->input('lastname');
    	$registrations->username = $req->input('username');
    	$registrations->password = $req->input('password');
    	$registrations->password_confirm = $req->input('password_confirm');
    	$registrations->save();
    	//return redirect('/welcome')->with('response', 'Registered Successfully');
        return view('welcome');
    }
    /*public function dashboard()
    {
        return redirect('/dashboard');
    }*/
    public function writemessage()
    {
        return view('admin.writemessage');
    }
    public function writemessage_dashboard()
    {
        return view('admin.dashboard');
    }
    public function store_message(Request $req)
    {

          Mail::send('admin.testMail', [
            'data'=>$req->message
        ], function($m) use ($req){
            $m->to($req->reciver);
            $m->subject($req->subject);
        });

        $messages = new Message;
        $messages->sender = $req->input('sender');
        $messages->reciver = $req->input('reciver');
        $messages->message = $req->input('message');
        $messages->subject = $req->input('subject');
        $messages->save();

        return redirect('/dashboard')->with('response', 'Registered Successfully');
    }


    public function index()
    {
         $users = DB::select('select subject,message, sender from messages where reciver="arafat@gmail.com"');
         return view('admin.dashboard',['users'=>$users]);
    }
    /*public function loginsubmit(Request $req)
    {
        $users = DB::select('select username,password from registrations where
            username="$req->username"');
        if($users){
        return view('admin.dashboard', ['users'=>$users]);
        }
        else
        {
            echo "Errors"
        }
    }*/

     public function loginsubmit(Request $request)
    {
        $request->session()->put('data', $request->input('username'));
            /*$messages = [
            "username.required" => "Username is required",
            "username.username" => "Username is not valid",
            "username.exists" => "Username doesn't exists",
            "password.required" => "Password is required",
            "password.min" => "Password must be at least 3 characters"
        ];*/


       /* $this->validate($request,[
            'username'=>'required',
            'password' => 'min:3|required_with:password_confirm|same:password_confirm',
            'password_confirm'=>'min:3',

        ]);*/


     $username = $request->input('username');
     $password = $request->input('password');
     $old = Hash::make('123');

     $user = Registration::where('username', '=', $username)->first();
     if (!$user) {
        return response()->json(['success'=>false, 'message' => 'Login Fail, please check email id', 'data'=> $password]);
     }
     /*(if(!$user){
         return redirect()->back()->withInput($request->only('username', 'remember'))->withErrors([
                'approve' => 'Invalid username or password',
            ]);
     }*/
     if($password == $user->password)
     {
        return redirect('/dashboard');
     }

     /*if ((Hash::check($password, $user->password))) {
        return response()->json(['success'=>false, 'message' => 'Login Fail, pls check password', 'data'=> $password]);
     }*/
       // return response()->json(['success'=>true,'message'=>'success', 'data' => $user]);
     return back()->withInput()->withErrors(['username' => 'invalid username or password']);
     //return back()->withInput();

      //$users = DB::select('select subject,message, sender from messages where reciver="arafat@gmail.com"');
      //return view('admin.dashboard',['users'=>$users]);
     }
}