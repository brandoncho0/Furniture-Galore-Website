// Quantity
const plus = document.querySelector(".plus"),
minus = document.querySelector(".minus"),
num = document.querySelector(".num");

let a = 1;
                
plus.addEventListener("click", ()=>{
    a++;
    num.innerText= a;
    console.log(a);
})

minus.addEventListener("click", ()=>{
    if (a > 1){
        a--;
        num.innerText= a;
        console.log(a);
        }  
})