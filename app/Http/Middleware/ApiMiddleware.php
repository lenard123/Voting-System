<?php

namespace App\Http\Middleware;

use Closure;
use App\Http\Controllers\AuthController;

class ApiMiddleware
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
        if(!AuthController::isLogin() && $request->path() != 'api/login')
            if(!$request->is('api/nominee') && !$request->isMethod('GET') && !$request->is('api/position')) 
                die('{"status":"failed","message":"Unauthorized access!, login first"}');
        
        return $next($request);
    }
}
