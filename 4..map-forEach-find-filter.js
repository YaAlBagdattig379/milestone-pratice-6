//      discussed in here " Map , forEach , find , filter "


/**************************1...Use of 'Map' ************************
 * 'map' sadharonoto use hoi kono ekta array er upor function hisabe,,,,j kono eka kichu korbe hote pare modify tar por notun ekta extra array automaically created kora hobe by Map. oi tate modify er data gulo rakhbe.
 dara  korle array theke
*/
// use of map onto array 
const studentsRoll = [22,44,66,2,23,45,34];
// const allRolls = studentsRoll.map(function(eachRoll){ //normal function
const allRolls = studentsRoll.map((eachRoll) => {     // array function are used.
    const each = eachRoll / 1;
    return each / 7;
})
// console.log(`this is old array :-`,studentsRoll);
// console.log('this is new array created by Map :- ',allRolls);






/***********************2...Use of 'forEach for beginner'*************************
 *  'forEah' ..
 */
const idNumbers = [32,63,745,22,65,23,12];
const newIdNums = [ ];
// idNumbers.forEach(function(number){
idNumbers.forEach(function(number){
    newIdNums.push(number / 2);
    // console.log(number);
})
// console.log(`newIdNums is :-`,newIdNums) // ei tate sob notun 'newIdNums'







/***********************3...Use of 'find for beginner'*************************
 *  'find' eta diye jeta condition er moto result nibe index 0 > 1 > 2 > evabe
  jate thakebe jeitai boro hobe oitai cath korebe mane particular element , ebond seti 'number' and second indexNum korle indexElement pabe,,arr korle pura arry pabe....
 */
const rollNums = [32,63,745,22,65,23,12];
// idNumbers.forEach(function(number){
let newId = idNumbers.find(function(number,indexNum,arr){
    // console.log(indexNum)
    // console.log(arr)
       return number > 64;
})
// console.log(`rollNums is :-`,newId)
/**
op->>> newId : - 745
op->>> index:- 2
op->>> arr:-[
  32, 63, 745, 22,
  65, 23,  12
]
*/  //        




/***********************4...Use of 'filter for beginner'*************************
 *  'filter' eta diye ek ek kore check kore pawa jai ...
 */
 const filerNums = [117,3,13,35,22,15,20,12];
 // idNumbers.forEach(function(number){
 let filterArr = filerNums.filter(function(currentIdex){
        return currentIdex > 10;
 })
 console.log(`fillterNums is :-`,filerNums) // ager arr kono rokom change hoina.
 console.log(`fillterArr is :-`,filterArr) // ekhane 10 er beshi index num gulo thakbe
