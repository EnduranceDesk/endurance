<?php

Route::middleware(['auth:api'])->group(function () {
    Route::post('/rover/build', 'API\Rover\RoverController@build')->name('rover.build'); 
});
