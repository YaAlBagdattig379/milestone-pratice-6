
// function for product buttn 
function productBtn(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => console.log(data))


}
const container = document.getElementById("show-result");

function allData(users){
    // idNumbers.forEach(function(number){
    //     newIdNums.push(number / 2);
    // }
    // console.log(users)
    for(const user of users){
        console.log(user)
    }
    // usersData.forEach(user => {
    //     console.log(user)
    // });
//     for(const product of productData){
//         console.log(product)
// //     //     const emailId = product.name;
//         const div = document.createElement('div');
//         div.classList.add('ms-5')
//         div.innerHTML = `
//             Name: ${product.username} idNum:${   product.id}
//             Email : ${product.email}
//         `  
//         showResult.appendChild(div);   
//     }
     
}
