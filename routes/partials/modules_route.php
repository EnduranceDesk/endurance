<?php

Route::get('/modules/create/step1', 'Module\ModuleController@getCreate')->name('modules.create');
Route::post('/modules/create/step2', 'Module\ModuleController@uploadStubs')->name('modules.create.step2');
Route::get('/modules/create/step3', 'Module\ModuleController@getCreateStep2')->name('modules.create.step3');
Route::post('/modules/create/finalize', 'Module\ModuleController@postCreate')->name('modules.create.post');

