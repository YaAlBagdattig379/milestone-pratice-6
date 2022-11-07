const boudti = {
    name:'tunir maa',
    age: 35,
    money: 2500,
    weight: 50,
    color: 'medium',
    bestFriend:['tomalika','pomalika','monalika','nakalika'],
    favoriteBooks:{
        bookName:'Hero Alam er ',
        cover: 'plastic paper',
        price: 220
    },
    isRich: true,
    // method 
    boudtiParty: function(expense,drink,cigarete){
        this.money = this.money-expense - drink -cigarete;
        console.log(this)
        return this.boudti;
    }
  
}
const boudtirDayor = boudti.boudtiParty(500,200,100);
// console.log(boudtirDayor);  
// console.log(Object.keys(boudti));
// console.log(Object.values(boudti) );
// console.log(Object.entries(boudti) );