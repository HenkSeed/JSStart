/*
function printConsole() {
	console.log("Сообщение из функции");
}

printConsole();
*/

// multi-args
/* Если несколько аргументов
function printConsole(arg1, arg2, arg3) {
	console.log('Сообщение из функции');
	console.log(arg1 + 3); // (8)
	console.log(arg2 + 7); // (12)
	console.log(arg3 - 4); // (5)
}

printConsole(5, 5, 9);
*/

/*
const foo = function (arr) {
	console.log(arr);
};
foo([1, 2, 3]);
*/

/*
const bar = (args) => {
	console.log(args);
};
bar('Привет!');
*/

const fun = function (arr) {
	return arr.shift(); // Возвращает первый элемент массива
};
console.log(fun([1, 2, 3]));

const bar = (args) => {
	return 'Привет, ' + args;
};
console.log(bar('Макс!')); // Возвращает в консоль "Привет, Макс!"
