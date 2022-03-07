<div class="col-md-4 col-sm-4 ">
    <div class="x_panel tile ">
        <div class="x_title">
            <h2>{{$rover->name}}</h2>
            <ul class="nav navbar-right panel_toolbox">
                <li>
                    <a class="collapse-link"><i class="fa fa-chevron-up"></i></a>
                </li>
            </ul>
            <div class="clearfix"></div>
        </div>
        <div class="x_content">
            @foreach($rover->domains as $domain)
                <div class="row">
                    <div class="col-md-12">
                        <b> Domain:</b>
                        <a href="http://{{$domain->name}}"  target="_blank">{{$domain->name}}</a>
                    </div>
                </div>
                <br>
                <dl class="row">
                    <div class="col-md-3 col-sm-3 col-lg-3">
                        <dt>Type</dt>
                        <dd>{{ $domain->type}}</dd>
                        <dt>Public Directory</dt>
                        <dd>{{ $domain->dir}}</dd>
                    </div>
                    <div class="col-md-9 col-sm-9 col-lg-9">
                        <dt>Sub Domains</dt>
                        <dd>
                            @if($domain->mail)
                                <span class="badge bg-green bg-lg">MAIL</span>
                            @endif
                            @if($domain->ns1)
                                <span class="badge bg-green bg-lg">NS1</span>
                            @endif
                            @if($domain->ns2)
                                <span class="badge bg-green bg-lg">NS2</span>
                            @endif
                            @if($domain->ftp)
                                <span class="badge bg-green bg-lg">FTP</span>
                            @endif
                            @if($domain->www)
                                <span class="badge bg-green bg-lg">WWW</span>
                            @endif
                            @if($domain->mx)
                                <span class="badge bg-green bg-lg">MX</span>
                            @endif
                        </dd>
                    </div>
                </dl>
                <div class="row">
                    <div class="col-12">
                        <p><b>Current PHP: </b> {{json_decode($domain->metadata)->current_php}}</p>
                    </div>
                </div>
                <hr>
                <div class="row">
                    <div class="col-12">
                        <form action="{{ route("rover.php.change") }}" method="post">
                            @csrf
                            <input type="hidden" name="domain" value="{{$domain->name}}">
                            <label>Select PHP version:</label>
                            <select name="php_version" id="php_version" required class="form-control">
                                <option value="">Select</option>
                                @foreach ($phpVersions as $php)
                                    <option @if(json_decode($domain->metadata)->current_php == $php) disabled @endif value="{{$php}}">{{$php}}</option>
                                @endforeach
                            </select>
                            <br>
                            <button type="submit" class="btn btn-sm btn-danger m-2">Change</button>
                        </form>
                    </div>
                </div>
                <hr>
                <a href="{{ route("panel.password.change", ['username' => $rover->username]) }}" class="btn btn-danger btn-sm">Change Password</a>
                <a href="{{ route("rover.ssl.auto", ['domain' => $domain]) }}" class="btn btn-sm btn-danger">AutoSSL</a>
                <hr>
                <div class="row">
                    <div class="col-md-12 col-lg-12 col-sm-12" style="text-align: right;">
                        <a href="{{ route("rover.destroy", ['username' => $rover->name]) }}" class="btn btn-sm btn-danger"><i class="fa fa-remove"></i> Destroy</a>

                    </div>
                </div>
            @endforeach
        </div>
    </div>
</div>
