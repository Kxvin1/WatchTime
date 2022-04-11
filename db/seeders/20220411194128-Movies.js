'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
   return queryInterface.bulkInsert('Movies', [
    {
      title: "The Shawshank Redemption",
      genreId: 3,
      image: "https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UX128_CR0,3,128,176_AL_.jpg",
      imDbRating: 9.2,
      synopsis: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
      runtime: 142,
      year: "1994",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      title: "The Godfather",
      genreId: 3,
      image: "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UX128_CR0,1,128,176_AL_.jpg",
      imDbRating: 9.2,
      synopsis: "The aging patriarch of an organized crime dynasty in postwar New York City transfers control of his clandestine empire to his reluctant youngest son.",
      runtime: 175,
      year: "1972",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      title: "The Dark Knight",
      genreId: 1,
      image: "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_UX128_CR0,3,128,176_AL_.jpg",
      imDbRating: 9.0,
      synopsis: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
      runtime: 152,
      year: "2008",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      title: "The Godfather: Part II",
      genreId: 3,
      image: "https://m.media-amazon.com/images/M/MV5BMWMwMGQzZTItY2JlNC00OWZiLWIyMDctNDk2ZDQ2YjRjMWQ0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UX128_CR0,1,128,176_AL_.jpg",
      imDbRating: 9.0,
      synopsis: "The early life and career of Vito Corleone in 1920s New York City is portrayed, while his son, Michael, expands and tightens his grip on the family crime syndicate.",
      runtime: 202,
      year: "1974",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      title: "12 Angry Men",
      genreId: 3,
      image: "https://m.media-amazon.com/images/M/MV5BMWU4N2FjNzYtNTVkNC00NzQ0LTg0MjAtYTJlMjFhNGUxZDFmXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_UX128_CR0,3,128,176_AL_.jpg",
      imDbRating: 9.0,
      synopsis: "The jury in a New York City murder trial is frustrated by a single member whose skeptical caution forces them to more carefully consider the evidence before jumping to a hasty verdict.",
      runtime: 96,
      year: "1957",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      title: "Schindler's List",
      genreId: 3,
      image: "https://m.media-amazon.com/images/M/MV5BNDE4OTMxMTctNmRhYy00NWE2LTg3YzItYTk3M2UwOTU5Njg4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UX128_CR0,3,128,176_AL_.jpg",
      imDbRating: 8.9,
      synopsis: "In German-occupied Poland during World War II, industrialist Oskar Schindler gradually becomes concerned for his Jewish workforce after witnessing their persecution by the Nazis.",
      runtime: 195,
      year: "1993",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      title: "The Lord of the Rings: The Return of the King",
      genreId: 4,
      image: "https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UX128_CR0,3,128,176_AL_.jpg",
      imDbRating: 8.9,
      synopsis: "Gandalf and Aragorn lead the World of Men against Sauron's army to draw his gaze from Frodo and Sam as they approach Mount Doom with the One Ring.",
      runtime: 201,
      year: "2003",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      title: "Pulp Fiction",
      genreId: 2,
      image: "https://m.media-amazon.com/images/M/MV5BNGNhMDIzZTUtNTBlZi00MTRlLWFjM2ItYzViMjE3YzI5MjljXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UX128_CR0,3,128,176_AL_.jpg",
      imDbRating: 8.9,
      synopsis: "The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
      runtime: 154,
      year: "1994",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      title: "The Lord of the Rings: The Fellowship of the Ring",
      genreId: 4,
      image: "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_UX128_CR0,3,128,176_AL_.jpg",
      imDbRating: 8.8,
      synopsis: "A meek Hobbit from the Shire and eight companions set out on a journey to destroy the powerful One Ring and save Middle-earth from the Dark Lord Sauron.",
      runtime: 178,
      year: "2001",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      title: "The Good, the Bad and the Ugly",
      genreId: 9,
      image: "https://m.media-amazon.com/images/M/MV5BNjJlYmNkZGItM2NhYy00MjlmLTk5NmQtNjg1NmM2ODU4OTMwXkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_UX128_CR0,3,128,176_AL_.jpg",
      imDbRating: 8.8,
      synopsis: "A bounty hunting scam joins two men in an uneasy alliance against a third in a race to find a fortune in gold buried in a remote cemetery.",
      runtime: 178,
      year: "1966",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      title: "Forrest Gump",
      genreId: 7,
      image: "https://m.media-amazon.com/images/M/MV5BNWIwODRlZTUtY2U3ZS00Yzg1LWJhNzYtMmZiYmEyNmU1NjMzXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UX128_CR0,3,128,176_AL_.jpg",
      imDbRating: 8.8,
      synopsis: "The presidencies of Kennedy and Johnson, the Vietnam War, the Watergate scandal and other historical events unfold from the perspective of an Alabama man with an IQ of 75, whose only desire is to be reunited with his childhood sweetheart.",
      runtime: 142,
      year: "1994",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      title: "Fight Club",
      genreId: 1,
      image: "https://m.media-amazon.com/images/M/MV5BNDIzNDU0YzEtYzE5Ni00ZjlkLTk5ZjgtNjM3NWE4YzA3Nzk3XkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_UX128_CR0,3,128,176_AL_.jpg",
      imDbRating: 8.8,
      synopsis: "An insomniac office worker and a devil-may-care soap maker form an underground fight club that evolves into much more.",
      runtime: 139,
      year: "1999",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      title: "Inception",
      genreId: 8,
      image: "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_UX128_CR0,3,128,176_AL_.jpg",
      imDbRating: 8.7,
      synopsis: "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O., but his tragic past may doom the project and his team to disaster.",
      runtime: 148,
      year: "2010",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      title: "The Lord of the Rings: The Two Towers",
      genreId: 4,
      image: "https://m.media-amazon.com/images/M/MV5BZGMxZTdjZmYtMmE2Ni00ZTdkLWI5NTgtNjlmMjBiNzU2MmI5XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UX128_CR0,3,128,176_AL_.jpg",
      imDbRating: 8.7,
      synopsis: "While Frodo and Sam edge closer to Mordor with the help of the shifty Gollum, the divided fellowship makes a stand against Sauron's new ally, Saruman, and his hordes of Isengard.",
      runtime: 179,
      year: "2002",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      title: "Star Wars: Episode V - The Empire Strikes Back",
      genreId: 4,
      image: "https://m.media-amazon.com/images/M/MV5BYmU1NDRjNDgtMzhiMi00NjZmLTg5NGItZDNiZjU5NTU4OTE0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UX128_CR0,3,128,176_AL_.jpg",
      imDbRating: 8.7,
      synopsis: "After the Rebels are brutally overpowered by the Empire on the ice planet Hoth, Luke Skywalker begins Jedi training with Yoda, while his friends are pursued across the galaxy by Darth Vader and bounty hunter Boba Fett.",
      runtime: 124,
      year: "1980",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      title: "The Matrix",
      genreId: 1,
      image: "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UX128_CR0,3,128,176_AL_.jpg",
      imDbRating: 8.7,
      synopsis: "When a beautiful stranger leads computer hacker Neo to a forbidding underworld, he discovers the shocking truth--the life he knows is the elaborate deception of an evil cyber-intelligence.",
      runtime: 136,
      year: "1999",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      title: "Goodfellas",
      genreId: 8,
      image: "https://m.media-amazon.com/images/M/MV5BY2NkZjEzMDgtN2RjYy00YzM1LWI4ZmQtMjIwYjFjNmI3ZGEwXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UX128_CR0,3,128,176_AL_.jpg",
      imDbRating: 8.7,
      synopsis: "The story of Henry Hill and his life in the mob, covering his relationship with his wife Karen Hill and his mob partners Jimmy Conway and Tommy DeVito in the Italian-American crime syndicate.",
      runtime: 145,
      year: "1990",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      title: "One Flew Over the Cuckoo's Nest",
      genreId: 3,
      image: "https://m.media-amazon.com/images/M/MV5BZjA0OWVhOTAtYWQxNi00YzNhLWI4ZjYtNjFjZTEyYjJlNDVlL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UX128_CR0,3,128,176_AL_.jpg",
      imDbRating: 8.6,
      synopsis: "A criminal pleads insanity and is admitted to a mental institution, where he rebels against the oppressive nurse and rallies up the scared patients.",
      runtime: 133,
      year: "1975",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      title: "Se7en",
      genreId: 8,
      image: "https://m.media-amazon.com/images/M/MV5BOTUwODM5MTctZjczMi00OTk4LTg3NWUtNmVhMTAzNTNjYjcyXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UX128_CR0,3,128,176_AL_.jpg",
      imDbRating: 8.6,
      synopsis: "Two detectives, a rookie and a veteran, hunt a serial killer who uses the seven deadly sins as his motives.",
      runtime: 127,
      year: "1995",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      title: "Seven Samurai",
      genreId: 1,
      image: "https://m.media-amazon.com/images/M/MV5BOWE4ZDdhNmMtNzE5ZC00NzExLTlhNGMtY2ZhYjYzODEzODA1XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_UX128_CR0,1,128,176_AL_.jpg",
      imDbRating: 8.6,
      synopsis: "A poor village under attack by bandits recruits seven unemployed samurai to help them defend themselves.",
      runtime: 207,
      year: "1954",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      title: "It's a Wonderful Life",
      genreId: 3,
      image: "https://m.media-amazon.com/images/M/MV5BZjc4NDZhZWMtNGEzYS00ZWU2LThlM2ItNTA0YzQ0OTExMTE2XkEyXkFqcGdeQXVyNjUwMzI2NzU@._V1_UX128_CR0,3,128,176_AL_.jpg",
      imDbRating: 8.6,
      synopsis: "An angel is sent from Heaven to help a desperately frustrated businessman by showing him what life would have been like if he had never existed.",
      runtime: 130,
      year: "1946",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      title: "The Silence of the Lambs",
      genreId: 5,
      image: "https://m.media-amazon.com/images/M/MV5BNjNhZTk0ZmEtNjJhMi00YzFlLWE1MmEtYzM1M2ZmMGMwMTU4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UX128_CR0,3,128,176_AL_.jpg",
      imDbRating: 8.6,
      synopsis: "A young F.B.I. cadet must receive the help of an incarcerated and manipulative cannibal killer to help catch another serial killer, a madman who skins his victims.",
      runtime: 118,
      year: "1991",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      title: "Saving Private Ryan",
      genreId: 1,
      image: "https://m.media-amazon.com/images/M/MV5BZjhkMDM4MWItZTVjOC00ZDRhLThmYTAtM2I5NzBmNmNlMzI1XkEyXkFqcGdeQXVyNDYyMDk5MTU@._V1_UX128_CR0,3,128,176_AL_.jpg",
      imDbRating: 8.6,
      synopsis: "Following the Normandy Landings, a group of U.S. soldiers go behind enemy lines to retrieve a paratrooper whose brothers have been killed in action.",
      runtime: 169,
      year: "1998",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      title: "City of God",
      genreId: 8,
      image: "https://m.media-amazon.com/images/M/MV5BOTMwYjc5ZmItYTFjZC00ZGQ3LTlkNTMtMjZiNTZlMWQzNzI5XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UX128_CR0,3,128,176_AL_.jpg",
      imDbRating: 8.6,
      synopsis: "In the slums of Rio, two kids' paths diverge as one struggles to become a photographer and the other a kingpin.",
      runtime: 130,
      year: "2002",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      title: "Life Is Beautiful",
      genreId: 2,
      image: "https://m.media-amazon.com/images/M/MV5BYmJmM2Q4NmMtYThmNC00ZjRlLWEyZmItZTIwOTBlZDQ3NTQ1XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UX128_CR0,3,128,176_AL_.jpg",
      imDbRating: 8.6,
      synopsis: "When an open-minded Jewish waiter and his son become victims of the Holocaust, he uses a perfect mixture of will, humor, and imagination to protect his son from the dangers around their camp.",
      runtime: 116,
      year: "1997",
      createdAt: new Date(),
      updatedAt: new Date()
    }
   ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
   return queryInterface.bulkDelete('Movies', null, {});
  }
};
