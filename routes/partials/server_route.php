<?php

Route::get('/config/server/config/ip', 'Server\ServerController@getIP')->name('server.config.ip'); 
Route::post('/config/server/config/ip', 'Server\ServerController@setIP')->name('server.config.ip.post'); 


