// выводит данные в консоль
// console.log('Hello JavaScript')

//  - однострочные комментарии
/* это многострочные комментарии

*/


// ! Переменная - это именованоне хранилище данных, в которых мыможем сохранять какую-либо информацию.

// как правильно задавать именна переменных
// 1) имя переменной должно содержать только буквы, цифры или символы $ и _
// 2) первый символ не должен быть цифрой и не должен начинаться с большой буквы.
// let example = 'пример использования ключевого слова let';
// const example2 = 'пример использования ключевого слова const';

// example = 'Всем привет изучаю javascript'
// example2 = 'не получиться перезаписать меня'
// console.log(example)
// console.log(example2)

// ! ТИПЫ ДАННЫХ
// 1 СТРОКА - string
// let str = 'vse privet "mir"';
// let str2 = '42';
// console.log(str, str2);

// 2. число - number
// let num = 42;
// let num2 = 12.3;
// console.log(num, num2);


// 3. boolean - true/false
// let bool1 = true;
// let bool2 = false;
// console.log(bool1, bool2);

// 4. undefined - неспециальная пустота
// let a
// console.log(a);

// 5. null - спецальная пустота
// let b = null;
// console.log(b);

// 6. object - неупорядоченная коллекция элементов. в обьекте даные храняться по типу ключ значения
// let obj = {
//     name: 'Leha',
//     age: 23,
//     'hobby': 'hiking',
//     isName: true,
//     dog: {
//         name: 'Bardos',
//         color: 'black'
//     }
// }

// console.log(obj.age);
// console.log(obj.dog.name);


// array- это упорядочкнная коллекция элементов.
// let arr = [1, 3, 4, 5, true, 'hello', {name: 'makers'}]
// console.log(arr);    
// console.log(arr.length);
// console.log(arr[5]);
// console.log(arr[0]);
// console.log(arr[arr.length-1]);

// concatenation-это слияние строк
// console.log(10+ '15');
// console.log('bootcamp' + ' makers');

// typeof - определяет тип данных проверяемых элементов
// let num = 42;
// console.log(`Переменная num относится к типу данных ${typeof num}`);

// console.log(typeof num);

// ! Операторы сравнения
// восклицательный знак ! означает Не
// console.log(6 != 5);

// нестрогое сравнение - проверяет на значение, все равно на тип данных 
// console.log(10 == '10');

// строгое сравнение - проверяет тип данных впервую очередь
// console.log(10 === 10);

// alert - всплывающее окно с текстом
// let welcome = 'hey! Welcome!'
// alert(welcome)

// prompt- всплывающее окно сполем ввода для пользователя, при нажатии на escили кнопку отмена, то возвратит null
// let response = prompt('how old are you?')
// console.log(response);

// confirm - диалоговоеокно свариатами ответа "ok" "отмена". приответе ok , возвратитtrue, при ответе отмена -faste
// let res = confirm('are you sure')
// console.log(res);

