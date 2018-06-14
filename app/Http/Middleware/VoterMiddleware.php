<?php

namespace App\Http\Middleware;

use Closure;

class VoterMiddleware
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
        if (!$request->user()->tokenCan('vote')) {
            return response()->json([
                'error' => 'Unauthenticated.'
            ], 401);
        }
        return $next($request);
    }
}
