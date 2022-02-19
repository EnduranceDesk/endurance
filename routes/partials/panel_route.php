<?php

Route::get('/home', 'Panel\PanelController@index')->name('home');
Route::get('/panel', 'Panel\PanelController@index')->name('panel.index');
Route::get('/changepassword', 'Panel\PanelController@getChangePassword')->name('panel.password.change');
Route::post('/changepassword', 'Panel\PanelController@postChangePassword')->name('panel.password.change.post');

