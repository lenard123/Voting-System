<?php

namespace App\Http\Controllers\API\v1\Voter;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Voter;

class DeleteController extends Controller
{
    public function __invoke($id)
    {
    	Voter::destroy($id);
    	return response()->json([
    		'status' => 'success',
    		'message' => 'Voter deleted successgully.'
    	]);
    }
}
