// 1. Write a function to print all prime numbers between 1 to 100.


function prime(range1,range2){
    for(;range1<=range2;range1++){
        for(i=2;i<range1;i++){
            if(range1%i==0){
                break;
            }
        }
        if(range1==i){
            console.log(range1);
        }
    }
}

prime(1,100);

// 2. Write a basic Javascript program to print below statement in console.
// If even number : output should be “fizz”
// If odd number : output should be “buzz”

function fizzbuzz(n){
    if(n%2==0){
        console.log("fizz");
    }
    else{
        console.log("buzz");
        
    }
}

fizzbuzz(6);
fizzbuzz(3);

//3. Write a program to remove the letter ‘a’ and ‘e’ from the string.

function removeLetter(s){
    remove='';
    for(i of s){
        if(i!='a' && i!='e'){
            remove+=i;
        }
    }
    console.log(remove);
    
}

 removeLetter("France");