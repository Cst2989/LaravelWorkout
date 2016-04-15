<?php

namespace App\Http\Controllers;
use App\Workout;
use App\Measurement;
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
		return view('workouts.index');
	}
	public function getDay(Request $request, $week , $day)
	{
		$matchThese = ['user_id' => $request->user()->id, 'week' => $week,'day' => $day];
		$workout = Workout::where($matchThese)->first();
		$value = 0;
		if ($workout) {
			$barely_made_it = $workout->barely_made_it;
			if ($barely_made_it == 1) {
				$value = 1;
			}
			else{
				$value = 2;
			}
		}
		return response()->json(json_encode($value));
	}
	public function getMeasurements(Request $request, $week){

		$matchThese = ['user_id' => $request->user()->id, 'week' => $week , 'calendar' => 1];
		$workout = Measurement::where($matchThese)->first();

		return response()->json(json_encode($workout));
	}
	public function store(Request $request)
	{
		$request->user()->workouts()->create([
			'day' => $request->day,
			'week' => $request->week,
			'nail_it' => $request->nail_it,
			'barely_made_it' => $request->barely_made_it,
			]);
		
	}
	public function storeMeasurements(Request $request){

		$request->user()->measurements()->create([
			'week' => $request->week,
			'weight' => $request->weight,
			'chest' => $request->chest,
			'waist' => $request->waist,
			'arm' => $request->arm,
			'thigh' => $request->thigh,
			'calendar' => '1',
			]);
	}

	public function updateMeasurements(Request $request){
		$request->user()->measurements()
            ->where('id', $request->id)
            ->update([
           	'weight' => $request->weight,
			'chest' => $request->chest,
			'waist' => $request->waist,
			'arm' => $request->arm,
			'thigh' => $request->thigh,
            ]);
	}
}
