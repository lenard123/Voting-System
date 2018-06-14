<?php

namespace App\Http\Controllers\API\v1\Partylist;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Partylist;

class DeleteController extends Controller
{
    public function __invoke($id)
    {
    	Partylist::find($id)->delete();
    	return response()->json([
    		'status'	=>	'success',
    		'message'	=>	'Partylist deleted successfully'
    	]);
    }
}
