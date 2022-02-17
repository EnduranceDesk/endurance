@extends('layouts.page')
@section('title')
View File
@endsection
@section("page_title")
View File
@endsection
@section("page_content")
<label>Filename:</label>
<p>{{$filename}}</p>
<br>
<label>Content:</label>
<textarea class="form-control" readonly rows="30">{{$content}}</textarea>
@endsection
