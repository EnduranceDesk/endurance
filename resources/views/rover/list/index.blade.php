@extends('layouts.page')
@section('title')
Rovers
@endsection
@section("page_title")
Rovers
@endsection
@section("page_content")
    @foreach($rovers as $rover)
        @include("rover.list.partials.rovercard")
    @endforeach
@endsection