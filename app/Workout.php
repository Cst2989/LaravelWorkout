<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Workout extends Model
{

	protected $fillable = [
	'day', 'week', 'nail_it','barely_made_it',
	];

	
	public function user()
	{

		return $this->belongsTo(User::class);
	}
}
