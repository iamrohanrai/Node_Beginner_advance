/*
1. write a function named makeTea that takes one parameter, 'typeofTea and return a string like "making green tea" when called with "green tea".
store the result in a variable named "teaOrder"
 */
function makeTea(typeofTea) {
  return `Making ${typeofTea}`;
}
let teaOrder = makeTea("ginger tea");
// console.log(teaOrder);

/*
2. create a function named 'orderTea' that takes one parameter , 'teaType'. inside this function create a another function named confirmOrder that return a message like "order confirmed for chai".
call "confirmOrder" from within "orderTea" and return the result
*/
function orderTea(teaType) {
  function confirmOrder() {
    return `Order confirmed for ${teaType}`;
  }
  return confirmOrder();
}
let orderConfirmation = orderTea("chai");
console.log(orderConfirmation);

/*
3. write a arrow function name calculateTotal that takes two parameters: "price and qunatity" the function should return the total cost by multiplying the price and quantity store the result in a variable named totalCost
*/
let calculateTotal = (price, quantity) => {
  total = price * quantity;
  return total;
};
let totalCost = calculateTotal(5, 50);
console.log(totalCost);

/*
4. write a function named "processTeaOrder" that takes another function "makeTea" as a parameter and calls it witht the argument "earl grey"
return the result of "makingTea"
*/
function makeTea(typeofTea) {
  return `Makingtea ${typeofTea}`;
}

function processTeaOrder(fn) {
  return fn("earl grey");
}
let order = processTeaOrder(makeTea);
console.log(order);

/*
5. write a function named "createTeaMaker" that returns another function, the returned function should rake one parameter, "teaType" and return a message like "making green tea".
store the returned function in a variable named "teaMaker" and call it with "green tea"
*/
function createTeaMaker(name) {
  console.log(name);

  return function (teaType) {
    return `Making ${teaType}`;
  };
}
let teaMaker = createTeaMaker("rohan");
console.log(teaMaker("green tea"));
