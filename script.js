// alert("Hello, World !");
// console.log("Hello, World !");
// console.log("Hello, World !");
// console.log("Hello, World !");

let num = 5;

let string = "Bob";
let string2 = "Привет, Друг!";
let template = `Список дел на сегодня:
Покормить кота
Поесть самому
Помыть потолок`;
let template2 = `Hello, ${string}!`;

let bul = true;
let lie = false;

let und; // undefined - тип несуществующего элемента массива или переменной без значения
// let bigInt = 25002195224663795555555n; jshint ругается на эту переменную
let symbol = Symbol();

let donutHole = null; // пустота, обнулённая функция

let object = {
	// ключ (объект): значение,
	a: 5,
	b: "javascript",
	c: false,
	d: {
		d: 10,
		e: 15,
	},
	z: [1, 2, 3],
};
object.x = ["a", "b", "c"]; // создается элемент массива с ключом х

// Возможны как точка, так и квадратные скобки [] (но объект при этом должен оформляться в "")
// Но нотация с точкой предпочтительней (jshint не ругается)
console.log(object.z);
console.log(object["z"]);
console.log(object);

let array = [1, "b", { a: 1, b: "Hello" }, true];
console.log(array); // обращение ко всему массиву
console.log(array[2]); // обращение к 3 элементу массива

let func = function () {};

let regExp = /D/g;
let error = new Error();
let data = new Date();
let map = new Map();
let set = new Set();
