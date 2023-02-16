/* Задание на урок:

1) Первую часть задания повторить по уроку

2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
false - выводит в консоль главный объект программы

3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres

P.S. Функции вызывать не обязательно*/

'use strict';

// Код возьмите из предыдущего домашнего задания

let numberOfFilms;

function start() {
    // numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");


    while (numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
    }
};

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        let lastWatchedMovie = prompt("Один из последних просмотренных фильмов?", "");
        let filmScore = prompt("На сколько оцените его?", "");

        if (lastWatchedMovie != "" && filmScore != "" && lastWatchedMovie != null && filmScore != null && lastWatchedMovie.length < 50) {
            personalMovieDB.movies[lastWatchedMovie] = filmScore;
            console.log("done");
        }
        else {
            console.log("error");
            i--;
        }

    }
};

rememberMyFilms();

function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        alert("Просмотрено довольно мало фильмов");
    }
    else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        alert("Вы классический зритель");
        console.log("Вы классический зритель");
    }
    else if (personalMovieDB.count >= 30) {
        alert("Вы киноман");
        console.log("Вы киноман");
    }
    else {
        alert("Произошла ошибка");
        console.log("Произошла ошибка");
    }
}

detectPersonalLevel()

// personalMovieDB["privat"] = true;


function showMyDB() {
    if (personalMovieDB["privat"] === false) {
        console.log(personalMovieDB);
    }
};

showMyDB()


function writeYourGenres() {
    // let genres = prompt("Ваш любимый жанр под номером ${номер по порядку}")
    for (let i = 0; i < 3; i++) {
        personalMovieDB.genres[i] = prompt(`Ваш любимый жанр под номером ${i + 1}`, "")
    }
};
writeYourGenres();

// console.log(personalMovieDB);
