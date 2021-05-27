// "use strict";

// let numberOfFilms,
//     a,
//     b; 
// const personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false
// };
//     do{
//         numberOfFilms = prompt("Сколько фильмов вы уже посомтрели?", "");
//     }
//     while (numberOfFilms.length > 50); {
//         if (numberOfFilms < 1) {
//              do {
//                  numberOfFilms = prompt("Сколько фильмов вы уже посомтрели?", "");
//              }
//              while (numberOfFilms < 1);
//         }
//     }
//     do {
//         a = prompt("Один из последних просмотренных фильмов?", "");
//     }
//     while (a.length > 50); {
//         if (a < 1) {
//             do {
//             a = prompt("Один из последних просмотренных фильмов?", "");
//             }
//             while (a < 1);
//         } 
//     }
//     do {
//         b = prompt("На сколько оцените его?", "Укажите цифру до 10");
//     }
//     while (b > 10); {
//         if (b < 1) {
//             do {
//                 b = prompt("На сколько оцените его?", "Укажите цифру до 10");
//             }
//             while (b < 1);
//         }
//     }
// personalMovieDB.count = numberOfFilms;
// personalMovieDB.movies[a] = b;
// console.log(personalMovieDB);
// if (personalMovieDB.count < 10) {
//     alert("Просмотренно довольно мало фильмов!");
// } else if (personalMovieDB.count < 30) {
//     alert("Вы классический зритель");
// } else if (personalMovieDB.count > 30) {
//     alert("Вы киноман");
// } else {
//     alert("Ошибка!");
// }


"use strict";

const numberOfFilms = prompt("Сколько фильмов вы уже посомтрели?", "");

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};



    for ( let i = 0; i < 2; i++){
        const a = prompt("Один из последних просмотренных фильмов?", ""),
              b = prompt("На сколько оцените его?", "");
        if (a != null && b !=null && a != '' && b != '' &&  a.length < 50 && b.length < 50){
            console.log('done');
            personalMovieDB.movies[a]=b;
        } else {
            console.log('error');
            i--;
        }
    }


    if (personalMovieDB.count < 10) {
            console.log("Просмотренно довольно мало фильмов!");
        } else if (personalMovieDB.count < 30) {
            console.log("Вы классический зритель");
        } else if (personalMovieDB.count > 30) {
            console.log("Вы киноман");
        } else {
            console.log("Ошибка!");
    }

    
console.log(personalMovieDB);