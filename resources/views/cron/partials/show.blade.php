@component('layouts.partial_page')
@slot('title')
Existing cron jobs
@endslot

@slot("content")
<table class="table table-bordered ">
    <thead>
        <th>#</th>
        <th>Command</th>
        <th>Action</th>
    </thead>
    <tbody>
        @foreach ($entries as $key => $entry)
            <tr>
                <td>{{$key+1}}</td>
                <td>{{$entry}}</td>
                <td><a href="{{ route("cron.delete", ['rover' => $rover, 'command' => $entry ])}}" class="btn btn-sm btn-danger">Delete</a></td>
            </tr>
        @endforeach
    </tbody>
</table>

@endslot
@endcomponent
