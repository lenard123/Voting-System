# Web Base Voting System

## Language Used
- HTML
- CSS
- JAVASCRIPT
- PHP
- MYSQL

## Framework Used
- Laravel 5.4 (php)
- Vue (javascript)

## Features
- Start - Stop - Reset Election
- Create Read Update Delete Position
- Create Read Update Delete Partylist
- Create Read Update Delete Candidates
- Create Read Update Delete Voters
- Create Read Update Delete Admin
- **Realtime Viewing of Result**
- **Printing Result**

## Configuration
1. run "composer install" in your command line to install dependencies (Without quote)
2. rename .env.example to .env
3. open .env and configure your database
4. import svs.sql into your database
5. open App/Providers/AppServiceProvider.php and change the value of $base_url into your baseurl (example: http://localhost/)
6. run "php artisan key:generate" in your command line to generate application key
