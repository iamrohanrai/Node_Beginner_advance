/*
1.write a while loop that calculates the sum of all number from 1 to 5 and store the result
*/

let sum = 0;
let i = 1;
while (i <= 5) {
  sum += i;
  i++;
}
console.log(sum);

/*
2. write a while loop that counts down from 5  to 1 and store the number in a array
*/
let countdown = [];
let j = 5;
while (j >= 1) {
  countdown.push(j);
  j--;
}
console.log(countdown);

/*
3. write a do while loop that prompts a user to enter their favourite tea type until enter stop
store each tea type in a array named  teacollection.
*/
// let teaCollection = [];
// let tea;
// do {
//   tea = prompt(`Enter your favourite Tea (type "stop to finish") `);
//   if (tea !== "stop") {
//     teaCollection.push(tea);
//   }
// } while (tea !== "stop");

/*
4. write a do while loop that adds number from 1 to 3 and stores the result in a vairable named total
*/
let total = 0;
let k = 1;
do {
  total += k;
  k++;
} while (k <= 3);
console.log(total);

/*
5. write a for loop that multiplies  each element in the array and stores the result in a new array named multipliedarray
*/
let array = [2, 4, 6];
let multipliedarray = [];
for (let i = 0; i < array.length; i++) {
  multipliedarray.push(array[i] * 2);
}
console.log(multipliedarray);

/*
6. write a for loop that lists all the cities in the array ["paris","new york","tokyo","london"] and stores each city in a new array name "citylist"
*/
let cities = ["paris", "new york", "tokyo", "london"];
let citylist = [];
for (let i = 0; i < cities.length; i++) {
  citylist.push(cities[i]);
}
console.log(citylist);
