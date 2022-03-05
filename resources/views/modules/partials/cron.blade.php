@component('layouts.partial_page')
@slot('title')

    <span style="font-size: 20px; color:#73879C; ">Cron entries</span>     <button class="btn btn-sm add" data-source="cron-temp" data-destination="cron"> <i class="fa fa-plus"></i></button>
@endslot
@slot("content")
    <div id="cron">

    </div>
@endslot
@endcomponent
