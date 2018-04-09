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
Route::get('/',function () {
    return redirect('voter');
});

//Voter
Route::group(['middleware' => 'vlog'], function(){
	Route::get('voter/login', 'UserController@login');
	Route::get('voter/', 'UserController@index');
	Route::get('voter/vote', 'UserController@vote')->middleware('vote');
	Route::get('voter/result', 'UserController@result')->middleware('vote');	
});


//VOTER API
Route::post('api/vlogin', 'AuthController@voterLogin');
Route::post('api/submitvote', 'ResultController@submitVote');
Route::get('api/electioninfo', 'ResultController@electioninfo');
Route::get('api/voteresult', 'ResultController@voteresult');


Route::get('api/test', function(){
	echo App\Http\Controllers\ElectionController::test();
});

//Admin
Route::group(['middleware' => 'chkLogin'], function(){
	Route::get('admin/', 'AdminController@index'); //Index Page
	Route::get('admin/login', 'AdminController@login'); // Login Page
	Route::get('admin/manageposition', 'AdminController@managePosition'); // Manage Position
	Route::get('admin/managepartylist', 'AdminController@managePartylist'); // Manage Partylist
	Route::get('admin/managenominee', 'AdminController@manageNominee'); //Manage Nominee
	Route::get('admin/managevoter', 'AdminController@manageVoter'); //Manage Voter
	Route::get('admin/manageaccount', 'AdminController@manageAdmin'); //Manage Admin	
	Route::get('admin/result', 'AdminController@result');
	Route::get('admin/final', 'AdminController@finalresult');
});


//ADMIN API
Route::group(['middleware' => 'adminApi'], function(){
	Route::group(['middleware'=>'election'], function(){
		Route::post('api/login', 'AuthController@login');  //Login
		Route::get('api/logout', 'AuthController@logout'); //Logout
		Route::resource('api/position', 'PositionController'); //Manage position
		Route::resource('api/partylist', 'PartylistController'); //Manage Partylist
		Route::resource('api/nominee', 'NomineeController'); //Manage Nominees
		Route::resource('api/voter', 'VoterController'); //Manage Voter
		Route::resource('api/account', 'AccountController'); //Manage Account
		Route::resource('api/election', 'ElectionController'); //
		Route::get('api/reset', 'ElectionController@reset');
	});

});
