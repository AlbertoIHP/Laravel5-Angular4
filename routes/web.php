<?php

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

/* *********************** Webservice API Routes - START ************************** */
/*Route::group(['prefix' => 'api'], function() {
   Route::controller('/v1', 'Api\v1\WebserviceController');
});

Route::namespace('Api')->group(function () {
   Route::resource('v1', 'v1\WebserviceController');
	// Controllers Within The "App\Http\Controllers\Admin" Namespace
});

Route::get('/{any?}', function () {

});

/* *********************** Webservice API Routes - END ************************** */





Route::get('/', function () {
  return view('welcome');
});


Auth::routes();

Route::get('/home', 'HomeController@index');

Route::resource('users', 'UserController');

Route::resource('cars', 'CarController');
