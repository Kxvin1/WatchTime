# WatchTime

WatchTime is a web application where users can view detailed information about movies as well as read or add reviews about any movie. It is inspired by Goodreads where users can sign up and register books to generate library catalogs and reading lists. 

Welcome to check out a live version of WatchTime here: [WatchTime](https://watch-time-06.herokuapp.com/)

![home](https://user-images.githubusercontent.com/94598069/163662886-cdfa3cd7-7e89-41cc-8ea3-2787ac89d452.png)

## Technologies Used
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![Pug](https://img.shields.io/badge/Pug-FFF?style=for-the-badge&logo=pug&logoColor=A86454)
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![Sequelize](https://img.shields.io/badge/Sequelize-52B0E7?style=for-the-badge&logo=Sequelize&logoColor=white)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
![Postgres](https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white)

The frontend of WatchTime is handled with pug, CSS, and Javascript. The backend is built on express.js with a PostgresSQL database. Sequelize is used to manage the database.  

## Features 

  - Home page
    - All visitors are able to see top 10 IMDb rated movies that stored in the database.
    - All visitors are able to see editors' recommended movies. 
    - Each movie is linked to a specific movie detail page where a user is suggested to login to gain more authorities. 
  - Movies page 
    - List all movies in the database.
    - Each movie is linked to a specific movie detail page where a user is suggested to login to gain more authorities. 
  - Registration / Login page
    - Recommendations appear if a user want more actions on a specific movie detail page.
    - Demo user account is available 
  - My Watchlist page 
  - Users will be able to add movies to their own personal watch list and they will be able to set the status of that movie to any of the following: 
    - Watched
    - Want to Watch
    - Currently Watching
  - Users will be able to view information about movies as well as reviews left by other users.
  - Users will also be able to write their own reviews for any movie.
