# Web Based Voting System

## Features

- SPA

### Admin Panel

- Login (API - Authentication / Passport)
- Start Election 
- View Election Result
- Stop Election
- View Election Final Result
- Position (CRUD)
- Partylist (CRUD)
- Voter (CRUD)
- Nominee (CRUD) (Also Contains Picture, Motto and Description)
- Update Account
- Manage Account - (Sub Admin Can't access this)
- Logout

### Voter Panel

- Login Using Their Unique Student ID
- Can See Candidate/Nominee Details
- Vote (Can only access when election started)
- Result (Can only access when she/he already vote)
- Logout


## Language Used

- PHP 5
- Laravel 5.4 (Php Framework)
- HTML
- CSS
- Javascript
- VueJS (Javascript Framework)
- MySQL

## Requirements

- PHP 5 or higher
- MySQL
- Composer (To install Laravel and Other Dependencies)
- NPM (To Compile Vue Components)

## Installation

- open Console and run "composer install" (without quote)
- create a database
- run "php artisan storage:link"
- run "php artisan migrate --seed" without quote to import table 
- run "php artisan passport:install" to create encryption key needed to passport
- finally run "php artisan serve" to start application.

### Note

The Default user for admin is:

email: lenard.mangayayam@voting-system.com
password: admin (feel free to change it if you want)