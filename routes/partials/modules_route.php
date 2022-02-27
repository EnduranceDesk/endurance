<?php

Route::get('/modules/create/step1', 'Module\ModuleController@getCreate')->name('modules.create');
Route::post('/modules/create/step2', 'Module\ModuleController@uploadStubs')->name('modules.create.step2');

