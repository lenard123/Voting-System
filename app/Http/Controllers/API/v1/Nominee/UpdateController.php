<?php

namespace App\Http\Controllers\API\v1\Nominee;

use Illuminate\Http\Request;
use Illuminate\Validation\Rule;
use App\Http\Controllers\Controller;
use App\Http\Controllers\Util;
use App\Nominee;

class UpdateController extends Controller
{
    public function __invoke (Request $request, $id)
    {
    	$this->validateRequest($request, $id);
    	$this->updateNominee($request, $id);
    	return response()->json([
    		'status' => 'success',
    		'message' => 'Nominee updated successfully'
    	]);
    }

    private function validateRequest($request, $id)
    {
    	$this->validate($request, [
    		'name' => [
                'required', 
                Rule::unique('nominee')->ignore($id)->where(function($query){
                    $query->where('election_id', Util::getCurrentElection());
                })
            ],
    		'student_id' => [
                'required', 
                Rule::unique('nominee')->ignore($id)->where(function($query){
                    $query->where('election_id', Util::getCurrentElection());
                })
            ],
    		'course' => 'required',
    		'position_id' => 'required|exists:nominee,position_id',
    		'partylist_id' => 'nullable|exists:nominee,partylist_id'
    	]);
    }

    private function updateNominee ($request, $id) 
    {
    	$nominee = Nominee::find($id);
    	$default_image = $nominee->image;
    	    	
    	$nominee->name = $request->name;
    	$nominee->course = $request->course;
    	$nominee->student_id = $request->student_id;
    	$nominee->position_id = $request->position_id;
    	$nominee->partylist_id = $request->partylist_id;
        $nominee->motto = $request->motto;
        $nominee->description = $request->description;
    	$nominee->image = Util::getImagePath($request, config('app.nominee_directory'), $default_image);
    	$nominee->save();

    	if (!empty($request->image))
    		Util::deleteImage($default_image);
    }

}
