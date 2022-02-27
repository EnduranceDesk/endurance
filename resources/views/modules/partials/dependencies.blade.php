@component('layouts.partial_page')
@slot('title')

    <span style="font-size: 20px; color:#73879C; ">Dependencies</span>     <button class="btn btn-sm add" data-source="dependency-temp" data-destination="dependencies"> <i class="fa fa-plus"></i></button>
@endslot
@slot("content")
    <div id="dependencies">

    </div>
@endslot
@endcomponent
