<?php

namespace App\Http\Controllers\API\v1\Admin;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\User;

class AddController extends Controller
{
    public function __invoke (Request $request)
    {
    	$this->validateRequest($request);
    	$this->insertAdmin($request);
    	return response()->json([
    		'status'  =>  'success',
    		'message'  =>  'Admin added successfully'
    	]);
    }

    private function insertAdmin($request)
    {
    	$admin = $request->all();
    	$admin['password'] = bcrypt($request->password);
    	User::create($admin);	
    }

    private function validateRequest($request)
    {
    	$this->validate($request, [
    		'name'  =>  'required|unique:users',
    		'email'  =>  'required|email|unique:users',
    		'password'  =>  'required',
    		'confirm_password'  =>  'same:password'
    	]);
    }
}
