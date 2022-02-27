@component('layouts.partial_page')
@slot('title')

    <span style="font-size: 20px; color:#73879C; ">Ports</span>     <button class="btn btn-sm add" data-source="ports-temp" data-destination="ports"> <i class="fa fa-plus"></i></button>
@endslot
@slot("content")
    <div id="ports">

    </div>
@endslot
@endcomponent
