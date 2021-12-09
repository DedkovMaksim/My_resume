// ! операторысравнения
// с помощью операторов сравнения js можно сравнивать значения двух и более объектов

/*
> - больше чем
< - меньше чем
>= - больше или равно
<= - меньше или равно
== - нестрогое равенство
=== - строгое равенство
!= - нестрогое неравенство
!== - строгое неравенство
*/ 

// console.log('54' < 55); true
// console.log('54r' < 55);

// основные правила по true/false
// console.log(Boolean('hello')); //любаястрока возвращает true
// console.log(Boolean(''));//пустая строка возвращает false
// console.log(Boolean(' ')); // пробел внутри кавычек возвращает true

// console.log(Boolean(42)); // любое положительное число возвратит true
// console.log(Boolean(0)); // нол имеет значение false
// console.log(Boolean(-41)); // льбое отрицательное число возвращает true

// console.log(Boolean({})); // возвращает true
// console.log(Boolean([])); // возвращает true

// console.log(Boolean(null)); //возврящает false
// console.log(Boolean(undefined)); //возврящает false


// ! логические операвторы
// 
// в js существуют следующие логические операторы: || (ИЛИ), && (И), ! (НЕ). С помощбю лог операторов мы можем выявить  являются ли все выражения истиной,лобо хотя бычасть выраженияявляеться истинным, лобо является ли выражение противоположным каккому- лобо значению. Лог операторы позволяют программе принимать решение на основе нескольких условий.

// let age = 20;
// console.log(age > 18);

// ! && - логический оператор И. для него вfжно чтобы оба сравневаемых элемента возвращали true
// console.log(age > 18 && age < 30);

// console.log(Boolean (' ' && 'hello' && -23 && 'as'));


// ! Логический оператор ИЛИ ||  для лог оператора ИЛИ достаточно того, чтобы хотябы одно из перечисленных условий было истинным(те возвращало true)

// let age = 19;
// console.log(age > 21 || age > 18);
// console.log(false || true);

// console.log(56 || 0 || 'hello'); // возвратит56, так это первое значение которое true

// let isAdmin = false
// let name = 'Alex'

// let result = isAdmin || name
// console.log(result);


// ! логический оператор ! НЕ. Оператор !, означаещий НЕ сначала приводит аргумент в логическому типу true/false, затем возвращает противоположное значение.
// console.log(!true);
// console.log(!0);


// ! условные операторы
//  условное ветвление if...else...else if
// длятого, чтонаш код не просто возвращал true/false, А МЕНЯЛСВОЕ ПОВЕДЕНИЕ И ПРОИЗВОДИЛ ОПРЕДЕЛЕНЫЕ ДЕЙСТВИЯ В ЗАВИСИМОСТИ ОТ УСЛОВЫЙ, надо использовать условное ветвление. Это спец контрукция, с помощью которой мы можем производить проверку условий (ий) и запускать определеный код

// Синтаксис:

/* 
if(условие){
    код,если условие true
}else{
    код2
}
*/ 

// let num1 = 50;
// let num2 = 100;
// if(num1 < num2){
    // если число num1 меньше числа num2, сработает данный код
//     alert(`${num1} меньше чем ${num2}`)
// }else{
    // влюбом другом случае сработает блок else
//     alert(`${num1} больше чем ${num2}`)

// }

// let num1 = 50;
// let num2 = 100;

// if( num1 < num2){
//     alert(`${num1} меньше чем ${num2}`)
// }else if(num1 == num2){
//     alert('числа равны')
// }else{
//     alert(`${num1} больше чем ${num2}`)
// }


// let answer = prompt('Who are you?')
// let correctPassword = 'qwerty123'

// if(answer == 'user'){
//     letanswer1 = prompt('Enter your name')
//     console.log(answer1);
// }else if(answer == 'admin'){
//     console.log('welcome');
// }else if(answer == 'staff'){
//     let password = prompt('enter the password')
//     if(password ==correctPassword){
//         console.log('Welcomemy dear dev');
//     }else{
//         console.log('not allowed');
//     }
// }else {
//     console.log('please sing up');
// }



// ! Switch Case
// конструкция switch заменяет собойсразунесколько else if. она представляет собойболее наглядныйспособ сравнить выражение сразу несколькими вариантами. Switch удобно использовать когда поведение вашей программы меняется от разных значенийодногои тойже переменной.
// Синтаксис
/*
switch(переменная){
    case значение1:
        код
        break
    case значение2:
        код
        break
    ...
    deafault:
    код
}
*/ 

// let dayOfWeek = 7;
// switch(dayOfWeek){
//     case 1:
//         console.log('Monday');
//         break;
//     case 2:
//         console.log('Tuesday');
//         break;
//     case 3:
//         console.log('Wednesday');
//         break;
//     case 4:
//         console.log('Thursday');
//         break;
//     case 5:
//         console.log('Friday');
//         break;
//     case 6:
//         console.log('Saturday');
//         break;
//     case 7:
//         console.log('sunday');
//         break;
//     default:
//         console.log('No such day of week');
// }



// ! тернарный оператор
// тернарный оператор используется для того,чтобы условное ветвление написать в одну строчку. его удобно использовать когда нам нужно проверить только одноусловие, и изменить поведение нашейпрограмы в зависимостиот того соблюдено ли указанное условие.
// Синтаксис
// услловие ? действие1 : иначе другое действие

// let age = 20;
// let canDrive;

// age > 16 ? canDrive = true : canDrive = false
// console.log(canDrive);

// let speed = 19;
// let messege = speed >= 110? 'toofast' : speed < 109 && speed > 30 ? 'good' : speed < 20 ? 'too slow' : 'ok'

// console.log(messege);

