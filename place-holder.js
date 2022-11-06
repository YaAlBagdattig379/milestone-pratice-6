// const boudi = {  money: 200 }
// const boudi2 = { money: 200 }
// if(JSON.stringify(boudi) ===JSON.stringify(boudi2)){
// to get info 
fetch('https://jsonplaceholder.typicode.com/users')
.then(res => res.json())
.then(data => console.log(data))
// function for input button 
function productBtn(){
    const inputProduct = document.getElementById("input-product");
    const productValue = inputProduct.value;
    inputProduct.value = '';
    console.log(productValue);
}
