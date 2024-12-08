const arr1 = [1, 2, 3];
const arr2 = arr1.map(function(item) {
return item * 2;
});
console.log(arr2);
const arr3 = arr1.map(item => item * 2);
console.log(arr3);