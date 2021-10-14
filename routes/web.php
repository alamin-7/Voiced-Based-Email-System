<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});
Route::get('/register', 'AdminController@register_show');
Route::post('/register', 'AdminController@register');
Route::get('/login', 'AdminController@login');
Route::post('/loginsubmit', 'AdminController@loginsubmit');
Route::get('/dashboard', 'AdminController@dashboard');
Route::get('/writemessage', 'AdminController@writemessage');
Route::get('/dashboard', 'AdminController@writemessage_dashboard');
Route::post('/writemessage', 'AdminController@store_message');
Route::get('/dashboard', 'AdminController@index');
/*Route::get('/sendmail', function(){
	$details = [
		'title'=>'Mail from Surfside media',
		'body'=>'This is from testing email using smtp'
	];
	\Mail::to('alamin188914@gmail.com')->send(new \App\Mail\TestMail($details));
	echo "Email has been sent";
});*/

