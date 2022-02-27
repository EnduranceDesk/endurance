@extends('layouts.page')
@section('title')
Step 1: Build module
@endsection
@section("page_title")
Step 1: Add files
@endsection
@section("page_content")
    <form action="{{ route("modules.create.step2") }}" method="post" enctype="multipart/form-data">
        @csrf
        <label>Upload necessary files which may be used by this module</label>
        <input type="file" name="stubs[]" required multiple class="form-control" >
        <br>
        <input type="submit" class="btn btn-primary btn-sm" value="Proceed">
    </form>
@endsection
