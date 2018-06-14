<?php

namespace App\Http\Controllers\API\v1\Election;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Controllers\Util;
use DB;

class ResultController extends Controller
{
    public function __invoke(Request $request)
    {

    	$result = $this->getResult(Util::getCurrentElection());
    	return response()->json(
    		$result
    	);
    }

    public function finalResult($id)
    {
        $result = $this->getResult($id);
        $position = \App\Position::where('election_id', $id)->get();
        $nominee = \App\Nominee::where('election_id', $id)->get();
        $partylist = \App\Partylist::where('election_id', $id)->get();
        return response()->json([
            'result'=>$result,
            'position'=>$position,
            'nominee'=>$nominee
        ]);
    }

    private function getResult($id)
    {
        return \App\Result::select(DB::raw('position_id,nominee_id,count(*) as votes'))
                ->groupBy('position_id', 'nominee_id')
                ->where('election_id', $id)
                ->orderBy('votes', 'DESC')
                ->get();
    }

}
