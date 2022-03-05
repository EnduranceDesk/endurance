@component('layouts.partial_page')
@slot('title')

    <span style="font-size: 20px; color:#73879C; ">Configuration files</span>     <button class="btn btn-sm add" data-source="configurations-temp" data-destination="configurations"> <i class="fa fa-plus"></i></button>
@endslot
@slot("content")
    <div id="configurations">

    </div>
@endslot
@endcomponent
