<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
//use App\Http\Controllers\Controller;
//use App\Http\Controllers\AuthController;
//use App\Http\Controllers\ResultController;

class AdminController extends Controller
{
	public function __construct(){
		$auth = new AuthController();
	}

    public function login(Request $request){
    	echo view('admin.login')->render();
    }

    public function index(){
    	echo view('admin.index')->render();
    }

    public function managePosition(){
    	echo view('admin.manageposition')->render();
    }

    public function managePartylist(){
    	echo view('admin.managepartylist')->render();
    }

    public function manageNominee(){
    	echo view('admin.managenominee')->render();
    }

    public function manageVoter(){
    	echo view('admin.managevoter')->render();
    }

    public function manageAdmin(Request $request){
        $action = $request->input('action');
        switch ($action) {
            case 'manage':
                $data['action'] = 'manage';
                break;
            default:
                $data['action'] = 'default';
                break;
        }
        echo view('admin.manageadmin', $data)->render();
    }

    public function result(){
        $data['electioninfo'] = ResultController::getElectionInfo();
        $data['voteresult'] = ResultController::getResult();
        $data['position'] = PositionController::getPosition();
        echo view('admin.result', $data)->render();        
    }

    public function finalresult(){
        $data['voteresults'] = ResultController::getResult();
        $data['positions'] = PositionController::getPosition();
        echo view('admin.final', $data)->render();
    }
}

