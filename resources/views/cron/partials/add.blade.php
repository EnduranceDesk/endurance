@component('layouts.partial_page')
@slot('title')
    Add new cron job
@endslot
@slot("content")
    <form action="{{ route("cron.add.post", [ "rover" => $rover ])}}" method="post">
        @csrf
        <label>Command:</label>
        <input type="text" class="form-control" name="command" required>
        <br>
        <input type="submit" class="btn btn-sm btn-success" value="Add command">
    </form>
@endslot
@endcomponent
