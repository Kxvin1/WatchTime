# WatchTime

WatchTime is a web application where users can view detailed information about movies as well as read or add reviews about any movie. It is inspired by Goodreads where users can sign up and register books to generate library catalogs and reading lists.

Welcome to check out a live version of WatchTime here: [WatchTime.com](https://watch-time-06.herokuapp.com/)

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

## Getting Started

  1. Clone this repository
  
    `git clone https://github.com/Kxvin1/WatchTime.git`
    
  2. Install dependencies
  
    `npm install`
    
  3. Create a .env file based on the .env.example given
  
  4. Setup your username and database based on what you setup in your .env
  
  5. Migrate and Seed models
  
    `npx dotenv sequelize db:migrate` && `npx dotenv sequelize db:seed:all`
    
  6. Start the app using:
  
    `npm start`
    
  7. You can use the Demo user or create an account.

## Features

  - Home Page
    - All visitors are able to see the top 10 IMDb rated movies that are stored in the database.
    - All visitors are able to see the editors' recommended movies.
    - Each movie is linked to a specific movie detail page where a user is suggested to login to gain more authorities.
  - Movies Page
    - Lists all the movies in the database.
    - Each movie is linked to a specific movie detail page where a user is suggested to login to gain more authorities.
  - Registration / Login Page
    - Recommendations appear if a user wants more actions on a specific movie detail page.
    - Demo user account is available for those who do not want to register for an account.
  - My Watchlist Page (User's CRUD operations)
    - Users are able to add movies to their own personal watchlist.
    - Users are able to edit the status of a movie on their own watchlist to any of the following:
      - Plan to Watch
      - Watching
      - Have Watched
    - Users are able to delete a movie from their own watchlist.
    - Buttons have AJAX functionality.
  - A Specific Movie Page (User's CRUD operations)
    - Display detail information about a movie.
    - Users are able to write their own reviews for any movie.
    - Users are able to read all other users' reviews to a specific movie. They can also edit or delete their own reviews.
    - Users are able to add a movie to their own watchlist by choosing a watch status.
    - Buttons have AJAX functionality.

 ## Snapshots
 ### Movies
 ![movies](https://user-images.githubusercontent.com/94598069/163665501-52dd8be0-ad2a-4193-b092-f0c702266ab7.png)
 ### Register
 ![Register](https://user-images.githubusercontent.com/94598069/163665231-303a81c0-71f8-4f98-b197-09ee7b566942.png)
 ### Login
 ![login](https://user-images.githubusercontent.com/94598069/163665265-f39ba205-5823-4226-89ec-3aa0b11ed808.png)
 ### My Watchlist
 ![watchList](https://user-images.githubusercontent.com/94598069/163665428-8c49f69b-742b-4cbd-96b5-e9ce010dcc8a.png)
 ### A Specific Movie
 ![specificMovie](https://user-images.githubusercontent.com/94598069/163665432-1b32b269-b9f1-48a2-9ceb-90a19f7dbfa6.png)

## Future Features
  - Dark Mode
  - Links on movie pages to the trailer
  - Search feature
