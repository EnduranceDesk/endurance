@component('layouts.partial_page')
@slot('title')
    <span style="font-size: 20px; color:#73879C; ">Scripts</span>     <button class="btn btn-sm add" data-source="scripts-temp" data-destination="scripts"> <i class="fa fa-plus"></i></button>
@endslot
@slot("content")
    <div id="scripts">

    </div>
@endslot
@endcomponent
