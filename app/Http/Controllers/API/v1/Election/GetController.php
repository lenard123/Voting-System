<?php

namespace App\Http\Controllers\API\v1\Election;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class GetController extends Controller
{
    public function __invoke(){
    	return \App\Election::where('status', 3)->orderBy('id', 'desc')->get();
    }
}
