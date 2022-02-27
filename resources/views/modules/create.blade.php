@extends('layouts.page')
@section('title')
Build module
@endsection
@section("page_title")
Build module
@endsection
@section("page_content")
    @include("modules.partials.templates")

    <div class="row">
        <div class="col-md-6 col-lg-6">
            <label>Name</label>
            <input type="text" class="form-control" placeholder="Cool package" required>
            <br>
            <label>Version</label>
            <input type="number" class="form-control" placeholder="2" min="1" value="1" required>
            <br>
            <label>Description</label>
            <input type="text" class="form-control" name="description">
            <br>
            <label>Icon</label>
            <input type="text" class="form-control" name="icon" placeholder="filename from the stubs">
            <br>
            <label>Compatiable OS</label>
            <select name="compatible_os" class="form-control" multiple required>
                <option value="CentOS Linux 8">CentOS Linux 8</option>
            </select>
            <br>
        </div>
        <div class="col-md-6 col-lg-6">
            @include("modules.partials.dependencies")
            @include("modules.partials.singletons")
            @include("modules.partials.logs")
            @include("modules.partials.ports")
        </div>
    </div>
    <hr>
    @include("modules.partials.configurations")
    @include("modules.partials.cron")
    @include("modules.partials.scripts")




@endsection
@push("scripts")
<script>
    $(document).ready(function () {
        $("body").on("click", ".remove_me", function () {
            $(this).parent().parent().remove();
        })
        $("body").on("click", ".add",function () {
            container_id = "input-container"
            source_id = $(this).attr("data-source")
            source =  $("#"+source_id).html();
            destination_id = $(this).attr("data-destination")
            destination_childs = $("#"+destination_id).children().length;
            source = source.replace("__COUNTER__", destination_childs)
            cargo = $("#"+container_id).html()
            cargo = cargo.replace("__REPLACEBLE__",source)
            $("#" + destination_id).append(cargo);
        })
    })
</script>
@endpush
