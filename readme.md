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

## Setting UP

1. Run 'git clone https://github.com/lenard123/Voting-System'
2. Run 'cd Voting-System'
3. Run 'cp .env.example .env' or rename .env.example to .env
4. Open .env file and Setup your database connection
5. Run 'php artisan migrate --seed'
6. Run 'php artisan storage:link'
7. Run 'php artisan key:generate'
8. Run 'php artisan passport:install'
9. Finally run 'php artisan serve'

### Note

The Default user for admin is:

email: lenard.mangayayam@voting-system.com
password: admin

You can change it in .env file

### System Demo
You can watch the System Demo [here](https://youtu.be/dsEoONiovdA).
