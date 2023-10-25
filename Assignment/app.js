

/*let num1 = parseFloat(prompt('enter first number'))
let num2 = parseFloat(prompt('enter second number'))
let num3 = parseFloat(prompt('enter Third number'))
let mean = (num1+num2+num3)/3
console.log(mean)

let compare1= parseFloat(12)
let compare2= parseFloat(6)
let result =compare1>compare2
let result1 =compare1<compare2
let result2 =compare1==compare2
console.log(result )
console.log(result1)
console.log(result2)


let Number1 = parseFloat(8)


let check=(Number1%2==0)
console.log(check) 


let firstval =7
let secondval=firstval
console.log(secondval) 


let variable1= 5
let variable2="5"

let resultofcomapre1= variable1==variable2
console.log(resultofcomapre1)

let resultofcomapre2= variable1===variable2
console.log(resultofcomapre2)*/



//assignment section 2


//Exercise 1

let Numberone = 5
let Nmubertwo=8
let NumberThree=9

let meanvalue=(Numberone+Nmubertwo,NumberThree)/3
console.log(meanvalue)


//Exercise 2: 
switch( 4){
        case 1:
           console.log("monday")
           break;
        case 2:
            console.log("Tuesday")   
            break;
        case 3:
             console.log("Wednessday")   
            break;  
        case 4:
             console.log("Thusday")   
            break;  
        case 5:
             console.log("Friday")   
            break;  
        case 6:
             console.log("saturday")   
             break; 
        case 7:
                console.log("Sunday")   
               break; 
      default:
                console.log("Days of the week are just 1-7")   
                    
}
 


//Exercise 3:
let i=0;

while(i<=10){
  
   let even= (i%2==0)
   console.log(even + " " + i )
  
i++;
}



// Exercise 4
let array =[ 2,4,6,5,8,10,11,12,14,15,18]



for(let i=0; i<=array.length; i++){
 if( array[i]%2==0){
     console.log("even "+ array[i])
   
    }else{
        console.log(" first odd number is "+ array[i])
     break;
    }
     
    
}


//Exercise 5

let age= 73;

if(age<=17){
    console.log("Is a child")
} else if( age>=18 && age<=40){
console.log("Adult")
} else{
    console.log("Senior")
}



