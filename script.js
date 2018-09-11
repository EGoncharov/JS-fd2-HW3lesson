var arr = [1,2,3,4,5,6,7];
console.log(arr);
function change(a,b) {
	return b-a;
}
arr.sort(change);
console.log(arr);


// 3. Сгенерировать массив из N случайных целых чисел. 
// Поменять местами все элементы относительно середины массива по следующей схеме:
// Было [1,2,3,4,5,6,7], стало [5,6,7,4,1,2,3]. Создавать новые массивы нельзя.

var arr1 = []; // массив хранения значений
var start1 = 0; // значение старта отсчета 1
var end1 = 10; // значение конечного значение 9
for (var i=0 ; i<end1 ; i++) {
	arr1.push(Math.floor(Math.random()*( start1-end1+1 )) +end1);
}
console.log(arr1)


// 4. Сгенерировать массив из N случайных целых чисел. 
// Поменять местами все элементы относительно середины массива по следующей схеме:
// Было [1,2,3,4,5,6,7,8,9], стало [4,3,2,1,5,9,8,7,6]. Создавать новые массивы нельзя.

var arr2 = []; // массив хранения значений
var start2 = 0; // значение старта отсчета 1
var end2 = 10; // значение конечного значение 9
for (var i=0 ; i<end2 ; i++) {
	arr2.push(Math.floor(Math.random()*( start2-end2+1 )) +end2);
}
console.log(arr2)


// 5. Реализовать функцию сравнения двух массивов на равенство, т.е. определить,
// что массивы имеют одинаковые элементы в одинаковой последовательности.

function areArraysEqual(a1, a2) {
    var i = a1.length;
    if ( a1 == undefined || a2 == undefined || i != a2.length) return false;
    while (i--) {
        if (a1[i] !== a2[i]) return false;
    }
    return true;
};
//Проверка
console.log(areArraysEqual([1,2,3], [1,4,5])); // false
console.log(areArraysEqual([1,2,3], [1,2,"3"])); // false
console.log(areArraysEqual([1,2,3], [1,2,3])); // true
console.log(areArraysEqual([], [])); // true
console.log(areArraysEqual([], null)); // false
