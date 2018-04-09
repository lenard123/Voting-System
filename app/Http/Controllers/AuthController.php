<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use DB;

class AuthController extends Controller
{

    public static function isElection(){
        $query = DB::table('ELECTION')->where('STATUS',1);
        return ($query->count() == 1) ? true : false;
    }

    public static function isElectionFinish(){
        $query = DB::table('ELECTION')->where('STATUS',3);
        return ($query->count() == 1) ? true : false;        
    }

    public static function isLogin(){
    	return ((session('LOG') == 'IN') ? true : false);
    }

    public static function isVlogin(){
        return (session('VLOG') == 'IN');
    }

    public static function chkPass($pass){
        $id = session('ID');
        $query = DB::table('ADMIN')->where([['ID',$id],['PASSWORD',$pass]]);   
        if($query->count() == 1) return true;
        return false;
    }

    public function login(Request $request){
    	$username = $request->input('user');
    	$password = $request->input('pass');
    	
    	$query = DB::table('ADMIN')->where([['USERNAME',$username],['PASSWORD',$password]]);
    	
    	if($query->count() == 1){
    		$id = $query->get()->first()->ID;
	    	$result = array('status' => 'success', 'id' => $id, 'message' => 'Login successfully' );
	    	session(['LOG' => 'IN', 'ID'=>$id]);	    	
    	}else{
    		$result = array('status' => 'failed', 'message' => 'invalid username or password');
    	}

    	echo json_encode($result);

    }

    public function logout(Request $request){
         $request->session()->flush();  
         $result = array('status' => 'success', 'message'=>'Logout successfully');
         echo json_encode($result);
    }

    public function voterLogin(Request $request){
        $id = $request->input('voterid');
        $query = DB::table('VOTERS')->where(['STUDENTID'=>$id,'ISACTIVE'=>1]);
        if($query->count() == 1){
            $result = array('status' => 'success', 'id' => $id, 'message' => 'Login successfully' );
            session(['VLOG' => 'IN', 'VID'=>$query->first()->ID]);            
        }else{
            $result = array('status' => 'failed', 'message' => 'invalid Student ID');
        } 
        echo json_encode($result);       
    }

}
