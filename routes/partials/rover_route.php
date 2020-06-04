<?php

Route::get('/rover/builder', 'Rover\RoverController@getBuilder')->name('rover.builder'); 
Route::post('/rover/builder', 'Rover\RoverController@postBuilder')->name('rover.build'); 

