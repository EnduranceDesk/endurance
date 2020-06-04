<?php

Route::get('/server/config/ip', 'Server\ServerController@getIP')->name('server.config.ip'); 
Route::post('/server/config/ip', 'Server\ServerController@setIP')->name('server.config.ip.post'); 


