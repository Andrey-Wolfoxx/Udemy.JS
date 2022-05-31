'use strict';

const numberOfFilms = +prompt("How many films you've watched?", "");

const personalMovieDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: false
};

const a = prompt("Last film?", ""),
	  b = prompt("Rate it", ""),
	  c = prompt("Last film?", ""),
	  d = prompt("Rate it", "");


//personalMovieDB.movies[a] = b;
//stapersonalMovieDB.movies[c] = d;

console.log(personalMovieDB);

