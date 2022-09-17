<?php

Route::get('/cron/{rover}/builder', 'Cron\CronController@getBuilder')->name('cron.builder');
Route::post('/cron/{rover}/add', 'Cron\CronController@postAddCronJob')->name('cron.add.post');
Route::get('/cron/{rover}/delete', 'Cron\CronController@getDeleteCronJob')->name('cron.delete');

