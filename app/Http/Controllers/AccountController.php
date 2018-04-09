<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use DB;
use Illuminate\Database\QueryException;

class AccountController extends Controller
{
    public function index(){
    	$query = DB::select('SELECT * FROM `ADMIN` WHERE `ID` != 1');
    	echo json_encode($query);
    }

    public function store(Request $request){
    	$name = $request->input('name');
    	$user = $request->input('user');
    	$pass = $request->input('pass');

    	try{
    		DB::insert('INSERT INTO `ADMIN` (`NAME`, `USERNAME`, `PASSWORD`) VALUES (?,?,?)',[$name, $user, $pass]);
    		$result = '{"status":"success","message":"Account inserted successfully."}';
    	}catch(QueryException $err){
    		if($err->errorInfo[1] == 1062){
	    		$result = '{"status":"failed", "message": "Username already exists, try a different one."}';
	    	}else{
	    		$result = '{"status":"failed", "message": "'. $err->getMessage() .'"}';
	    	}
    	}
    	echo $result;
    }

    public function show($id){
    	$id = session('ID');
		//$query = DB::select('SELECT * FROM `ADMIN` WHERE `ID`=?',[$id])->first();
		$query = DB::table('ADMIN')->select('NAME','USERNAME')->where('ID',$id)->first();
		echo json_encode($query);
    }

    public function update(Request $request, $id)
	{

		$name = $request->input('name');
    	$user = $request->input('user');
    	$newpass = $request->input('newpass');
    	$oldpass = $request->input('oldpass');
    	$action = $request->input('action');
    	$id = session('ID');
    	try{
    		if($action == 'updateUser'){
    			$query = 'UPDATE `ADMIN` SET `NAME`=?, `USERNAME`=? WHERE ID=?';
    			$params = [$name, $user, $id];
    		}else{
    			$x = DB::table('ADMIN')->where([['ID',$id],['PASSWORD',$oldpass]]);
    			if($x->count() == 1){
 					$query = 'UPDATE `ADMIN` SET `PASSWORD`=? WHERE ID=?';
    				$params = [$newpass, $id];   				
    			}else{
    				die('{"status":"failed", "message": "Wrong Password"}');
    			}
    			
    		}
    		DB::update($query, $params);
    		$result = '{"status":"success","message":"Admin updated successfully."}';
    	}catch(QueryException $err){
    		if($err->errorInfo[1] == 1062){
	    		$result = '{"status":"failed", "message": "Username already exists, try a different one."}';
	    	}else{
	    		$result = '{"status":"failed", "message": "'. $err->getMessage() .'"}';
	    	}
    	}
    	echo $result;
	}

	public function destroy($id)
	{
		try{
			DB::delete('DELETE FROM `ADMIN` WHERE `ID`=?',[$id]);
			$result = '{"status":"success","message":"Admin deleted successfully."}';
    	}catch(QueryException $err){
    		$result = '{"status":"failed", "message": "'. $err->getMessage() .'"}';
    	}
    	echo $result;
	}	


}
