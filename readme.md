# Web Based Voting System

## Features

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

- PHP 5 (Note: This is not working on PHP v8 or higher)
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
- NPM - To Compile Vue Components (optional)
- NodeJs - v14 to Compile Vue Components (optional)

## Setting UP

```shell
# First Clone the repository
git clone https://github.com/lenard123/Voting-System

# Navigate to the project directory
cd Voting-System

# Install PHP Dependencies using composer
composer install

# Copy .env.example to .env

# (Windows)
copy .env.example .env
# (On Linux)
cp .env.example .env

# Before you proceed to the next
# configure your database first
# in the .env file

# Generate Application key
php artisan key:generate

# Link storage
php artisan storage:link

# Run database migration
#   this command will automatically import
#   the database tables and default data
php artisan migrate:fresh --seed

# Install Passport keys
php artisan passport:install

# Finally, you can now serve the application
php artisan serve
# You can now view the system on http://localhost:8000
```

### Note

The Default user for admin is:
- email: lenard.mangayayam@voting-system.com
- password: admin

You can change it in .env file

### System Demo
You can watch the System Demo [here](https://youtu.be/dsEoONiovdA).
