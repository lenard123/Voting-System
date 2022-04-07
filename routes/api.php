<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

// Route::middleware('auth:api')->get('/user', function (Request $request) {
//     return $request->user();
// });
Route::get('/user', 'Auth\UserController@index')->middleware('auth:api');


Route::prefix('v1')->group(function(){ //Version 1 of my Rest API
	//Voters API
	Route::post('voter/login', 'API\v1\Voter\LoginController'); 

	Route::middleware(['auth:voterAPI', 'voter'])->group(function() {
		Route::get('election/information', 'API\v1\Election\InformationController');
		Route::post('election/vote', 'API\v1\Election\VoteController')->middleware('isvoted');
		Route::get('election/result', 'API\v1\Election\ResultController')->middleware('has_voted');
	});

	//Admins API
	Route::post('admin/login', 'API\v1\Admin\LoginController');//Excluding Login for auth middleware

	Route::middleware(['auth:api', 'admin', 'election'])->group(function(){

		Route::prefix('admin')->group(function(){//Route /api/v1/admin
			Route::get('information', 'API\v1\Admin\InformationController');
			Route::get('logout', 'API\v1\Admin\LogoutController');
			Route::get('{id}', 'API\v1\Admin\GetController@show');
			Route::put('{id}', 'API\v1\Admin\UpdateController');
			Route::put('password/{id}', 'API\v1\Admin\UpdateController@updatePassword');
			Route::post('', 'API\v1\Admin\AddController')->middleware('main_admin');
			Route::get('', 'API\v1\Admin\GetController')->middleware('main_admin');
			Route::delete('{id}', 'API\v1\Admin\DeleteController')->middleware('main_admin');
		});

		Route::prefix('election')->group(function(){
			Route::get('result/{id}', 'API\v1\Election\ResultController@finalResult');
			Route::get('results', 'API\v1\Election\ResultController');
			Route::post('start', 'API\v1\Election\StartController');
			Route::post('stop', 'API\v1\Election\StopController');
			Route::get('', 'API\v1\Election\GetController');
		});

		Route::prefix('position')->group(function(){
			Route::post('', 'API\v1\Position\AddPositionController');
			Route::get('', 'API\v1\Position\GetPositionController');
			Route::delete('{id}', 'API\v1\Position\DeletePositionController');
			Route::put('{id}', 'API\v1\Position\UpdatePositionController');
		});

		Route::prefix('partylist')->group(function(){
			Route::post('', 'API\v1\Partylist\AddController');
			Route::get('',	'API\v1\Partylist\GetController');
			Route::delete('{id}', 'API\v1\Partylist\DeleteController');
			Route::put('{id}',	'API\v1\Partylist\UpdateController');
		});

		Route::prefix('nominee')->group(function(){
			Route::post('', 'API\v1\Nominee\AddController');
			Route::get('', 'API\v1\Nominee\GetController');
			Route::delete('{id}', 'API\v1\Nominee\DeleteController');
			Route::put('{id}', 'API\v1\Nominee\UpdateController');			
		});

		Route::prefix('voter')->group(function(){
			Route::post('', 'API\v1\Voter\AddController');
			Route::get('', 'API\v1\Voter\GetController');
			Route::delete('{id}', 'API\v1\Voter\DeleteController');
			Route::put('{id}', 'API\v1\Voter\UpdateController');	
		});

	});

});


