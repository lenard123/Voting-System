<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use DB;

class PositionController extends Controller
{
    public static function getPosition(){
        $position = DB::table('POSITION');
        return $position->get();
    }

    public function index(){
    	$position = DB::select('SELECT * FROM POSITION');
    	echo json_encode($position);
    }

    public function store(Request $request){
    	$position = $request->input('position');
    	$query = DB::insert('INSERT INTO POSITION (POSITION) VALUES (?)',[$position]);
    	if($query){
    		$result = array('status'=>'success', 'message'=>'Data inserted successfully');
    	}else{
    		$result = array('status'=>'failed', 'message'=>'An error occured');
    	}
    	echo json_encode($result);
    }

    public function update(Request $request, $id)
	{
		$position = $request->input('position');;
		$query = DB::update('UPDATE POSITION SET POSITION=? WHERE ID=?',[$position, $id]);
    	if($query){
    		$result = array('status'=>'success', 'message'=>'Data updated successfully');
    	}else{
    		$result = array('status'=>'failed', 'message'=>'An error occured');
    	}
    	echo json_encode($result);		
	}

	public function destroy($id)
	{
		$query = DB::delete('DELETE FROM POSITION WHERE ID=?', [$id]);
    	if($query){
    		$result = array('status'=>'success', 'message'=>'Data deleted successfully');
    	}else{
    		$result = array('status'=>'failed', 'message'=>'An error occured');
    	}
    	echo json_encode($result);		
	}	
}
