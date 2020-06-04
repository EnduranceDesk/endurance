@extends('layouts.page')

@section('title')
Server IP
@endsection

@section("page_title")
Configure Server IP
@endsection

@section("page_content")
<form action="{{route("server.config.ip.post")}}" autocomplete="off" method="post">
    @csrf
     <label>Server Name</label>
    <input required type="text" name="name"  value="@if(isset($server->name)){{ $server->name }}@endif" class="form-control">
    <br>
    <label>IP Address</label>
    <input required type="text" name="ip" minlength="7" maxlength="15" size="15" pattern="^((\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.){3}(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])$" class="form-control" value="@if(isset($server->ip)){{ $server->ip }}@endif">
    <br>
    <input type="submit" value="Submit" class="btn btn-success btn-block">
</form>
@endsection