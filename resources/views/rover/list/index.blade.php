@extends('layouts.page')
@section('title')
Rovers
@endsection
@section("page_title")
Rovers
@endsection
@section("page_content")
    @foreach($grouped as $base => $domains)
        @include("rover.list.partials.collapsable")
    @endforeach
@endsection
