#!/bin/bash

git pull --ff-only

NAME=ENDURANCE
DIR=/home/endurance/public_html
BACKUPDIR=/home/endurance/public_html_backup
TEMPDIR=/home/endurance/public_html_temp



rm -rf $BACKUPDIR

if [ -d $DIR ] 
then
    echo "Making backup of previous $NAME." 
    mv -f $DIR/{.,}* $BACKUPDIR/
else
    echo "No previous $NAME is found. Skipping backup."
fi

echo "Removing previous TEMPDIR $TEMPDIR." 
rm -rf $TEMPDIR

echo "Making new current DIR $DIR." 
mkdir -p $DIR

echo "Pushing maintain page to  $DIR." 
cp  MAINTAIN_PAGE_DO_NOT_DELETE.html "$DIR/index.html"

echo "Building Temp Directory at $TEMPDIR." 
mkdir -p $TEMPDIR

echo "Moving All files from here to $TEMPDIR." 
cp -rf $(pwd)/* $TEMPDIR
cp -rf $(pwd)/.env.production $TEMPDIR
cp -rf $(pwd)/.htaccess $TEMPDIR



echo "Changed current directory $TEMPDIR." 
cd $TEMPDIR

echo "Renaming enviroment file"
mv -f .env.production .env

echo "Running Composer update"
composer install --no-dev

echo "Clearing laravel config cache"
php artisan config:cache
php artisan cache:clear

echo "Migrating laravel "
php artisan migrate --force
php artisan db:seed --force


echo "Removing deploy.sh from current: $TEMPDIR"
rm -rf deploy.sh
rm -rf update.sh
echo "Removing maintain.sh from current: $TEMPDIR"
rm -rf MAINTAIN_PAGE_DO_NOT_DELETE.html

echo "Removing: $DIR"
rm -rf $DIR

echo "Renaming: $TEMPDIR --> $DIR"
mv -f $TEMPDIR $DIR
# IMPORTANT
chmod 750 $DIR



echo "Clearing laravel config, event, view cache"
php artisan config:cache
php artisan cache:clear
php artisan event:cache
php artisan view:cache

echo "Creating Passport Keys Directory"
mkdir -p /home/endurance/secure
php artisan passport:keys


echo "Rebuilding laravel storage link"
php artisan storage:link

npm install production
npm run production

read -p "Do you want to run php artisan passport:client --personal? " -n 1 -r
echo    # (optional) move to a new line
if [[ $REPLY =~ ^[Yy]$ ]]
then
    cd /home/endurance/public_html
    php artisan passport:client --personal
fi

echo "888888888888888888888888888888888888888888888888888888888888888888888"
echo "88888888888 ENDURANCE DEPLOYED SUCCESSFULLY (WE THINK)  8888888888888"
echo "888888888888888888888888888888888888888888888888888888888888888888888"