<?php

Route::get('/rover/list', 'Rover\RoverController@getList')->name('rover.list');
Route::get('/rover/{username}/destroy', 'Rover\RoverController@getDestroy')->name('rover.destroy');
Route::get('/rover/{domain}/ssl/auto', 'Rover\RoverController@getDestroy')->name('rover.ssl.auto');
Route::get('/rover/builder', 'Rover\RoverController@getBuilder')->name('rover.builder');
Route::post('/rover/builder', 'Rover\RoverController@postBuilder')->name('rover.build');
Route::post('/rover/php/version/change', 'Rover\RoverController@postChangePHPVersion')->name('rover.php.change');

