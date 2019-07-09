let firstOp, //Перменная для первого операнда
	secondOp,  // Переменная для второго операнда
	Op, // Переменная для операции
	result; // Переменная для результата

/* Функция ввода данных пользователем */
function inputData()
{
	firstOp = prompt("Введите первый операнд", 0); // Ввод первого операнда 
	if (isNaN(firstOp) != false) // Проверка на то, является ли первый операнд числом
	{ 							 // Если нет, то пользователь повторяет ввод операнда
								 // пока оно не будет число
		while (isNaN(firstOp) != false)  // Пока первый операнд не является числом...
		{
			alert("Неверно указан первый операнд"); 
			firstOp = prompt("Введите первый операнд", 0); // Ввод первого операнда 
		}
	}

	secondOp = prompt("Введите второй операнд", 0); // Ввод второго операнда 
	if (isNaN(secondOp) != false) // Проверка на то, является ли второй операнд числом
	{							  // Если нет, то пользователь повторяет ввод операнда
								  // пока оно не будет число
		while (isNaN(secondOp) != false) // Пока второй операнд не является числом...
		{
			alert("Неверно указан второй операнд");
			secondOp = prompt("Введите второй операнд", 0); // Ввод второго операнда 
		}
	}

	Op = prompt("Введите операцию", '+'); // Ввод операции
	if (Op != '+' && Op != '-' && Op != '*' && Op != '/' && Op != '%')  // Если введенная пользователем операция не соответствует допустимым
	{																	// повторяем ввод, пока не будет указана допустимая операция
		while (Op != '+' && Op != '-' && Op != '*' && Op != '/' && Op != '%') // Пока операция не является допустимой...
		{
			alert("Неверно указана операция");
			Op = prompt("Введите операцию", '+'); // Ввод операции
		}
	}
	calculate(); // Вызов вычисляющей функции
}

/* Функция, определяющая, какую операция следует выполнить программе */
function calculate()
{
	if (Op == '+')
	{
		calcPlus();
	}
	else if (Op == '-')
	{
		calcMinus();
	}
	else if (Op == '*')
	{
		calcMult();
	}
	else if (Op == '/')
	{
		calcDiv();
	}
	else if (Op == '%')
	{
		calcDiv2();
	}
}

/* Функция, выполняющая сложение операндов */
function calcPlus()
{
	result = Number(firstOp) + Number(secondOp);
	alert('Результат: ' + result);
	inputData();

}

/* Функция, выполняющая вычитание операндов */
function calcMinus()
{
	result = Number(firstOp) - Number(secondOp);
	alert('Результат: ' + result);
	inputData();

}

/* Функция, выполняющая умножение операндов */
function calcMult()
{
	result = Number(firstOp) * Number(secondOp);
	alert('Результат: ' + result);
	inputData();

}

/* Функция, выполняющая деление операндов */
function calcDiv()
{
	result = Number(firstOp) / Number(secondOp);
	alert('Результат: ' + result);
	inputData();

}

/* Функция, выполняющая деление с остатком операндов */
function calcDiv2()
{
	result = Number(firstOp) % Number(secondOp);
	alert('Результат: ' + result);
	inputData();

}


/*Вызов функций на исполнение*/
inputData();