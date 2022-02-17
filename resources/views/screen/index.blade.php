@extends('layouts.page')
@section('title')
Processes
@endsection
@section("page_title")
Processes
@endsection
@section("page_content")
<table class="table table-hover table-condensed table-bordered">
    <thead >
        <tr class="headings">
            <th>#</th>
            <th>Timeout</th>
            <th>Exit code</th>
            <th>Closed</th>
            <th>Success</th>
            <th>Started at</th>
            <th>Action</th>
        </tr>
    </thead>
    <tbody style="text-align: center;">
        @foreach($processes as $process)
        <tr>
            <td>PRS#{{$process->id}}</td>
            <td>{{$process->timeout}} secs</td>
            <td>{{$process->exitcode}}</td>
            <td>{{$process->closed}}</td>
            <td>{{$process->success}}</td>
            <td>{{$process->started_at->calendar()}}</td>
            <td>
                <a href="{{ route("file.view", ["filename" => $process->temp_log_path ]) }}" class="btn btn-primary btn-sm"> <i class="fa fa-eye"></i> Log</a>
                <a href="{{ route("file.view",  ["filename" => $process->temp_shell_file_path  ]) }}" class="btn btn-primary btn-sm"> <i class="fa fa-eye"></i> Script</a>
            </td>
        </tr>
        @endforeach
    </tbody>
</table>
@endsection
