/*
const fun = function (arr) {
	return arr.shift(); // Возвращает первый элемент массива
};
console.log(fun([1, 2, 3]));

const bar = (args) => {
	return 'Привет, ' + args;
};
console.log(bar('Макс!')); // Возвращает в консоль "Привет, Макс!"
*/

// console.log(document);
// const head = document.getElementsByTagName('h1');
/* 
const head = document.getElementsByClassName('head');
console.log(head[0]); 
*/

/*
const head_01 = document.getElementById('main-head');
console.log(head_01);
*/

/*
const head1 = document.querySelector('#main-head');
const head2 = document.querySelector('.head');
const head3 = document.querySelector('h1');

console.log(head1);
console.log(head2);
console.log(head3);
*/

/*
const head = document.querySelector('[title="Javascript"]');
const head1 = document.querySelector('#type');
const head2 = document.querySelector('.green');

// Находит первый элемент li и присваивает его значение head3
const head3 = document.querySelector('li'); 
console.log(head);
console.log(head1);
console.log(head2);
console.log(head3);

const head4 = document.querySelectorAll('li'); // Находит все элементы li и выводит их в массив
console.log(head4);
*/

const title = document.querySelector('[title="Javascript"]');
/*
const type = document.querySelector('#type');
const green = document.querySelector('.green');
const list = document.querySelector('li');
*/

/*
const title_class = green.classList;
console.log(title_class);

type.className = 'red'; // Переменной type, в которую сохранён объект с id="type" присваиваем класс 'red'
green.className = 'blue'; // То же, но присваиваемый т.о. класс "затирает" существующий класс этого объекта
*/

/* Для того, чтобы класс не "затирался", применяется classList.add() */
/*
green.classList.add('blue'); // Добавлен класс 'blue'
green.classList.remove('green'); // Удалён класс 'green'
green.classList.toggle('green'); // Добавляет или удаляет класс 'green'
green.classList.contains('green'); // Возвращает true, если у объекта green есть класс 'green', и false, если наоборот
*/

/* Работа со стилями. Данный способ важней (главней), чем css */
title.style.textDecoration = 'underline'; // text-decoration переведен в textDecoration (camelCase)
// объекту title задан стиль подчёркивания
const list = document.querySelector('ul'); // Выбирает весь список - массив li
console.log(list);

const li = list.querySelector('.green'); // Выбор не из document, а из переменной
console.log(li);
