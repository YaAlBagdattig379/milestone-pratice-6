// arrow function example
///..1 example normal without parameter
const Costs = () =>  89;

const totalSpends = Costs();
console.log(totalSpends);// op >>> 89


///..2 example  with single parameter and divisition by 7
const foodCosts = (num) => num / 7;

const costs = foodCosts(63);
console.log(costs); // op >>> 9



///..3 example  with double parameter and divisition by 2 and return the result
const shoppingCost = (eCommidites,cosmatics) =>{
    const totalCosts = eCommidites + cosmatics;
    return totalCosts / 2;

}
const expenses = shoppingCost(200,50);
console.log(expenses); // op >>> 125