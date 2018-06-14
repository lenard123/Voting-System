<?php

namespace App\Http\Controllers\API\v1\Admin;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Http\Controllers\Controller;

class LogoutController extends Controller
{
    public function __invoke()
    {
    	Auth::guard('web')->logout();
    	Auth::guard('voter')->logout();
    	return response()->json([
    		'status'  =>  'success',
    		'message'  => 'Logout successfully',
    		'user'  => Auth::user()
    	]);
    }
}