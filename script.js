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


personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);

let obj = {
	1:1, 
	0:0
};

for(let key in obj) {
	console.log(key);
}

function firstLife () {  
	alert('Hello world!');
}