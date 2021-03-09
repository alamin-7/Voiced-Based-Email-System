<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use App\Registration;
use App\http\Requests;
use DB;
use Illuminate\Support\Facades\Redirect;
use Session;
session_start();

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

	public function loginsubmit(Request $req)
	{
		Registration::select('*')->where(
    		[
    			['username', '=', $req->email],
    			['password','=', $req->password]
    		]
    	)->get();
    	$req->session()->put('logData',[$req->input()]);
    	return redirect('/login');
		//return view('admin.login');
	}

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
    	return redirect('/')->with('response', 'Registered Successfully');
    }
    public function dashboard()
    {
        return view('admin.dashboard');
    }
}
