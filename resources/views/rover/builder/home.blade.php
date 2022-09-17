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
    <input required type="text" name="username" class="form-control" pattern="[a-z0-9]+">
    <br>
    <label>Domain</label>
    <input required type="text" name="domain" class="form-control" pattern="[a-zA-Z.]+\.[a-zA-Z]+" value="" placeholder="abdullah.com">
    <br>
    <label>Password</label>
    <input type="password" name="password" class="form-control " required >
    <br>
    <label>PHP Version</label>
    <select name="php_version" id="php_version" class="form-control" required>
        <option value="">Select</option>
        @foreach ($php_versions as $version)
            <option value="{{$version}}">{{$version}}</option>
        @endforeach
    </select>
    <br>
    <input type="submit" value="Build Rover" class="btn btn-success btn-block">

</form>
@endsection
