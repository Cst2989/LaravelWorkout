<!-- resources/views/workouts/index.blade.php -->

@extends('layouts.react')

@section('content')
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <!-- Bootstrap Boilerplate... -->
    <div class="container">
        <div id="app"></div>
    </div>
@endsection