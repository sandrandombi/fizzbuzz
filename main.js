
function fizzBuzz(i){
     // s/comparé si la valeur d'argument i est divisible par 3 et en mm tps par 5--------------
    if (i % 3 === 0 && i % 5 === 0){
        console.log(i + " => fizzbuzz");
       //comparer si la valeur de l'argument "i" est divisible par 3 ou contient le chiffre 3 ------------
    }else if(i % 3 === 0 || i.toString().includes ("3")){
        console.log(i + " =>fizz" );
       //comparer si la valeur de l'argument "i" est divisible par 5 ou contient le chiffre 5 ---------------- 
  }else if(i % 5 === 0 || i.toString().includes("5")){
         console.log(i + " => buzz" );
        //si la valeur de l'argument n'est ni divisible par 3 ni par 5 et ne contient ni le 3 et ni 5-------------     
 }else
 console.log (i + " =>"+i)
}

for(let j=1; j<=100; j++){
    fizzBuzz(j)
}



// for (let i = 0; i <= 100; ++i) {
//     console.log( ++i )
//     // s/comparé si la valeur d'argument i est divisible par 3 et en mm tps par 5
//     if (i % 3 === 0 && i % 5 === 0){
//         console.log("fizzbuzz")
//     //comparer si la valeur de l'argument "i" est divisible par 3 ou contient le chiffre 3
//     }else if(i % 3 == 0){
//         console.log( "fizz" )
//         //comparer si la valeur de l'argument "i" est divisible par 5 ou contient le chiffre 5    
//   }else if(i % 5 == 0){
//          console.log( "buzz" )
//      //si la valeur de l'argument n'est ni divisible par 3 ni par 5 et ne contient ni le 3 et ni 5    
//  }else
//  console.log (i)
// }
