@component('layouts.partial_page')
@slot('title')

    <span style="font-size: 20px; color:#73879C; ">Logs</span>     <button class="btn btn-sm add" data-source="logs-temp" data-destination="logs"> <i class="fa fa-plus"></i></button>
@endslot
@slot("content")
    <div id="logs">

    </div>
@endslot
@endcomponent
