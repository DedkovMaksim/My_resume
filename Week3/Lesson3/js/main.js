//  !  Методы массива
//  Массив - этоупорядоченный список элементов. Для того,чтобы облегчить разработчикам работу, многие рутинные задачи для каждого из типов данных были сохранены в стандартной библиотеке  JS  в виде методов.
//  С массивами чаще всего проделывают операции добавления и удаления элементов, именно для эти целей существуют методы push, pop, sshift, unshift, slice, splice.


// ! push/pop
//  Для добавления новых элементов в конец массива , есть специальный метод push, синтаксис которого выглядит так: названия_массива.push(новый_элемент)
// let arr = ['Harry','Ron','Draco','Hermione' , 42, 22, 10, ['hello','nice']]

// console.log(arr[2]);
// console.log(arr[arr.length - 1]);

// arr.push([13,6])
// arr.push(null)
// arr.push(11)
// arr.push('Hello')
// arr.push(true)
// arr.push(1,'tommy', {}, false, 42)
// arr.pop()
// arr.pop()
// arr.pop()
// arr.pop()
// let deletedElem = arr.pop()        // удаленные элементы можно сохранить
// console.log(deletedElem);
// console.log(arr);

// let arr = ['a', 'b','c','d','e']
// pop - вырезает элемент с конца массива
// arr.pop()
// push - добавляет элемент с конца массива
// arr.push()



//  ! Shift/unshift

// let arr = ['Harry','Ron','Draco','Hermione' , 42, 22, 10, ['hello','nice']]

// arr.unshift('Makers')
// arr.unshift(1,2,3,4)

// arr.shift()
// arr.shift()

// let deletedElem = arr.shift()
// console.log(deletedElem);
// console.log(arr);





//  ! slice/splice

//  Для того, чтобы работать в проивольнем участке массива используется такие методы как : slice и splice.



// !  slice
//  Метод slice  он копирует и возвращает новый массив, принимает в аргументы индексы - начальную позицию (с какого индексв начать) и конечную позицию( до какого элемента копировать, не включительно)

//  название_массива.slice(начало, конец)

// let fruits = ['apple','banana','peach','watermelon','pineapple']
// let result = fruits.slice(0,3)

// console.log(fruits);
// console.log(result);



// ! Splice
//  Метод splice более функциональный, так как он может удалять и заменять элементы в произвольной части массива. При этом метод splice изменяет изначальный массив.
//  название_массива.splice(индекс, кол-во элементов для удаления,элементы которые нужно вставить)

// let fruits = ['apple','banana','peach','watermelon','pineapple']
// console.log(fruits);
// let result = fruits.splice(1,3)

// console.log(result);
// console.log(fruits);




//  join / split / reverse


// ! join
//  С помощью метода join  можно обьединить все элементы массива в одну строку.
//  название_массива.join(соединитель)
//  В скобках метод наш принимает соединитель, который вставляется между отдельными элементами массива.

// let fruits = ['apple','banana','peach','watermelon','pineapple']
// let joinedString = fruits.join(' ')
// console.log(joinedString);

// ! split
//  Противоположным методу join является метод split(). Метод split() разбивает элементы строки в массив по указанному разделителю.
// название_строки.split(разделитель)

// let str = 'Makers first bootcamp in KG'
// let words = str.split('/')
// console.log(words);

// let date = '2021/10/06'
// let year = date.split('/')[0]
// let month = date.split('/')[1]
// let day = date.split('/')[2]

//  console.log(year);
//  console.log(month);
//  console.log(day);

//  ! reverse
//  Метод reverse переворачивает и меняет порядок элементов в обратную сторону.
// let arr = ['first', 'second','third']
// let reverseArr = arr.reverse()
// console.log(reverseArr);




//  Комбинация методов пример
//  let str = ' Hello my name is Tilek';
//  let str2 = str.split(' ').reverse().join(' ')
//  console.log(str2);