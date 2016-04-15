<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Measurement extends Model
{
	protected $fillable = [
	'calendar', 'week', 'weight','chest','waist','arm','thigh'];
    public function user()
	{
		return $this->belongsTo(User::class);
	}
}
