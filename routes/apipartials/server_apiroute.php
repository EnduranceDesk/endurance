<?php

Route::middleware(['auth:api'])->group(function () {
    Route::post('/server/ip/set', 'API\Server\ServerController@setIP')->name('server.setip'); 
});
