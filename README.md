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

  - Home Page
    - All visitors are able to see top 10 IMDb rated movies that stored in the database.
    - All visitors are able to see editors' recommended movies. 
    - Each movie is linked to a specific movie detail page where a user is suggested to login to gain more authorities. 
  - Movies Page 
    - List all movies in the database.
    - Each movie is linked to a specific movie detail page where a user is suggested to login to gain more authorities. 
  - Registration / Login Page
    - Recommendations appear if a user wants more actions on a specific movie detail page.
    - Demo user account is available 
  - My Watchlist Page (Users' CRUD operations)
    - Users are able to add movies to their own personal watch list.
    - Users are able to edit the status of a movie on their own watchlist to any of the following: 
      - Plan to watch 
      - Watching 
      - Have watched
    - Users are able to delete a movie from their own watchlist. 
    - Buttons have AJAX functionality.
  - A Specific Movie Page (Users' CRUD operations) 
    - Display detail information about a movie.  
    - Users are able to write their own reviews for any movie.
    - Users are able to read all other users' reviews to a specific movie. They can also edit or delete their own reviews. 
    - Users are able to add a movie to their own watchlist by choosing a watch status. 
    - Buttons have AJAX functionality.
