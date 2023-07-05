var express = require('express');
var router = express.Router()

const fetch = require('node-fetch');

const API_KEY = process.env.API_KEY


router.get('/' , (req,res) => {
    fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}`)
    .then(response => response.json())
    .then(data => { 
      const dataMovie =[]
      const movie= data.movies
     for (let i =0 ; i < movie.length;i++) {
      const newMovie ={
        title: movie[i].title,
        poster: `https://image.tmdb.org/t/p/w500${movie[i].poster_path}`, 
        voteAverage: movie[i].vote_average, 
        voteCount: movie[i].vote_count, 
        overview: movie[i].overview, 
      }
      dataMovie.push(newMovie)
     }
        res.json({movies:dataMovie})
    })
})

module.exports = router;