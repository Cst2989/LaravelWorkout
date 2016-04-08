<?php

namespace App\Http\Controllers;
use App\Workout;
use App\Http\Requests;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class WorkoutController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
    }
     public function index(Request $request)
    {
    	$workouts = Workout::where('user_id', $request->user()->id)->get();

    return view('workouts.index', [
        'workouts' => $workouts,
    ]);
    }
}
