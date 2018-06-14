<?php

namespace App\Http\Middleware;

use Closure;

class HasVotedMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        if (!$this->hasVoted($request)) {
            return response()->json([
                'status'=>'failed',
                'message'=> 'You must vote first.'
            ], 500);
        }
        return $next($request);
    }

    private function hasVoted($request)
    {
        $x = \App\Result::where('voter_id', $request->user()->id)->count();
        return $x > 0;
    }    
}
