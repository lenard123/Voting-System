<?php

namespace App\Http\Controllers\API\v1\Nominee;

use Illuminate\Http\Request;
use Illuminate\Validation\Rule;
use App\Http\Controllers\Controller;
use App\Http\Controllers\Util;
use App\Nominee;

class AddController extends Controller
{

    public function __invoke (Request $request)
    {
    	$this->validateRequest($request);
    	$this->insertNominee($request);
    	return response()->json([
    		'status' => 'success',
    		'message'=> 'Nominee added successfully'
    	]);
    }

    public function validateRequest ($request)
    {
    	$this->validate($request, [
            'name' => [
                'required',
                Rule::unique('nominee')->where(function($query){
                    $query->where('election_id', Util::getCurrentElection());
                })
            ],
            'student_id' => [
                'required',
                Rule::unique('nominee')->where(function($query){
                    $query->where('election_id', Util::getCurrentElection());
                })
            ],
    		'course' => 'required',
    		'position_id' => 'required|exists:position,id',
    		'partylist_id' => 'nullable|exists:partylist,id',
    		'image' => 'nullable|image'
    	]);
    }

    public function insertNominee ($request) 
    {
    	$nominee = $request->all();
        $default_image = config('app.cloudinary_enabled') ? config('app.cloudinary_image_default') : config('app.nominee_image');
    	$nominee['image'] = Util::getImagePath($request, config('app.nominee_directory'), $default_image);
    	$nominee['election_id'] = Util::getCurrentElection();
    	Nominee::create($nominee);
    }
}
