"use strict";

let numberOfFilms;

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: true,
    startTest: function () {
        numberOfFilms = +prompt("Сколько фильмов вы уже посомтрели?", "");

        while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
            numberOfFilms = +prompt("Сколько фильмов вы уже посомтрели?", "");
        }
        personalMovieDB.count = numberOfFilms;
    },
    rememberMyFilms: function () {
        for (let i = 0; i < 2; i++) {
            const a = prompt("Один из последних просмотренных фильмов?", ""),
                b = prompt("На сколько оцените его?", "");
            if (a != null && b != null && a != '' && b != '' && a.length < 50 && b.length < 50) {
                console.log('done');
                personalMovieDB.movies[a] = b;
            } else {
                console.log('error');
                i--;
            }
        }
    },
    detectPersonalLevel: function () {
        if (personalMovieDB.count < 10) {
            console.log("Просмотренно довольно мало фильмов!");
        } else if (personalMovieDB.count < 30) {
            console.log("Вы классический зритель");
        } else if (personalMovieDB.count > 30) {
            console.log("Вы киноман");
        } else {
            console.log("Ошибка!");
        }
    },
    showMyDB: function (hidden) {
        if (!hidden) {
            console.log(personalMovieDB);
        }
    },
    writeYourGenres: function writeYourGenres() {

        for (let i = 1; i <= 3; i++) {
            personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);
            if (personalMovieDB.genres[i - 1] == '' || personalMovieDB.genres[i - 1] == null) {
                i--;
            }


        }

    },
    toggleVisibleMyDB: function () {
        if (personalMovieDB.privat == false) {
            personalMovieDB.privat = true;
        } else {
            personalMovieDB.privat = false;
        }
    }
};

personalMovieDB.startTest();
personalMovieDB.rememberMyFilms();
personalMovieDB.detectPersonalLevel();

personalMovieDB.toggleVisibleMyDB();

personalMovieDB.showMyDB(personalMovieDB.privat);
personalMovieDB.writeYourGenres();


const copy = [...personalMovieDB.genres];

personalMovieDB.genres.forEach(function (item, i, copy) {
    console.log(`Любимый жанр №${i+1} - это ${item}`);
});
