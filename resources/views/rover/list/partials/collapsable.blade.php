@php
$random = random_int(1111111, 9999999);
@endphp
<div class="accordion" id="accordion{{ $random }}" role="tablist" aria-multiselectable="true">
    <div class="panel">
        <a class="panel-heading collapsed" role="tab" id="headingOne" data-toggle="collapse"
            data-parent="#accordion{{ $random }}" href="#collapseOne{{ $random }}" aria-expanded="false"
            aria-controls="collapseOne{{ $random }}">
            <h4 class="panel-title"><b>{{ $base }}</b> <br>
                <div style="text-align: right;">

                </div>
            </h4>
        </a>
        <div id="collapseOne{{ $random }}" class="panel-collapse collapse" role="tabpanel"
            aria-labelledby="headingOne" aria-expanded="false" style="height: 0px;">
            <div class="panel-body">
                <hr>

                <table class="table table-bordered">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Rover</th>
                            <th>Domain</th>
                            <th>Type</th>
                            <th>SSL</th>
                            <th>Web PHP</th>
                            <th>Deployed</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        @foreach ($domains as $key => $domain)
                            <tr>
                                <td>{{ $key + 1 }}</td>
                                <td><a href="http://rover.{{ $domain->name }}" target="_blank">{{ $domain->rover->username }} <i class="fa fa-external-link"></i></a></td>
                                <th scope="row"><a href="http://{{ $domain->name }}" target="_blank">{{ $domain->name }} <i class="fa fa-external-link"></i></a></th>
                                <td>{{$domain->type}}</td>
                                <td style="text-align: center;">
                                    @if($domain->ssl)
                                        <i   title="SSL installed" class="fa fa-lock  " style="color: #1abb9c;"></i>
                                    @else
                                        <i  title="SSL not installed"  style="color: red;" class="fa fa-lock"></i>
                                    @endif
                                    @if($domain->actual_ssl)
                                        <i title="SSL valid" class="fa fa-lock  " style="color: #1abb9c;"></i>
                                    @else
                                        <i title="SSL not valid" style="color: red;" class="fa fa-lock"></i>
                                    @endif
                                </td>
                                <td style="text-align: center;">{{json_decode($domain->metadata)->current_php}}</td>
                                <td>{{  \Carbon\Carbon::createFromTimeStamp(strtotime($domain->rover->created_at))->calendar()}}</td>
                                <td style="text-align: center;">
                                    <div class="dropdown">
                                        <button class="btn btn-success btn-sm dropdown-toggle" type="button" data-toggle="dropdown">Controls
                                        <span class="caret"></span></button>
                                        <ul class="dropdown-menu">
                                            <li><a href="{{ route("cron.builder", ['rover' => $domain->rover->username]) }}">Cron</a></li>
                                            <li><a href="{{ route("rover.ssl.auto", ['domain' => $domain->name]) }}" target="_blank">AutoSSL</a></li>
                                            <li><a href="{{ route("panel.password.change", ['username' => $domain->rover->username]) }}" target="_blank">Change Password</a></li>
                                            <li><a href="{{ route("rover.destroy", ['username' => $domain->rover->name]) }}">Destroy</a></li>
                                        </ul>
                                    </div>
                                </td>
                            </tr>
                        @endforeach

                    </tbody>
                </table>

            </div>
        </div>
    </div>
</div>
