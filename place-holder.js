
// function for product buttn 
function productBtn(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => allData(data))


}
const showResult = document.getElementById("show-result");
function allData(productData){
    for(const product of productData){
        console.log(product)
//     //     const emailId = product.name;
        const div = document.createElement('div');
        div.classList.add('ms-5')
        div.innerHTML = `
            Name: ${product.username} idNum:${   product.id}
            Email : ${product.email}
        `  
        showResult.appendChild(div);   
    }
     
}
