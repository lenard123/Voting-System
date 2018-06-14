<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class Util extends Controller
{
	/**
	 * Delete an Image
	 * @param 	{String}	$image
	 *
	 */
	public static function deleteImage ($image) {
		if (Util::isDefaultImage($image)) return;
		Storage::delete($image);
	}

	/**
	 * Get the id of current election
	 * 
	 * @return 	{Int}	$id
	 */
    public static function getCurrentElection ()
    {
    	return \App\Election::where('id', '>', 0)->orderBy('id', 'desc')->first()->id;
    }

    /**
     * Get the status of current Election
     * 
     * @return  {Int}   $electio_status
     */
    public static function getElectionStatus () 
    {
        return \App\Election::find(Util::getCurrentElection())->status;
    }

    /**
     * Upload image and return it's path
     * @param 	{Request}	$request
     * @param 	{String}	$directory
     * @param 	{String}	$default_image 
     * @return 	{String}	$image_path
     */
    public static function getImagePath(Request $request, $directory, $default_image, $filename=null)
    {
    	$filename = $filename ?: time().' .jpg';
    	if (empty($request->image)) return $default_image;
		return $request->file('image')->storeAs($directory, $filename);
    }

    /** 
     * Check if image is default
     * @param 	{String}	$image
     * @return 	{Boolean}	$isDefault
     */
    public static function isDefaultImage ($image)
    {
    	return ($image == config('app.nominee_image'));
    }
}
