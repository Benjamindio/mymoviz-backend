var express = require('express');
var router = express.Router()

const fetch = require('node-fetch');

const API_KEY = process.env.API_KEY


router.get('/' , (req,res) => {
    fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}`)
    .then(response => response.json())
    .then(data => { 
        const dataMovie =[]
     for (let i =0 ; i < data.results.length;i++) {
      const newMovie ={
        title: data.results[i].title,
        poster: `https://image.tmdb.org/t/p/w500${data.results[i].poster_path}`, 
        voteAverage: data.results[i].vote_average, 
        voteCount: data.results[i].vote_count, 
        overview: data.results[i].overview, 
      }
      dataMovie.push(newMovie)
     }
        res.json({movies:dataMovie})
    })
})

module.exports = router;