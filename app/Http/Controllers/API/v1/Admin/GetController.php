<?php

namespace App\Http\Controllers\API\v1\Admin;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\User;

class GetController extends Controller
{
	public function __invoke()
	{
		return User::all();
	}

    public function show(Request $request, $id)
    {
    	$id = $request->user()->id;
    	return User::find($id);
    }
}
