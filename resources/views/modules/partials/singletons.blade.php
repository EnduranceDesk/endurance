@component('layouts.partial_page')
@slot('title')

    <span style="font-size: 20px; color:#73879C; ">Commands</span>     <button class="btn btn-sm add" data-source="singleton-temp" data-destination="singletons"> <i class="fa fa-plus"></i></button>
@endslot
@slot("content")
    <div id="singletons">

    </div>
@endslot
@endcomponent
