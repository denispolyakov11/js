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

/* const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

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

console.log(personalMovieDB); */

/* if (4 == 9) {
    console.log('ok');
} else {
    console.log('Error');
}

const num = 50;

if (num < 49) {
    console.log('error');
} else if (num > 100) {
    console.log('Много');
} else {
    console.log('Ok!');
}

(num === 50) ? console.log('Ok!') : console.log('error'); */

/* const num = 50;

switch (num) {
    case 49:
        console.log('Error');
        break;
    case 100:
        console.log('Error');
        break;
    case 50:
        console.log('ok');
        break;
    default:
        console.log('Не в этот раз');
        break;
} */

/* console.log( NaN || 2 || undefined );

console.log( NaN && 2 && undefined );

console.log( 1 && 2 && 3 );

console.log( !1 && 2 || !3 );

console.log( 25 || null && !3 );

console.log( NaN || null || !3 || undefined || 5);

console.log( NaN || null && !3 && undefined || 5);

console.log( 5 === 5 && 3 > 1 || 5); */

/* const hamburger = 3;
const fries = 3;
const cola = 0;
const nuggets = 2;
 
if (hamburger === 3 && cola || fries === 3 && nuggets) {
   console.log('Done!');
}


let hamburger;
const fries = NaN;
const cola = 0;
const nuggets = 2;
 
if (hamburger || cola || fries === 3 || nuggets) {
   console.log('Done!');
} */

/* let hamburger;
const fries = NaN;
const cola = 0;
const nuggets = 2;
 
if (hamburger && cola || fries === 3 && nuggets) {
   console.log('Done!');
} */

/* let num = 50; */

/* while (num <= 55) {
    console.log(num);
    num++;
} */

/* do {
    console.log(num);
    num++;
}

while (num < 55); */

/* for (let i = 1; i < 10; i++) {
    if (i === 6){
        break;
        continue;
    }
    console.log(i);
}
 */

/* let result = '';
const lenght = 7;

for( let i = 1; i < lenght; i++) {
    for( let j = 0; j < i; j++) {
        result += '*';
    }

    result += '\n';
}

console.log(result); */

/* for (let i = 2; i <= 10; i++) {
    if (i % 2 == 0) {
        console.log(i);
    } 
        
} */

/* let i = 2;

while (i <= 16) {
    if (i % 2 === 0) {
        i++;
        continue;
    } else {
        console.log(i);
    }
    i++;

} */

/* const arrayOfNumbers = [];

for(let i = 1; i<=10; i++) {
    arr.push(i);
}
console.log(arrayOfNumbers);
 */

