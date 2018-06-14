<?php

namespace App\Http\Controllers\API\v1\Voter;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Controllers\Util;
use Illuminate\Support\Facades\Auth;

class LoginController extends Controller
{
    public function __invoke(Request $request)
    {
    	//return response()->json(Auth::guard('user'));
    	if (Auth::guard('voter')->attempt(['student_id' => $request->student_id, 'password' => 'admin', 'election_id' => Util::getCurrentElection()])) {
    		return response()->json([
    			'status'  =>  'success',
    			'message'  =>  'Login successfully.',
    			'user'  => Auth::guard('voter')->user(),
                'election_status' => Util::getElectionStatus(),
    			'token' => Auth::guard('voter')->user()->createToken('My Token', ['vote'])->accessToken
    		]);
    	} else {
    		return response()->json([
    			'status'  =>  'failed',
    			'message'  =>  'Invalid ID.'
    		]);
    	}
    }
}
