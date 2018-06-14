<?php

namespace App\Http\Controllers\API\v1\Admin;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\User;

class DeleteController extends Controller
{
    public function __invoke($id)
    {
    	if ($id == 1) 
    		return response()->json([
    			'status' => 'failed',
    			'message' => 'You can\'t delete the main admin.'
    		]);
    	User::destroy($id);
    	return response()->json([
    		'status' =>  'success',
    		'message' => 'Admin deleted successfully.'
    	]);
    }
}
