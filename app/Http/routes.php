<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the controller to call when that URI is requested.
|
*/

// Authentication Routes...
Route::auth();

Route::get('/', function () {
    return view('welcome');
});
Route::get('/tasks', 'TaskController@index');
Route::get('/tasksJ', 'TaskController@json');
Route::post('/task', 'TaskController@store');
Route::delete('/task/{task}', 'TaskController@destroy');


Route::get('/workouts', 'WorkoutController@index');
Route::post('/workoutq', 'WorkoutController@store');
Route::get('/workout/{week}/{day}', 'WorkoutController@getDay');
Route::get('/measurements/{week}', 'WorkoutController@getMeasurements');
Route::post('/measurements', 'WorkoutController@storeMeasurements');
Route::post('/measurements/update', 'WorkoutController@updateMeasurements');