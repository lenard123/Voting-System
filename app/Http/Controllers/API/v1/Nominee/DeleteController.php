<?php

namespace App\Http\Controllers\API\v1\Nominee;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Controllers\Util;
use App\Nominee;

class DeleteController extends Controller
{
    public function __invoke ($id) 
    {
    	$nominee = Nominee::find($id);
    	Util::deleteImage($nominee->image);
    	$nominee->delete();

    	return response()->json([
    		'status' => 'success',
    		'message'=> 'Nominee deleted successfully'
    	]);
    }
}
