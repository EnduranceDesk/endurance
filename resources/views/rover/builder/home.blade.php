@extends('layouts.page')
@section('title')
Rover Builder
@endsection
@section("page_title")
Rover Builder
@endsection
@section("page_content")
<form action="{{ route("rover.build") }}" method="post" autocomplete="off">
    @csrf
    <label>Username</label>
    <input required type="text" name="username" class="form-control">
    <br>
    <label>Domain</label>
    <input required type="text" name="domain" class="form-control" value="" placeholder="abdullah.com">
    <br>
    <label>Password</label>
    <input type="password" name="password" class="form-control " required >
    <br>
    <input type="submit" value="Build Rover" class="btn btn-success btn-block">

</form>
@endsection