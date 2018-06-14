<?php

namespace App\Http\Controllers\API\v1\Admin;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Http\Controllers\Controller;
use App\Http\Controllers\Util;
use App\User;

class LoginController extends Controller
{
	/**
	 * Admin Login
	 * @param 	{Request} $request
	 * @return 	{Response} result
	 */
    public function __invoke(Request $request)
    {
    	$this->validateRequest($request);

    	if ($this->checkLogin($request)) {
    		$user = Auth::user();
    		$result['status'] = 'success';
    		$result['message'] = 'Login Successfully';
            $result['user'] = $user;
            $result['election_status'] = Util::getElectionStatus();
    		$result['token'] = $user->createToken('My app', ['admin'])->accessToken;
    	} else {
    		$result['status'] = 'failed';
    		$result['message'] = 'Wrong email or password';
    	}

    	return response()->json($result);

    }

    /**
     * Validate Request
     * @param 	{Request}	$request
     * @return 	{Boolean}	isValid
     */
    private function validateRequest($request)
    {
    	$this->validate($request, [
    		'email' => 'required|email',
    		'password'=> 'required'
    	]);
    }

    /**
     * Check Credential
     * @param 	{Request}	$request
     * @return 	{Boolean}	isLogin
     */
    private function checkLogin($request)
    {
    	return Auth::attempt([
    		'email' => $request->email, 
    		'password' => $request->password
    	]);
    }
}
