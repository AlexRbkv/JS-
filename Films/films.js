const films = [
  {
    title: 'The Green Mile',
    creationYear: 1999,
    country: ['USA'],
    budget: '$60 000 000',
    actors: [
      {
        name: 'Tom Hanks',
        age: 63,
        role: 'Paul Edgecomb',
      },
      {
        name: 'David Morse',
        age: 65,
        role: 'Brutus Howell',
      },
      {
        name: 'Michael Clarke Duncan',
        age: 54,
        role: 'John Coffey',
      },
    ],
    director: {
      name: 'Frank Darabont',
      age: 60,
      oscarsCount: 0,
    }
  },
  {
    title: 'Inception',
    creationYear: 2010,
    country: ['USA'],
    budget: '$160 000 000',
    actors: [
      {
        name: 'Leonardo DiCaprio',
        age: 44,
        role: 'Cobb',
      },
      {
        name: 'Joseph Gordon-Levitt',
        age: 38,
        role: 'Arthur',
      },
      {
        name: 'Ellen Page',
        age: 32,
        role: 'Ariadne',
      },
      {
        name: 'Tom Hardy',
        age: 41,
        role: 'Eames',
      },
    ],
    director: {
      name: 'Christopher Nolan',
      age: 48,
      oscarsCount: 0,
    }
  },
  {
    title: 'Forrest Gump',
    creationYear: 1994,
    country: ['USA'],
    budget: '$55 000 000',
    actors: [
      {
        name: 'Tom Hanks',
        age: 63,
        role: 'Forrest Gump',
      },
      {
        name: 'Robin Wright',
        age: 53,
        role: 'Jenny Curran',
      },
      {
        name: 'Sally Field',
        age: 72,
        role: 'Mrs. Gump',
      },
    ],
    director: {
      name: 'Robert Zemeckis',
      age: 68,
      oscarsCount: 1,
    }
  },
  {
    title: 'Interstellar',
    creationYear: 2014,
    budget: '$165 000 000',
    country: ['USA','Great Britain', 'Canada'],
    actors: [
      {
        name: 'Matthew McConaughey',
        age: 49,
        role: 'Cooper',
      },
      {
        name: 'Anne Hathaway',
        age: 36,
        role: 'Brand',
      },
      {
        name: 'Jessica Chastain',
        age: 42,
        role: 'Murph',
      },
      {
        name: 'Michael Caine',
        age: 86,
        role: 'Professor Brand',
      },
      {
        name: 'Matt Damon',
        age: 48,
        role: 'Mann',
      },
    ],
    director: {
      name: 'Christopher Nolan',
      age: 48,
      oscarsCount: 0,
    }
  },
  {
    title: 'Catch Me If You Can',
    creationYear: 2002,
    budget: '$52 000 000',
    country: ['USA', 'Canada'],
    actors: [
      {
        name: 'Tom Hanks',
        age: 63,
        role: 'Carl Hanratty',
      },
      {
        name: 'Leonardo DiCaprio',
        age: 36,
        role: 'Frank Abagnale Jr.',
      },
      {
        name: 'Christopher Walken',
        age: 76,
        role: 'Frank Abagnale',
      },
      {
        name: 'Amy Adams',
        age: 44,
        role: 'Brenda Strong',
      },
    ],
    director: {
      name: 'Steven Spielberg',
      age: 72,
      oscarsCount: 4,
    }
  },
];

/*Функция находит средний возраст актеров, которые снимались в фильмах режиссеров, которые не получили оскар*/
function aveAge() {
  let averangeAge = 0, actorsCount = 0, actorsAgeSum = 0;
  films.forEach(function(film) {  // Проходимся по массиву фильмов
    if (film.director.oscarsCount === 0) { // Если у режиссера фильма нет оскаров
      film['actors'].forEach(function(actor) { // Проходимся по массиву актеров
          actorsAgeSum += actor.age;
          actorsCount++;
      });
    }
  });
  averangeAge = actorsAgeSum / actorsCount;
  alert('Средний возраст актеров, которые снимались в фильмах режиссеров, которые не получили оскар: ' + Math.round(averangeAge));
};

/*Функция выводит имена всех актеров, которые играли с Томом Хэнксом, в фильмах после 1995 года*/
function actorsNames() {
  const resultArray = [];
  let actorsArray = [];
  actorsArray = films.map(function(film) {
    if (film.creationYear > 1995) {
      let f = film.actors;
      for (let i = 0; i < f.length; i++) {
        if(f[i].name === "Tom Hanks") {
          for (let j = 0; j < f.length; j++) {
            if (f[j].name != "Tom Hanks") {
              resultArray.push(f[j].name)
            }
          }
        }
      }
    return(resultArray)
    }
  });
  while (actorsArray.length != 1) {
      actorsArray.pop();
  }
  alert('Имена всех актеров, которые играли с Томом Хэнксом, в фильмах после 1995 года: ' + actorsArray);
};

/*Функция находит общий бюджет (сумма) фильмов, с режиссерами младше 70 лет и в которых не играл Том Хэнкс*/
function sumBudget() {
  const sum = films.reduce(function(budget, film) {   // Проходимся по массиву фильмов
      if (film.director['age'] < 70) {  // Останавливаемся только на тех фильмах, режиссеры которых младше 70 лет
        let mas = [];   // Вспомогательный массив для имён актеров
        film['actors'].forEach(function(actor) {  // Проходимся по массиву актеров
            mas.push(actor['name']);  // Заносим имя актера во вспомогательный массив
        });
        if (!mas.some(isTomHanks)) {  // Проверяем, есть ли среди актеров актер с именем Том Хэнкс
          return budget + parseInt(film['budget'].substring(1).replace(/\s+/g,''));  // Если в фильме нет актера сименем Том Хэнкс, то прибавляем бюджет фильма к итоговой сумме
        }
        else return budget + 0;   // Если в фильме есть актер с именем Том Хэнкс, то итоговая сумма не меняется
      }
      else return budget + 0;   // Если режиссеру фильма 70 и больше лет, то итоговая сумма не меняется
  }, 0);
  alert("Общий бюджет фильмов, с режиссерами младше 70 лет и в которых не играл Том Хэнкс: " + '$' + sum);
};

/*Функция проверяет, зовут ли актера Том Хэнкс*/
function isTomHanks(name) {
  return name === 'Tom Hanks';
}

aveAge();
actorsNames();
sumBudget();