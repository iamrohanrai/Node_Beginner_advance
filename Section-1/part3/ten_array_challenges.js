/*
1. Declare an array names "teaflavours" that contains the string "green tea", "black tea","oolong tea".
access the first element and store it in a variable named "firstTea"
*/
let teaflavours = ["green tea", "black tea", "oolong tea"];
let firstTea = teaflavours[0];

/*
2. Declare an array named "cities" containing "london", "tokoyo", "paris", "new york"
access the third element and store it
*/
let cities = ["london", "tokyo", "paris", "new york"];
let favouriteCity = cities[2];

/*
3. You have an array named "teaTypes" containing "herbal tea", "white tea", "masala chai".
change the second element of the array to jasmine tea
*/
let teaTypes = ["herbal tea", "white tea", "masala chai"];
teaTypes[1] = "jasmine tea";
// console.log(teaTypes);

/*
4. Declare an array name "citiesVisited" containing "mumbai" and "sydney"
add "berlin" to the array using push method
*/
let citiesVisited = ["mumbai", "sydney"];
citiesVisited.push("berlin");
// console.log(citiesVisited);

/*
5. you have an array named "teaOrders" with "chai", "iced tea", "matcha", "earl tea"
remove the last element of the array using pop method and store it in another variable
*/
let teaOrders = ["chai", "iced tea", "matcha", "earl tea"];
let lastOrder = teaOrders.pop();
// console.log(teaOrders);
// console.log(lastOrder);

/*
6. you have an array named "popularTeas" containing "green tea", "oolong tea" and chai
create a soft copy of this array named "softCopyTeas"
*/
let popularTeas = ["green tea", "oolong tea", "chai"];
let softCopyTeas = popularTeas;
// popularTeas.pop();
// console.log(popularTeas);
// console.log(softCopyTeas);

/*
7. You have an array named "topCities" containing "berlin", "singapore", and "newyork",
create a hardcopy of this array named "hardCopyCities"
*/
let topCities = ["berlin", "singapore", "newyork"];
let hardCopyCities = [...topCities];

// method - 2
let hardCopyCitiesSecondMethod = topCities.slice();

// topCities.pop();
// console.log(topCities);
// console.log(hardCopyCities);

/*
8. you have two array: "europeanCities" containing "paris" and "rome" and "asianCities" containing "tokyo" and "bangkok".
merge these two array into new array
*/

let europeanCities = ["paris", "rome"];
let asianCities = ["tokyo", "bangkok"];
let worldCity = europeanCities.concat(...asianCities);
// asianCities.pop();
// console.log(worldCity);
// console.log(asianCities);

/*
9. you have an array named "teaMenu" containing "masala chai", "oolong tea", "green tea" and "earl grey"
find the length of the array it in menuLength
*/
let teaMenu = ["masala chai", "oolong tea", "green tea", "earl grey"];
let menuLength = teaMenu.length;

/*
10.  you have an array name "cityBucketlist" containg "tokyo", "london", "capetown", and vancouver.
check if "london is in or not and store the result"
*/
let cityBucketlist = ["tokyo", "london", "capetown", "vancouver"];
let isLondonInList = cityBucketlist.includes("london");
console.log(isLondonInList);
