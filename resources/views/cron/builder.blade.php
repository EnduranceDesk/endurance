@extends('layouts.page')

@section('page_title')
Cron Builder
@endsection

@section('page_content')
@include("cron.partials.add")
@include("cron.partials.show")
@endsection

