"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.bulkInsert(
      "Movies",
      [
        {
          title: "The Shawshank Redemption",
          genreId: 3,
          image:
            "https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UX128_CR0,3,128,176_AL_.jpg",
          imDbRating: 9.2,
          synopsis:
            "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
          runtime: 142,
          year: "1994",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "The Godfather",
          genreId: 3,
          image:
            "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UX128_CR0,1,128,176_AL_.jpg",
          imDbRating: 9.2,
          synopsis:
            "The aging patriarch of an organized crime dynasty in postwar New York City transfers control of his clandestine empire to his reluctant youngest son.",
          runtime: 175,
          year: "1972",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "The Dark Knight",
          genreId: 1,
          image:
            "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_UX128_CR0,3,128,176_AL_.jpg",
          imDbRating: 9.0,
          synopsis:
            "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
          runtime: 152,
          year: "2008",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "The Godfather: Part II",
          genreId: 3,
          image:
            "https://m.media-amazon.com/images/M/MV5BMWMwMGQzZTItY2JlNC00OWZiLWIyMDctNDk2ZDQ2YjRjMWQ0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UX128_CR0,1,128,176_AL_.jpg",
          imDbRating: 9.0,
          synopsis:
            "The early life and career of Vito Corleone in 1920s New York City is portrayed, while his son, Michael, expands and tightens his grip on the family crime syndicate.",
          runtime: 202,
          year: "1974",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "12 Angry Men",
          genreId: 3,
          image:
            "https://m.media-amazon.com/images/M/MV5BMWU4N2FjNzYtNTVkNC00NzQ0LTg0MjAtYTJlMjFhNGUxZDFmXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_UX128_CR0,3,128,176_AL_.jpg",
          imDbRating: 9.0,
          synopsis:
            "The jury in a New York City murder trial is frustrated by a single member whose skeptical caution forces them to more carefully consider the evidence before jumping to a hasty verdict.",
          runtime: 96,
          year: "1957",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Schindler's List",
          genreId: 3,
          image:
            "https://m.media-amazon.com/images/M/MV5BNDE4OTMxMTctNmRhYy00NWE2LTg3YzItYTk3M2UwOTU5Njg4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UX128_CR0,3,128,176_AL_.jpg",
          imDbRating: 8.9,
          synopsis:
            "In German-occupied Poland during World War II, industrialist Oskar Schindler gradually becomes concerned for his Jewish workforce after witnessing their persecution by the Nazis.",
          runtime: 195,
          year: "1993",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "The Lord of the Rings: The Return of the King",
          genreId: 4,
          image:
            "https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UX128_CR0,3,128,176_AL_.jpg",
          imDbRating: 8.9,
          synopsis:
            "Gandalf and Aragorn lead the World of Men against Sauron's army to draw his gaze from Frodo and Sam as they approach Mount Doom with the One Ring.",
          runtime: 201,
          year: "2003",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Pulp Fiction",
          genreId: 2,
          image:
            "https://m.media-amazon.com/images/M/MV5BNGNhMDIzZTUtNTBlZi00MTRlLWFjM2ItYzViMjE3YzI5MjljXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UX128_CR0,3,128,176_AL_.jpg",
          imDbRating: 8.9,
          synopsis:
            "The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
          runtime: 154,
          year: "1994",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "The Lord of the Rings: The Fellowship of the Ring",
          genreId: 4,
          image:
            "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_UX128_CR0,3,128,176_AL_.jpg",
          imDbRating: 8.8,
          synopsis:
            "A meek Hobbit from the Shire and eight companions set out on a journey to destroy the powerful One Ring and save Middle-earth from the Dark Lord Sauron.",
          runtime: 178,
          year: "2001",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "The Good, the Bad and the Ugly",
          genreId: 9,
          image:
            "https://m.media-amazon.com/images/M/MV5BNjJlYmNkZGItM2NhYy00MjlmLTk5NmQtNjg1NmM2ODU4OTMwXkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_UX128_CR0,3,128,176_AL_.jpg",
          imDbRating: 8.8,
          synopsis:
            "A bounty hunting scam joins two men in an uneasy alliance against a third in a race to find a fortune in gold buried in a remote cemetery.",
          runtime: 178,
          year: "1966",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Forrest Gump",
          genreId: 7,
          image:
            "https://m.media-amazon.com/images/M/MV5BNWIwODRlZTUtY2U3ZS00Yzg1LWJhNzYtMmZiYmEyNmU1NjMzXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UX128_CR0,3,128,176_AL_.jpg",
          imDbRating: 8.8,
          synopsis:
            "The presidencies of Kennedy and Johnson, the Vietnam War, the Watergate scandal and other historical events unfold from the perspective of an Alabama man with an IQ of 75, whose only desire is to be reunited with his childhood sweetheart.",
          runtime: 142,
          year: "1994",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Fight Club",
          genreId: 1,
          image:
            "https://m.media-amazon.com/images/M/MV5BNDIzNDU0YzEtYzE5Ni00ZjlkLTk5ZjgtNjM3NWE4YzA3Nzk3XkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_UX128_CR0,3,128,176_AL_.jpg",
          imDbRating: 8.8,
          synopsis:
            "An insomniac office worker and a devil-may-care soap maker form an underground fight club that evolves into much more.",
          runtime: 139,
          year: "1999",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Inception",
          genreId: 8,
          image:
            "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_UX128_CR0,3,128,176_AL_.jpg",
          imDbRating: 8.7,
          synopsis:
            "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O., but his tragic past may doom the project and his team to disaster.",
          runtime: 148,
          year: "2010",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "The Lord of the Rings: The Two Towers",
          genreId: 4,
          image:
            "https://m.media-amazon.com/images/M/MV5BZGMxZTdjZmYtMmE2Ni00ZTdkLWI5NTgtNjlmMjBiNzU2MmI5XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UX128_CR0,3,128,176_AL_.jpg",
          imDbRating: 8.7,
          synopsis:
            "While Frodo and Sam edge closer to Mordor with the help of the shifty Gollum, the divided fellowship makes a stand against Sauron's new ally, Saruman, and his hordes of Isengard.",
          runtime: 179,
          year: "2002",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Star Wars: Episode V - The Empire Strikes Back",
          genreId: 4,
          image:
            "https://m.media-amazon.com/images/M/MV5BYmU1NDRjNDgtMzhiMi00NjZmLTg5NGItZDNiZjU5NTU4OTE0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UX128_CR0,3,128,176_AL_.jpg",
          imDbRating: 8.7,
          synopsis:
            "After the Rebels are brutally overpowered by the Empire on the ice planet Hoth, Luke Skywalker begins Jedi training with Yoda, while his friends are pursued across the galaxy by Darth Vader and bounty hunter Boba Fett.",
          runtime: 124,
          year: "1980",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "The Matrix",
          genreId: 1,
          image:
            "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UX128_CR0,3,128,176_AL_.jpg",
          imDbRating: 8.7,
          synopsis:
            "When a beautiful stranger leads computer hacker Neo to a forbidding underworld, he discovers the shocking truth--the life he knows is the elaborate deception of an evil cyber-intelligence.",
          runtime: 136,
          year: "1999",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Goodfellas",
          genreId: 8,
          image:
            "https://m.media-amazon.com/images/M/MV5BY2NkZjEzMDgtN2RjYy00YzM1LWI4ZmQtMjIwYjFjNmI3ZGEwXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UX128_CR0,3,128,176_AL_.jpg",
          imDbRating: 8.7,
          synopsis:
            "The story of Henry Hill and his life in the mob, covering his relationship with his wife Karen Hill and his mob partners Jimmy Conway and Tommy DeVito in the Italian-American crime syndicate.",
          runtime: 145,
          year: "1990",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "One Flew Over the Cuckoo's Nest",
          genreId: 3,
          image:
            "https://m.media-amazon.com/images/M/MV5BZjA0OWVhOTAtYWQxNi00YzNhLWI4ZjYtNjFjZTEyYjJlNDVlL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UX128_CR0,3,128,176_AL_.jpg",
          imDbRating: 8.6,
          synopsis:
            "A criminal pleads insanity and is admitted to a mental institution, where he rebels against the oppressive nurse and rallies up the scared patients.",
          runtime: 133,
          year: "1975",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Se7en",
          genreId: 8,
          image:
            "https://m.media-amazon.com/images/M/MV5BOTUwODM5MTctZjczMi00OTk4LTg3NWUtNmVhMTAzNTNjYjcyXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UX128_CR0,3,128,176_AL_.jpg",
          imDbRating: 8.6,
          synopsis:
            "Two detectives, a rookie and a veteran, hunt a serial killer who uses the seven deadly sins as his motives.",
          runtime: 127,
          year: "1995",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Seven Samurai",
          genreId: 1,
          image:
            "https://m.media-amazon.com/images/M/MV5BOWE4ZDdhNmMtNzE5ZC00NzExLTlhNGMtY2ZhYjYzODEzODA1XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_UX128_CR0,1,128,176_AL_.jpg",
          imDbRating: 8.6,
          synopsis:
            "A poor village under attack by bandits recruits seven unemployed samurai to help them defend themselves.",
          runtime: 207,
          year: "1954",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "It's a Wonderful Life",
          genreId: 3,
          image:
            "https://m.media-amazon.com/images/M/MV5BZjc4NDZhZWMtNGEzYS00ZWU2LThlM2ItNTA0YzQ0OTExMTE2XkEyXkFqcGdeQXVyNjUwMzI2NzU@._V1_UX128_CR0,3,128,176_AL_.jpg",
          imDbRating: 8.6,
          synopsis:
            "An angel is sent from Heaven to help a desperately frustrated businessman by showing him what life would have been like if he had never existed.",
          runtime: 130,
          year: "1946",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "The Silence of the Lambs",
          genreId: 5,
          image:
            "https://m.media-amazon.com/images/M/MV5BNjNhZTk0ZmEtNjJhMi00YzFlLWE1MmEtYzM1M2ZmMGMwMTU4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UX128_CR0,3,128,176_AL_.jpg",
          imDbRating: 8.6,
          synopsis:
            "A young F.B.I. cadet must receive the help of an incarcerated and manipulative cannibal killer to help catch another serial killer, a madman who skins his victims.",
          runtime: 118,
          year: "1991",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Saving Private Ryan",
          genreId: 1,
          image:
            "https://m.media-amazon.com/images/M/MV5BZjhkMDM4MWItZTVjOC00ZDRhLThmYTAtM2I5NzBmNmNlMzI1XkEyXkFqcGdeQXVyNDYyMDk5MTU@._V1_UX128_CR0,3,128,176_AL_.jpg",
          imDbRating: 8.6,
          synopsis:
            "Following the Normandy Landings, a group of U.S. soldiers go behind enemy lines to retrieve a paratrooper whose brothers have been killed in action.",
          runtime: 169,
          year: "1998",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "City of God",
          genreId: 8,
          image:
            "https://m.media-amazon.com/images/M/MV5BOTMwYjc5ZmItYTFjZC00ZGQ3LTlkNTMtMjZiNTZlMWQzNzI5XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UX128_CR0,3,128,176_AL_.jpg",
          imDbRating: 8.6,
          synopsis:
            "In the slums of Rio, two kids' paths diverge as one struggles to become a photographer and the other a kingpin.",
          runtime: 130,
          year: "2002",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Life Is Beautiful",
          genreId: 2,
          image:
            "https://m.media-amazon.com/images/M/MV5BYmJmM2Q4NmMtYThmNC00ZjRlLWEyZmItZTIwOTBlZDQ3NTQ1XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UX128_CR0,3,128,176_AL_.jpg",
          imDbRating: 8.6,
          synopsis:
            "When an open-minded Jewish waiter and his son become victims of the Holocaust, he uses a perfect mixture of will, humor, and imagination to protect his son from the dangers around their camp.",
          runtime: 116,
          year: "1997",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Kiki's Delivery Service",
          genreId: 2,
          image:
            "https://www.simpleimageresizer.com/_uploads/photos/1f1aec14/MV5BOTc0ODM1Njk1NF5BMl5BanBnXkFtZTcwMDI5OTEyNw._V1_FMjpg_UX1000__1_259x356.jpg",
          imDbRating: 7.8,
          synopsis:
            "A young witch, on her mandatory year of independent life, finds fitting into a new community difficult while she supports herself by running an air courier service.",
          runtime: 103,
          year: "1989",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Up",
          genreId: 2,
          image:
            "https://www.simpleimageresizer.com/_uploads/photos/1f1aec14/Bf4kbYR_1_259x356.png",
          imDbRating: 8.2,
          synopsis:
            "78-year-old Carl Fredricksen travels to Paradise Falls in his house equipped with balloons, inadvertently taking a young stowaway.",
          runtime: 96,
          year: "2009",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Parasite",
          genreId: 5,
          image:
            "https://m.media-amazon.com/images/M/MV5BYWZjMjk3ZTItODQ2ZC00NTY5LWE0ZDYtZTI3MjcwN2Q5NTVkXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_UX128_CR0,3,128,176_AL_.jpg",
          imDbRating: 8.5,
          synopsis:
            "Greed and class discrimination threaten the newly formed symbiotic relationship between the wealthy Park family and the destitute Kim clan.",
          runtime: 132,
          year: "2019",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "The Green Mile",
          genreId: 3,
          image:
            "https://m.media-amazon.com/images/M/MV5BMTUxMzQyNjA5MF5BMl5BanBnXkFtZTYwOTU2NTY3._V1_UX128_CR0,3,128,176_AL_.jpg",
          imDbRating: 8.6,
          synopsis:
            "The lives of guards on Death Row are affected by one of their charges: a black man accused of child murder and rape, yet who has a mysterious gift.",
          runtime: 189,
          year: "1999",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Star Wars",
          genreId: 4,
          image:
            "https://m.media-amazon.com/images/M/MV5BNzVlY2MwMjktM2E4OS00Y2Y3LWE3ZjctYzhkZGM3YzA1ZWM2XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UX128_CR0,3,128,176_AL_.jpg",
          imDbRating: 8.6,
          synopsis:
            "Luke Skywalker joins forces with a Jedi Knight, a cocky pilot, a Wookiee and two droids to save the galaxy from the Empire's world-destroying battle station, while also attempting to rescue Princess Leia from the mysterious Darth Vader.",
          runtime: 121,
          year: "1977",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Interstellar",
          genreId: 3,
          image:
            "https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UX128_CR0,3,128,176_AL_.jpg",
          imDbRating: 8.6,
          synopsis:
            "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
          runtime: 169,
          year: "2014",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Terminator 2: Judgment Day",
          genreId: 1,
          image:
            "https://m.media-amazon.com/images/M/MV5BMGU2NzRmZjUtOGUxYS00ZjdjLWEwZWItY2NlM2JhNjkxNTFmXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UX128_CR0,3,128,176_AL_.jpg",
          imDbRating: 8.5,
          synopsis:
            "A cyborg, identical to the one who failed to kill Sarah Connor, must now protect her ten-year-old son John from a more advanced and powerful cyborg.",
          runtime: 137,
          year: "1991",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Back to the Future",
          genreId: 4,
          image:
            "https://m.media-amazon.com/images/M/MV5BZmU0M2Y1OGUtZjIxNi00ZjBkLTg1MjgtOWIyNThiZWIwYjRiXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UX128_CR0,3,128,176_AL_.jpg",
          imDbRating: 8.5,
          synopsis:
            "Marty McFly, a 17-year-old high school student, is accidentally sent thirty years into the past in a time-traveling DeLorean invented by his close friend, the eccentric scientist Doc Brown.",
          runtime: 116,
          year: "1985",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Spirited Away",
          genreId: 3,
          image:
            "https://m.media-amazon.com/images/M/MV5BMjlmZmI5MDctNDE2YS00YWE0LWE5ZWItZDBhYWQ0NTcxNWRhXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UX128_CR0,3,128,176_AL_.jpg",
          imDbRating: 8.5,
          synopsis:
            "During her family's move to the suburbs, a sullen 10-year-old girl wanders into a world ruled by gods, witches, and spirits, and where humans are changed into beasts.",
          runtime: 125,
          year: "2001",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Psycho",
          genreId: 8,
          image:
            "https://m.media-amazon.com/images/M/MV5BNTQwNDM1YzItNDAxZC00NWY2LTk0M2UtNDIwNWI5OGUyNWUxXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UX128_CR0,3,128,176_AL_.jpg",
          imDbRating: 8.5,
          synopsis:
            "A Phoenix secretary embezzles $40,000 from her employer's client, goes on the run, and checks into a remote motel run by a young man under the domination of his mother.",
          runtime: 109,
          year: "1960",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "The Pianist",
          genreId: 3,
          image:
            "https://m.media-amazon.com/images/M/MV5BOWRiZDIxZjktMTA1NC00MDQ2LWEzMjUtMTliZmY3NjQ3ODJiXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UY176_CR0,0,128,176_AL_.jpg",
          imDbRating: 8.5,
          synopsis:
            "A Polish Jewish musician struggles to survive the destruction of the Warsaw ghetto of World War II.",
          runtime: 150,
          year: "2002",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Léon: The Professional",
          genreId: 1,
          image:
            "https://m.media-amazon.com/images/M/MV5BODllNWE0MmEtYjUwZi00ZjY3LThmNmQtZjZlMjI2YTZjYmQ0XkEyXkFqcGdeQXVyNTc1NTQxODI@._V1_UX128_CR0,3,128,176_AL_.jpg",
          imDbRating: 8.5,
          synopsis:
            "12-year-old Mathilda is reluctantly taken in by Léon, a professional assassin, after her family is murdered. An unusual relationship forms as she becomes his protégée and learns the assassin's trade.",
          runtime: 110,
          year: "1994",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "The Maze Runner",
          genreId: 1,
          image:
            "https://www.simpleimageresizer.com/_uploads/photos/1f1aec14/MV5BMjUyNTA3MTAyM15BMl5BanBnXkFtZTgwOTEyMTkyMjE._V1_FMjpg_UX1000__259x356.jpg",
          imDbRating: 6.8,
          synopsis:
            "Thomas is deposited in a community of boys after his memory is erased, soon learning they're all trapped in a maze that will require him to join forces with fellow 'runners' for a shot at escape.",
          runtime: 113,
          year: "2014",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "The Lion King",
          genreId: 3,
          image:
            "https://m.media-amazon.com/images/M/MV5BYTYxNGMyZTYtMjE3MS00MzNjLWFjNmYtMDk3N2FmM2JiM2M1XkEyXkFqcGdeQXVyNjY5NDU4NzI@._V1_UX128_CR0,3,128,176_AL_.jpg",
          imDbRating: 8.5,
          synopsis:
            "Lion prince Simba and his father are targeted by his bitter uncle, who wants to ascend the throne himself.",
          runtime: 88,
          year: "1994",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "American History X",
          genreId: 3,
          image:
            "https://m.media-amazon.com/images/M/MV5BZTJhN2FkYWEtMGI0My00YWM4LWI2MjAtM2UwNjY4MTI2ZTQyXkEyXkFqcGdeQXVyNjc3MjQzNTI@._V1_UX128_CR0,3,128,176_AL_.jpg",
          imDbRating: 8.5,
          synopsis:
            "A former neo-nazi skinhead tries to prevent his younger brother from going down the same wrong path that he did.",
          runtime: 119,
          year: "1998",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Gladiator",
          genreId: 1,
          year: "2000",
          image:
            "https://m.media-amazon.com/images/M/MV5BMDliMmNhNDEtODUyOS00MjNlLTgxODEtN2U3NzIxMGVkZTA1L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UX128_CR0,3,128,176_AL_.jpg",
          imDbRating: 8.5,
          synopsis:
            "A former Roman General sets out to exact vengeance against the corrupt emperor who murdered his family and sent him into slavery.",
          runtime: 155,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "The Usual Suspects",
          genreId: 6,
          image:
            "https://m.media-amazon.com/images/M/MV5BYTViNjMyNmUtNDFkNC00ZDRlLThmMDUtZDU2YWE4NGI2ZjVmXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UX128_CR0,3,128,176_AL_.jpg",
          imDbRating: 8.5,
          synopsis:
            "A sole survivor tells of the twisty events leading up to a horrific gun battle on a boat, which began when five criminals met at a seemingly random police lineup.",
          runtime: 106,
          year: "1995",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "The Departed",
          genreId: 8,
          image:
            "https://m.media-amazon.com/images/M/MV5BMTI1MTY2OTIxNV5BMl5BanBnXkFtZTYwNjQ4NjY3._V1_UX128_CR0,3,128,176_AL_.jpg",
          imDbRating: 8.5,
          synopsis:
            "An undercover cop and a mole in the police attempt to identify each other while infiltrating an Irish gang in South Boston.",
          runtime: 151,
          year: "2006",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "The Prestige",
          genreId: 6,
          image:
            "https://m.media-amazon.com/images/M/MV5BMjA4NDI0MTIxNF5BMl5BanBnXkFtZTYwNTM0MzY2._V1_UX128_CR0,3,128,176_AL_.jpg",
          imDbRating: 8.5,
          synopsis:
            "After a tragic accident, two stage magicians in 1890s London engage in a battle to create the ultimate illusion while sacrificing everything they have to outwit each other.",
          runtime: 130,
          year: "2006",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Casablanca",
          genreId: 7,
          image:
            "https://m.media-amazon.com/images/M/MV5BY2IzZGY2YmEtYzljNS00NTM5LTgwMzUtMzM1NjQ4NGI0OTk0XkEyXkFqcGdeQXVyNDYyMDk5MTU@._V1_UX128_CR0,3,128,176_AL_.jpg",
          imDbRating: 8.5,
          synopsis:
            "A cynical expatriate American cafe owner struggles to decide whether or not to help his former lover and her fugitive husband escape the Nazis in French Morocco.",
          runtime: 102,
          year: "1942",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Whiplash",
          genreId: 3,
          image:
            "https://m.media-amazon.com/images/M/MV5BOTA5NDZlZGUtMjAxOS00YTRkLTkwYmMtYWQ0NWEwZDZiNjEzXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UX128_CR0,3,128,176_AL_.jpg",
          imDbRating: 8.5,
          synopsis:
            "A promising young drummer enrolls at a cut-throat music conservatory where his dreams of greatness are mentored by an instructor who will stop at nothing to realize a student's potential.",
          runtime: 106,
          year: "2014",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "The Intouchables",
          genreId: 2,
          image:
            "https://m.media-amazon.com/images/M/MV5BMTYxNDA3MDQwNl5BMl5BanBnXkFtZTcwNTU4Mzc1Nw@@._V1_UX128_CR0,3,128,176_AL_.jpg",
          imDbRating: 8.5,
          synopsis:
            "After he becomes a quadriplegic from a paragliding accident, an aristocrat hires a young man from the projects to be his caregiver.",
          runtime: 112,
          year: "2011",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Modern Times",
          genreId: 7,
          image:
            "https://m.media-amazon.com/images/M/MV5BYjJiZjMzYzktNjU0NS00OTkxLWEwYzItYzdhYWJjN2QzMTRlL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UX128_CR0,3,128,176_AL_.jpg",
          imDbRating: 8.5,
          synopsis:
            "The Tramp struggles to live in modern industrial society with the help of a young homeless woman.",
          runtime: 87,
          year: "1936",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Once Upon a Time in the West",
          genreId: 9,
          image:
            "https://m.media-amazon.com/images/M/MV5BODQ3NDExOGYtMzI3Mi00NWRlLTkwNjAtNjc4MDgzZGJiZTA1XkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_UX128_CR0,3,128,176_AL_.jpg",
          imDbRating: 8.4,
          synopsis:
            "A mysterious stranger with a harmonica joins forces with a notorious desperado to protect a beautiful widow from a ruthless assassin working for the railroad.",
          runtime: 165,
          year: "1968",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Hara-Kiri",
          genreId: 1,
          image:
            "https://m.media-amazon.com/images/M/MV5BYjBmYTQ1NjItZWU5MS00YjI0LTg2OTYtYmFkN2JkMmNiNWVkXkEyXkFqcGdeQXVyMTMxMTY0OTQ@._V1_UY176_CR0,0,128,176_AL_.jpg",
          imDbRating: 8.4,
          synopsis:
            "When a ronin requesting seppuku at a feudal lord's palace is told of the brutal suicide of another ronin who previously visited, he reveals how their pasts are intertwined - and in doing so challenges the clan's integrity.",
          runtime: 133,
          year: "1962",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Grave of the Fireflies",
          genreId: 3,
          image:
            "https://m.media-amazon.com/images/M/MV5BZmY2NjUzNDQtNTgxNC00M2Q4LTljOWQtMjNjNDBjNWUxNmJlXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_UX128_CR0,3,128,176_AL_.jpg",
          imDbRating: 8.4,
          synopsis:
            "A young boy and his little sister struggle to survive in Japan during World War II.",
          runtime: 89,
          year: "1988",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Rear Window",
          genreId: 6,
          image:
            "https://m.media-amazon.com/images/M/MV5BNGUxYWM3M2MtMGM3Mi00ZmRiLWE0NGQtZjE5ODI2OTJhNTU0XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UX128_CR0,3,128,176_AL_.jpg",
          imDbRating: 8.4,
          synopsis:
            "A wheelchair-bound photographer spies on his neighbors from his Greenwich Village courtyard apartment window, and becomes convinced one of them has committed murder, despite the skepticism of his fashion-model girlfriend.",
          runtime: 112,
          year: "1954",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Alien",
          genreId: 5,
          image:
            "https://m.media-amazon.com/images/M/MV5BOGQzZTBjMjQtOTVmMS00NGE5LWEyYmMtOGQ1ZGZjNmRkYjFhXkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_UX128_CR0,3,128,176_AL_.jpg",
          imDbRating: 8.4,
          synopsis:
            "The crew of a commercial spacecraft encounter a deadly lifeform after investigating an unknown transmission.",
          runtime: 117,
          year: "1979",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.bulkDelete("Movies", null, {});
  },
};
