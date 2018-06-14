<?php

namespace App\Http\Controllers\API\v1\Admin;

use Illuminate\Http\Request;
use Illuminate\Validation\Rule;
use Illuminate\Support\Facades\Hash;
use App\Http\Controllers\Controller;
use App\User;

class UpdateController extends Controller
{
    public function __invoke(Request $request, $id)
    {
        $id = $request->user()->id;
    	$this->validateRequest($request, $id);
    	$this->updateAdmin($request, $id);
    	return response()->json([
    		'status' => 'success',
    		'message' => 'Admin updated successfully'
    	]);
    }

    public function updatePassword(Request $request, $id)
    {
        $id = $request->user()->id;
    	$this->validatePassword($request, $id);
    	$password = Hash::make($request->password);
    	User::find($id)->update(['password'=>$password]);
    	return response()->json([
    		'status'  =>  'success',
    		'message' =>  'Password updated successfully'
    	]);
    }

    private function validatePassword($request, $id)
    {
    	$this->validate($request, [
    		'old_password' => "required|password:users,password,$id",
    		'password' => 'required',
    		'confirm_password' => 'required|same:password'
    	]);
    }

    private function updateAdmin($request, $id)
    {
    	User::find($id)->update($request->all());
    }

    private function validateRequest($request, $id)
    {
    	$this->validate($request, [
    		'name' => ['required', Rule::unique('users')->ignore($id)],
    		'email' => ['required', Rule::unique('users')->ignore($id), 'email']
    	]);
    }
}
