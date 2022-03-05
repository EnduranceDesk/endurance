<div id="temp_store" style="display: none;">
    <div id="dependency-temp">
        <div class="row">
            <div class="col-md-6">
                <input required type="text" name="dependency[__COUNTER__][identifier]" placeholder="Module Slug" class="form-control">
            </div>
            <div class="col-md-3">
                <input required type="number" name="dependency[__COUNTER__][version_from]" placeholder="From" class="form-control">
            </div>
            <div class="col-md-3">
                <input required type="number" name="dependency[__COUNTER__][version_to]" placeholder="To" class="form-control">
            </div>
        </div>
    </div>
    <div id="singleton-temp">
        <div class="row">
            <div class="col-md-4">
                <input required type="text" name="singletons[__COUNTER__][name]" placeholder="Name" class="form-control">
            </div>
            <div class="col-md-8">
                <input required type="text" name="singletons[__COUNTER__][command]" placeholder="Command" class="form-control">
            </div>
        </div>
    </div>
    <div id="logs-temp">
        <div class="row">
            <div class="col-md-4">
                <input required type="text" name="logs[__COUNTER__][name]" placeholder="Name" class="form-control">
            </div>
            <div class="col-md-8">
                <input  required type="text" name="logs[__COUNTER__][command]" placeholder="File path" class="form-control">
            </div>
        </div>
    </div>
    <div id="cron-temp">
        <div class="row">
            <div class="col-md-4">
                <input required type="text" name="logs[__COUNTER__][user]" placeholder="Name" class="form-control">
            </div>
            <div class="col-md-8">
                <input required type="text" name="logs[__COUNTER__][command]" placeholder="File path" class="form-control">
            </div>
        </div>
    </div>
    <div id="scripts-temp">
        <div class="row">
            <div class="col-md-4">
                <select required name="scripts[__COUNTER__][type]" class="form-control" >
                    <option value="">Select type</option>
                    <option>prepare-install</option>
                    <option>install</option>
                    <option>post-install</option>
                    <option>prepare-uninstall</option>
                    <option>uninstall</option>
                    <option>custom</option>
                </select>
            </div>
            <div class="col-md-8">
                <select name="scripts[__COUNTER__][filename]" id="icon" class="form-control" required>
                    <option value="">Select</option>
                    @foreach ($filenames as $filename )
                        <option>{{$filename}}</option>
                    @endforeach
                </select>
            </div>

        </div>
        <br>
        <div class="row">
            <div class="col-md-6">
                <select required name="scripts[__COUNTER__][shell]" class="form-control" >
                    <option value="">Shell</option>
                    <option value="bash">bash</option>
                </select>
            </div>
            <div class="col-md-6">
                <select required name="scripts[__COUNTER__][button]" class="form-control" >
                    <option value="">Button</option>
                    <option value="1">Show</option>
                    <option value="0">Hide</option>
                </select>
            </div>
            <hr>
        </div>
    </div>
    <div id="ports-temp">
        <div class="row">
            <div class="col-md-4">
                <input required type="number" name="logs[__COUNTER__][port]" placeholder="Port" class="form-control">
            </div>
            <div class="col-md-4">
                <select required name="logs[__COUNTER__][type]" class="form-control" >
                    <option value="">Select</option>
                    <option value="tcp">TCP</option>
                    <option value="udp">UDP</option>
                </select>
            </div>
            <div class="col-md-4">
                <select required name="logs[__COUNTER__][action]" class="form-control" >
                    <option value="">Select</option>
                    <option value="open">Open</option>
                    <option value="close">Close</option>
                </select>
            </div>
        </div>
    </div>
    <div id="configurations-temp">
        <div class="row">
            <div class="col-md-3">
                <input required type="text" name="configurations[__COUNTER__][name]" placeholder="Name" class="form-control">
            </div>
            <div class="col-md-9">
                <input required type="number" name="configurations[__COUNTER__][filepath]" placeholder="Command" class="form-control">
            </div>
        </div>
        <br>
        <div class="row">
            <div class="col-md-4">
                <input required type="number" name="configurations[__COUNTER__][editable]" placeholder="Editable" max="1" min="0" class="form-control">
            </div>
            <div class="col-md-4">
                <input required type="number" name="configurations[__COUNTER__][requires_reload]" placeholder="Reload" max="1" min="0" class="form-control">
            </div>
            <div class="col-md-4">
                <input required type="number" name="configurations[__COUNTER__][requires_restart]" placeholder="Restart" max="1" min="0" class="form-control">
            </div>
        </div>
        <hr>
    </div>
    <div id="input-container" class="group">
        <div class="row">
            <div class="col-md-11 col-lg-11" id="group-sub">
                __REPLACEBLE__
            </div>
            <div class="col-md-1 col-lg-1">
                <button class="remove_me"><i class="fa fa-remove"></i></button>
            </div>
        </div>
    </div>
</div>
