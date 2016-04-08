<?php

namespace App\Http\Controllers;

use App\Task;
use App\Http\Requests;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class TaskController extends Controller
{
	/**
     * The task repository instance.
     *
     * @var TaskRepository
     */
    



    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
    	$this->middleware('auth');

    	
    }
    public function index(Request $request)
    {
    	$tasks = Task::where('user_id', $request->user()->id)->get();

    return view('tasks.index', [
        'tasks' => $tasks,
    ]);
    }
    public function json(Request $request)
    {
    	$tasks = Task::where('user_id', $request->user()->id)->get();

   		return response()->json(json_encode($tasks));
    }
    public function store(Request $request)
    {
    	$this->validate($request, [
    		'name' => 'required|max:255',
    		]);

    	$request->user()->tasks()->create([
    		'name' => $request->name,
    		]);

    	return redirect('/tasks');

    // Create The Task...
    }

    /**
 * Destroy the given task.
 *
 * @param  Request  $request
 * @param  Task  $task
 * @return Response
 */
    public function destroy(Request $request, Task $task)
    {
    	$this->authorize('destroy', $task);

    	$task->delete();

    	return redirect('/tasks');
    }
}