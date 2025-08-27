/*
1. write a for loop that loops through the array green tea, black tea, chai, oolong tea and stops the loops when it finds chai.
store all the teas before "chai" in a new array named selectedTeas
*/
let teas = ["green tea", "black tea", "chai", "oolong tea"];
let selectedTeas = [];
for (let i = 0; i < teas.length; i++) {
  if (teas[i] === "chai") {
    break;
  }
  selectedTeas.push(teas[i]);
}
// console.log(selectedTeas);

/*
2. write a for loop that loops through the array "london", "newyork", "paris", "berlin" and skips "paris".
store the other cities in a new array named visitedCities
*/
let cities = ["london", "newyork", "paris", "berlin"];
let visitedCities = [];
for (let i = 0; i < cities.length; i++) {
  if (cities[i] === "paris") {
    continue;
  }
  visitedCities.push(cities[i]);
}
// console.log(visitedCities);

/*
3. use a for-of loop to iterate through the array [1,2,3,4,5] and stops when the number 4 is found store the numbers before 4 in a array named "smallnumbers"
*/
let numbers = [1, 2, 3, 4, 5];
let smallNumbers = [];
for (const num of numbers) {
  if (num === 4) {
    break;
  }
  smallNumbers.push(num);
}
// console.log(smallNumbers);

/*
4. use a for-of loop to iterate through the array ["chai","green tea", "herbal tea", "black tea"] and skip herbal tea
store the other teas in an array named "preferredTeas"
*/
let teass = ["chai", "green tea", "herbal tea", "black tea"];
let preferredTeas = [];
for (const tea of teass) {
  if (tea === "herbal tea") {
    continue;
  }
  preferredTeas.push(tea);
}
// console.log(preferredTeas);

/*
5. use a for -in loop to loop through an object containing city populations.
stop the loop when the population of "berlin" is found and store all previous population in a new object named "cityPopulation".
*/
let citiesPopulation = {
  london: 890000,
  "new york": 840000,
  paris: 220000,
  berlin: 350000,
};
let cityPopulation = {};
for (const cityKey in citiesPopulation) {
  if (cityKey === "berlin") {
    break;
  }
  // key = value
  cityPopulation[cityKey] = citiesPopulation[cityKey];
}
console.log(cityPopulation);

/*
6. use a for-in loop to loop through an object containing city populations.
skip any city with a population below 3 million and store the rest in a new object named "largeCities"
*/
let worldCities = {
  sydney: 5000000,
  tokyo: 9000000,
  berlin: 350000,
  paris: 2200000,
};
let largeCities = {};
for (const city in worldCities) {
  if (worldCities[city] < 3000000) {
    continue;
  }
  largeCities[city] = worldCities[city];
}
console.log(largeCities);

/*
7. write a forEach loop that iterates through the array ["ear grey", "green tea", "chai", "oolong tea"] stop the loop when chai is found and store previous
*/
let teaCollection = ["ear grey", "green tea", "chai", "oolong tea"];
let availableTea = [];
let flag = false;
teaCollection.forEach((tea) => {
  if (tea === "chai") {
    flag = true;
  }
  if (!flag) {
    availableTea.push(tea);
  }
});
console.log(availableTea);

/*
8. write a forEach loop that iterates through the array ["berlin", "tokyo", "sydney", "paris"].
skip "sydney" and stores the other cities in a new array named "traveledCities"
*/
let cityy = ["berlin", "tokyo", "sydney", "paris"];
let traveledCities = [];
cityy.forEach((elementOfcityy) => {
  if (elementOfcityy === "sydney") {
    return;
  }
  traveledCities.push(elementOfcityy);
});
console.log(traveledCities);

/*
9. write a for loop that iterates through the array [2,5,7,9]
skip the value 7 and multiply the rest by 2. store the result in a new array named doubledNumbers
*/
let number = [2, 5, 7, 9];
let doubledNumbers = [];
for (let i = 0; i < number.length; i++) {
  if (number[i] === 7) {
    continue;
  }
  doubledNumbers.push(number[i] * 2);
}
console.log(doubledNumbers);

/*
10. use a for of loop to iterate through the array ["chai", "green tea", "black tea", "jasmine tea", "herbal tea"]
and stops when the length of the current tea name is greater than 10.
store the teas iterated over in an array named "shortTeas"
*/
let teaas = ["chai", "green tea", "black tea", "jasmine tea", "herbal tea"];
let shortTeas = [];
for (const tea of teaas) {
  if (tea.length > 10) {
    break;
  }
  shortTeas.push(tea);
}
console.log(shortTeas);
