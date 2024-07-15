// "" 
// function age(a){
//     if(a<=12){
//         console.log("child");
//     }
//     else if(a>=13 && a<=19){
//         console.log("teenage");
//     }
//     else if(a>=20 && a<=59){
//         console.log("adult");
//     }
//         else{
//             console.log("senior");
//     }

// }
// age(48);


function number(n){
    for(n>0;n<=100;n++){
         if(n%3==0 && n%5==0){
            console.log("Fizz Buzz")}
    else if(n%3==0){
        console.log("Fizz")}
        else if(n%5==0){
            console.log("Buzz")
        }
        
        else{
            console.log(n)
        }
}
}
number(1);