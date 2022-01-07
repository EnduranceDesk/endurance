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
                    <div class="col-md-12 col-lg-12 col-sm-12" style="text-align: right;">
                        <a href="{{ route("rover.destroy", ['username' => $rover->name]) }}" class="btn btn-sm btn-danger"><i class="fa fa-remove"></i> Destroy</a>
                        
                    </div>
                </div>
            @endforeach
        </div>
    </div>
</div>