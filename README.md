# BlogSpot 
This is a social app written with the now deprecated AngularJS.
Apart from AngularJS it utilizes technologies such as Node (for the server) with the Express syntax and for a database system it uses MongoDB.
To automate tasks that include minifying, uglyfying, and updating the code I use the script tool Gulp.
I also use authorization in this app with JSON web token, and BCrypt to hash passwords
In order to make this app usable after the code for AngularJS is dropped by Google I incorporated it locally into the project so that it doesn't need the links to fetch the AngularJS logic.

## Features:
* creating profiles
* posting, editing and deleting posts
* saving posts to database
* authorizing the user
* hashing the user password with encryption technologies
* protection against unauthorized users trying to access confidential URLs
* the app displays flash messages to inform or prompt the user

## Things to fix:
* adding scalability for smaller screens and devices
* adding the ability to upload photos by users
* fixing registering new users (currently broken)
* adding likes, dislikes and views
* adding comments and discussion

---

### If you want to play around with this app just download the source code and start the server with `gulp start` 
The only currently working login details are for the profile: Monica Harrison. 
Her password is: **monicaharrison** 
and her email is: **monica.harrison@gmail.com**
