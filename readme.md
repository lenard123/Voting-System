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

- open Console and run "composer install" and "npm install" (without quote)
- create a database
- copy .env.example to .env
- setup your database
- run "php artisan key:generate" to generate application key
- run "php artisan passport:install" to create encryption key needed to passport
- run "php artisan storage:link"
- run "php artisan migrate --seed" without quote to import table the default user for admin is 
	email: lenard.mangayayam@gmail.com
	password: admin (feel free to change it if you want)

- run "npm run dev" to compile Vue Components
- finally run "php artisan serve" to start application.
