<?php

namespace App\Http\Middleware;

use Closure;

class MainAdminMiddleware
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
        if ($request->user()->id != 1) {
            return response()->json([
                'status' => 'failed',
                'message' => 'This can only be accessed by the main admin'
            ]);
        }
        return $next($request);
    }
}
