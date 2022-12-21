/* alert('Hello') */

/* const result = confirm('Are you here?');
console.log(result); */

/* const answer = +prompt('Are You over 18 years old?', '18');
console.log(answer + 5); */

/* const answers = [];

answers[0] = prompt('Как ваше имя?', '');
answers[1] = prompt('Как ваше фамилия?', '');
answers[2] = prompt('Сколько вам лет?', '');

document.write(answers); */

/* const userName = 'Denis';

alert('Привет '+ userName); */

"use strict";

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt ('Один из последних просмотренных фильмов?', ''),
      b = prompt ('На сколько оцените его?', ''),
      c = prompt ('Один из последних просмотренных фильмов?', ''),
      d = prompt ('На сколько оцените его?', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);