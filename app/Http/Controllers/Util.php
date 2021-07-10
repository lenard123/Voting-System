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
        if (empty($request->image)){
            return $default_image;
        }else if (config('app.cloudinary_enabled')) {
            return Util::uploadFileToCloudinary($request);
        } else {
            $filename = $filename ?: time().' .jpg';
            return $request->file('image')->storeAs($directory, $filename);
        }

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


    public static function getCloudinaryConfig()
    {
        $config = new \Cloudinary\Configuration\Configuration();
        $config->cloud->cloudName = config('app.cloudinary_cloud_name');
        $config->cloud->apiKey = config('app.cloudinary_api_key');
        $config->cloud->apiSecret = config('app.cloudinary_api_secret');
        $config->url->secure = true; 
        return $config;
    }


    public static function uploadFileToCloudinary($request)
    {
        try{
            $config = Util::getCloudinaryConfig();
            $cloudinary = new \Cloudinary\Cloudinary($config);
            $uploadApi = $cloudinary->uploadApi();

            $image = base64_encode(file_get_contents($request->file('image')));
            $result = $uploadApi->upload('data:image/gif;base64,'.$image, ['folder' => config('app.cloudinary_folder')]);

            return $result["url"];
        } catch (\Throwable $exception) {
            return config('app.cloudinary_image_error');
        }
    }

}
