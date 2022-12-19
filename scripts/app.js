const headElem = document.getElementById("head");
const buttonsElem = document.getElementById("buttons");
const pagesElem = document.getElementById("pages");

//Класс, который представляет сам тест
class Quiz
{
	constructor(type, questions, results)
	{
		//Тип теста: 1 - классический тест с правильными ответами, 2 - тест без правильных ответов
		this.type = type;

		//Массив с вопросами
		this.questions = questions;

		//Массив с возможными результатами
		this.results = results;

		//Количество набранных очков
		this.score = 0;

		//Номер результата из массива
		this.result = 0;

		//Номер текущего вопроса
		this.current = 0;
	}

	Click(index)
	{
		//Добавляем очки
		let value = this.questions[this.current].Click(index);
		this.score += value;

		let correct = -1;

		//Если было добавлено хотя одно очко, то считаем, что ответ верный
		if(value >= 1)
		{
			correct = index;
		}
		else
		{
			//Иначе ищем, какой ответ может быть правильным
			for(let i = 0; i < this.questions[this.current].answers.length; i++)
			{
				if(this.questions[this.current].answers[i].value >= 1)
				{
					correct = i;
					break;
				}
			}
		}

		this.Next();

		return correct;
	}

	//Переход к следующему вопросу
	Next()
	{
		this.current++;

		if(this.current >= this.questions.length)
		{
			this.End();
		}
	}

	//Если вопросы кончились, этот метод проверит, какой результат получил пользователь
	End()
	{
		for(let i = 0; i < this.results.length; i++)
		{
			if(this.results[i].Check(this.score))
			{
				this.result = i;
			}
		}
	}
}

//Класс, представляющий вопрос
class Question
{
	constructor(text, answers)
	{
		this.text = text;
		this.answers = answers;
	}

	Click(index)
	{
		return this.answers[index].value;
	}
}

//Класс, представляющий ответ
class Answer
{
	constructor(text, value)
	{
		this.text = text;
		this.value = value;
	}
}

//Класс, представляющий результат
class Result
{
	constructor(text, value)
	{
		this.text = text;
		this.value = value;
	}

	//Этот метод проверяет, достаточно ли очков набрал пользователь
	Check(value)
	{
		if(this.value <= value)
		{
			return true;
		}
		else
		{
			return false;
		}
	}
}

//Массив с результатами
const results =
[
	new Result("Пора в школу на урок географии", 0),
	new Result("Учитель будет тобой доволен", 30),
	new Result("Нормально. Но надо еще поучиться", 40),
	new Result("Идеально. Ты гуру!!!", 43)
];

//Массив с вопросами
const questions =
[


new Question("Столица Нигерии ",
	[
		new Answer("Лагос", 0),
		new Answer("Кано", 0),
		new Answer("Абуджа", 1),
		new Answer("Бенин-Сити", 0)
	]),

	new Question("Столица Эфиопии ",
	[
		new Answer("Назрет", 0),
		new Answer("Аддис-Абеба", 1),
		new Answer("Гондэр", 0),
		new Answer("Бахр-Дар", 0)
	]),

	new Question("Столица Ганы ",
	[
		new Answer("Аккра", 1),
		new Answer("Кумаси", 0),
		new Answer("Тамале", 0),
		new Answer("Болгатанга", 0)
	]),

	new Question("Столица Алжира ",
	[
		new Answer("Оран", 0),
		new Answer("Константина", 0),
		new Answer("Джельфа", 0),
		new Answer("Алжир", 1)
	]),

	new Question("Столица Испании ",
	[
		new Answer("Лиссабон", 0),
		new Answer("Барселона", 0),
		new Answer("Мадрид", 1),
		new Answer("Валенсия", 0)
	]),

	new Question("Столица ОАЭ ",
	[
		new Answer("Шарджа", 0),
		new Answer("Эль-Айн", 0),
		new Answer("Дубай", 0),
		new Answer("Абу-Даби", 1)
	]),

	new Question("Столица Беларуси ",
	[
		new Answer("Брест", 0),
		new Answer("Кельн", 0),
		new Answer("Минск", 1),
		new Answer("Братислава", 0)
	]),

	new Question("Столица Греции ",
	[
		new Answer("Салоники", 0),
		new Answer("Афины", 1),
		new Answer("Дрезден", 0),
		new Answer("Лимассол", 0)
	]),

	new Question("Столица Хорватии ",
	[
		new Answer("Загреб", 1),
		new Answer("Приштина", 0),
		new Answer("Бухарест", 0),
		new Answer("Будапешт", 0)
	]),

	new Question("Столица Казахстана ",
	[
		new Answer("Нур-Султан", 0),
		new Answer("Астана", 1),
		new Answer("Экибастуз", 0),
		new Answer("Алма-Ата", 0)
	]),

new Question("Столица Парагвая ",
	[
		new Answer("Ла-Паз", 0),
		new Answer("Кордоба", 0),
		new Answer("Асунсьон", 1),
		new Answer("Мендоса", 0)
	]),

new Question("Столица Туркменистана ",
	[
		new Answer("Ашхабад", 1),
		new Answer("Туркменбашы", 0),
		new Answer("Тукменабад", 0),
		new Answer("Полторацк", 0)
	]),

new Question("Столица Ирака ",
	[
		new Answer("Эрбиль", 0),
		new Answer("Киркук", 0),
		new Answer("Багдад", 1),
		new Answer("Басра", 0)
	]),

new Question("Столица Азербайджана ",
	[
		new Answer("Шеки", 0),
		new Answer("Агдаш", 0),
		new Answer("Сабирабад", 0),
		new Answer("Баку", 1)
	]),

	new Question("Столица Черногории ",
	[
		new Answer("Сараево", 0),
		new Answer("Подгорица", 1),
		new Answer("Тирана", 0),
		new Answer("Вадуц", 0)
	]),

	new Question("Столица Лихтенштейна ",
	[
		new Answer("Монако", 0),
		new Answer("Берн", 0),
		new Answer("Вадуц", 1),
		new Answer("Валетта", 0)
	]),

	new Question("Столица Монако ",
	[
		new Answer("Солнце", 0),
		new Answer("Лондон", 0),
		new Answer("Монако", 1),
		new Answer("Брест", 0)
	]),

	new Question("Столица Нидерландов ",
	[
		new Answer("Роттердам", 0),
		new Answer("Глазго", 0),
		new Answer("Амстердам", 1),
		new Answer("Утрехт", 0)
	]),

	new Question("Столица Франции ",
	[
		new Answer("Лиль", 0),
		new Answer("Париж", 1),
		new Answer("Нант", 0),
		new Answer("Монпелье", 0)
	]),

	new Question("Столица Швейцарии ",
	[
		new Answer("Берн", 1),
		new Answer("Базель", 0),
		new Answer("Лозанна", 0),
		new Answer("Брюгге", 0)
	]),

	new Question("Столица Венгрии ",
	[
		new Answer("Дебрецен", 0),
		new Answer("Будапешт", 1),
		new Answer("Дьер", 0),
		new Answer("Кечкемет", 0)
	]),

	new Question("Столица Мали ",
	[
		new Answer("Сикасо", 0),
		new Answer("Бамако", 1),
		new Answer("Каес", 0),
		new Answer("Мопти", 0)
	]),

new Question("Столица Центральноафриканской Республики ",
	[
		new Answer("Бимбо", 0),
		new Answer("Мбаики", 0),
		new Answer("Берберати", 0),
		new Answer("Банги", 1)
	]),

	new Question("Столица Молдавии ",
	[
		new Answer("Тирасполь", 0),
		new Answer("Кахул", 0),
		new Answer("Бельцы", 0),
		new Answer("Кишинев", 1)
	]),

	new Question("Столица России ",
	[
		new Answer("Москва", 1),
		new Answer("Казань", 0),
		new Answer("Новосибирск", 0),
		new Answer("Нижний Тагил", 0)
	]),

	new Question("Столица Мальты ",
	[
		new Answer("Мальта", 0),
		new Answer("Рабат", 0),
		new Answer("Валетта", 1),
		new Answer("Биркиркара", 0)
	]),

	new Question("Столица Исландии ",
	[
		new Answer("Акурейри", 0),
		new Answer("Рейкьявик", 1),
		new Answer("Вадуц", 0),
		new Answer("Валетта", 0)
	]),

	new Question("Столица Норвегии ",
	[
		new Answer("Копенгаген", 0),
		new Answer("Осло", 1),
		new Answer("Тромсе", 0),
		new Answer("Лиллехаммер", 0)
	]),

	new Question("Столица Таиланда ",
	[
		new Answer("Таиланд", 0),
		new Answer("Бангкок", 1),
		new Answer("Паттайя", 0),
		new Answer("Пхукет", 0)
	]),

new Question("Столица Брунея ",
	[
		new Answer("Куала Белайт", 0),
		new Answer("Сериа", 0),
		new Answer("Бруней", 0),
		new Answer("Бандар-Сери-Бегаван", 1)
	]),

	new Question("Столица Латвии ",
	[
		new Answer("Рига", 1),
		new Answer("Вильнюс", 0),
		new Answer("Таллин", 0),
		new Answer("Юрмала", 0)
	]),

	new Question("Столица Германии ",
	[
		new Answer("Франкфурт", 0),
		new Answer("Мюнхен", 0),
		new Answer("Берлин", 1),
		new Answer("Ганновер", 0)
	]),

	new Question("Столица Ирландии ",
	[
		new Answer("Корк", 0),
		new Answer("Лимерик", 0),
		new Answer("Манчестер", 0),
		new Answer("Дублин", 1)
	]),

	new Question("Столица Гамбии ",
	[
		new Answer("Брикама", 0),
		new Answer("Бакау", 0),
		new Answer("Банжул", 1),
		new Answer("Ламин", 0)
	]),

	new Question("Столица Словакии ",
	[
		new Answer("Братислава", 1),
		new Answer("Кошице", 0),
		new Answer("Любляна", 0),
		new Answer("Жилина", 0)
	]),


		new Question("Столица Сент-Китс и Невис ",
		[
			new Answer("Антигуа", 0),
			new Answer("Бастер", 1),
			new Answer("Сент-Джонс", 0),
			new Answer("Сан-Хуан", 0)
		]),

		new Question("Столица Ливана ",
		[
			new Answer("Триполи", 0),
			new Answer("Хомс", 0),
			new Answer("Бейрут", 1),
			new Answer("Латакья", 0)
		]),

	new Question("Столица Иордании ",
	[
		new Answer("Амман", 1),
		new Answer("Бейрут", 0),
		new Answer("Дамаск", 0),
		new Answer("Табук", 0)
	]),

	new Question("Столица Турции ",
	[
		new Answer("Диярбакыр", 0),
		new Answer("Стамбул", 0),
		new Answer("Анкара", 1),
		new Answer("Анталья", 0)
	]),


	new Question("Столица Мадагаскара ",
	[
		new Answer("Малави", 0),
		new Answer("Манакара", 0),
		new Answer("Мадагаскар", 0),
		new Answer("Антананариву", 1)
	]),

	new Question("Столица Самоа ",
	[
		new Answer("Сува", 0),
		new Answer("Напи", 0),
		new Answer("Апиа", 1),
		new Answer("Тонга", 0)
	]),

	new Question("Столица Эритреи ",
	[
		new Answer("Кассала", 0),
		new Answer("Асмэра", 1),
		new Answer("Накфа", 0),
		new Answer("Митсива", 0)
	]),

	new Question("Столица Украины ",
	[
		new Answer("Монако", 0),
		new Answer("Нью Йорк", 0),
		new Answer("Киев", 1),
		new Answer("Львов", 0)
	]),

	new Question("Столица Люксембурга ",
	[
		new Answer("Монако", 0),
		new Answer("Люксембург", 1),
		new Answer("Варкен", 0),
		new Answer("Ремих", 0)
	]),

	new Question("Столица Литвы ",
	[
		new Answer("Каунас", 0),
		new Answer("Клайпеда", 0),
		new Answer("Рига", 0),
		new Answer("Вильнюс", 1)
	]),

	new Question("Столица Финляндии ",
	[
		new Answer("Турку", 0),
		new Answer("Лахти", 0),
		new Answer("Стокгольм", 0),
		new Answer("Хельсинки", 1)
	]),

	new Question("Столица Ватикана ",
	[
		new Answer("Ватикан", 1),
		new Answer("Берн", 0),
		new Answer("Осло", 0),
		new Answer("Прага", 0)
	]),

	new Question("Столица Боснии и Герцеговины ",
	[
		new Answer("Мостар", 0),
		new Answer("Сараево", 1),
		new Answer("София", 0),
		new Answer("Приштина", 0)
	]),

	new Question("Столица Андорры ",
	[
		new Answer("Андорра", 0),
		new Answer("Ла-Масана", 0),
		new Answer("Андорра-ла-Велья", 1),
		new Answer("Санта-Колома", 0)
	]),

	new Question("Столица Албании ",
	[
		new Answer("Белград", 0),
		new Answer("Тирана", 1),
		new Answer("Саранда", 0),
		new Answer("Берат", 0)
	]),

	new Question("Столица Португалии ",
	[
		new Answer("Лиссабон", 1),
		new Answer("Порту", 0),
		new Answer("Брага", 0),
		new Answer("Авейру", 0)
	]),

	new Question("Столица Сан-Марино ",
	[
		new Answer("Ватикан", 0),
		new Answer("Рим", 0),
		new Answer("Таллин", 0),
		new Answer("Сан-Марино", 1)
	]),

	new Question("Столица Чехии ",
	[
		new Answer("Брага", 0),
		new Answer("Прага", 1),
		new Answer("Бухарест", 0),
		new Answer("Скопье", 0)
	]),

	new Question("Столица Румынии ",
	[
		new Answer("Бухарест", 1),
		new Answer("Будапешт", 0),
		new Answer("Варшава", 0),
		new Answer("Любляна", 0)
	]),

	new Question("Столица Польши ",
	[
		new Answer("Краков", 0),
		new Answer("Познань", 0),
		new Answer("Вроцлав", 0),
		new Answer("Варшава", 1)
	]),

	new Question("Столица Болгарии ",
	[
		new Answer("Варна", 0),
		new Answer("София", 1),
		new Answer("Пловдив", 0),
		new Answer("Бургас", 0)
	]),

	new Question("Столица Великобритании ",
	[
		new Answer("Манчестер", 0),
		new Answer("Дублин", 0),
		new Answer("Лондон", 1),
		new Answer("Ливерпуль", 0)
	]),

	new Question("Столица Бельгии ",
	[
		new Answer("Брюгге", 0),
		new Answer("Брюссель", 1),
		new Answer("Нант", 0),
		new Answer("Гент", 0)
	]),

	new Question("Столица Австрии ",
	[
		new Answer("Вена", 1),
		new Answer("Клагенфурт", 0),
		new Answer("Инсбрук", 0),
		new Answer("Зальцбург", 0)
	]),

	new Question("Столица Дании ",
	[
		new Answer("Рейкьявик", 0),
		new Answer("Ольборг", 0),
		new Answer("Оденсе", 0),
		new Answer("Копенгаген", 1)
	]),

	new Question("Столица Швеции ",
	[
		new Answer("Гетеборг", 0),
		new Answer("Мальме", 0),
		new Answer("Стокгольм", 1),
		new Answer("Хельсинборг", 0)
	]),

	new Question("Столица Италии ",
	[
		new Answer("Милан", 0),
		new Answer("Рим", 1),
		new Answer("Наполи", 0),
		new Answer("Турин", 0)
	]),

	new Question("Столица Македонии ",
	[
		new Answer("Скопье", 1),
		new Answer("Тирана", 0),
		new Answer("Загреб", 0),
		new Answer("Подгорица", 0)
	]),

	new Question("Столица Сербии ",
	[
		new Answer("Кралево", 0),
		new Answer("Белград", 1),
		new Answer("Бухарест", 0),
		new Answer("Братислава", 0)
	]),

	new Question("Столица Словении ",
	[
		new Answer("Марибор", 0),
		new Answer("Копер", 0),
		new Answer("Сараево", 0),
		new Answer("Любляна", 1)
	]),

	new Question("Столица Эстонии ",
	[
		new Answer("Нарва", 0),
		new Answer("Пярну", 0),
		new Answer("Таллин", 1),
		new Answer("Вильнюс", 0)
	]),


];

//Сам тест
const quiz = new Quiz(1, questions, results);

Update();

//Обновление теста
function Update()
{
	//Проверяем, есть ли ещё вопросы
	if(quiz.current < quiz.questions.length)
	{
		//Если есть, меняем вопрос в заголовке
		headElem.innerHTML = quiz.questions[quiz.current].text;

		//Удаляем старые варианты ответов
		buttonsElem.innerHTML = "";

		//Создаём кнопки для новых вариантов ответов
		for(let i = 0; i < quiz.questions[quiz.current].answers.length; i++)
		{
			let btn = document.createElement("button");
			btn.className = "button";

			btn.innerHTML = quiz.questions[quiz.current].answers[i].text;

			btn.setAttribute("index", i);

			buttonsElem.appendChild(btn);
		}

		//Выводим номер текущего вопроса
		pagesElem.innerHTML = (quiz.current + 1) + " / " + quiz.questions.length;

		//Вызываем функцию, которая прикрепит события к новым кнопкам
		Init();
	}
	else
	{
		//Если это конец, то выводим результат
		buttonsElem.innerHTML = "";
		headElem.innerHTML = quiz.results[quiz.result].text;
		pagesElem.innerHTML = "Очки: " + quiz.score;
	}
}

function Init()
{
	//Находим все кнопки
	let btns = document.getElementsByClassName("button");

	for(let i = 0; i < btns.length; i++)
	{
		//Прикрепляем событие для каждой отдельной кнопки
		//При нажатии на кнопку будет вызываться функция Click()
		btns[i].addEventListener("click", function (e) { Click(e.target.getAttribute("index")); });
	}
}

function Click(index)
{
	//Получаем номер правильного ответа
	let correct = quiz.Click(index);

	//Находим все кнопки
	let btns = document.getElementsByClassName("button");

	//Делаем кнопки серыми
	for(let i = 0; i < btns.length; i++)
	{
		btns[i].className = "button button_passive";
	}

	//Если это тест с правильными ответами, то мы подсвечиваем правильный ответ зелёным, а неправильный - красным
	if(quiz.type == 1)
	{
		if(correct >= 0)
		{
			btns[correct].className = "button button_correct";
		}

		if(index != correct)
		{
			btns[index].className = "button button_wrong";
		}
	}
	else
	{
		//Иначе просто подсвечиваем зелёным ответ пользователя
		btns[index].className = "button button_correct";
	}

	//Ждём секунду и обновляем тест
	setTimeout(Update, 2000);
}
