//task 1
let admin;
let guest;
guest = "John";
admin = guest;
console.log(admin);

//task 2
for(let i = 1; i<= 100; i++){
    console.log(i);  
}
//task 3
min = (a,b) =>{
    if(a<b){
        return a;
    }else{
        return b;
    }
    
}
console.log(min(2,5))
//task 4
let arr =[]
for(let i = 1; i <= 100; i++){
    arr.push(i);
}
for(let i = 0; i< arr.length; i++){
    if(arr[i]%3===0 && arr[i]%5 === 0)
    {
        console.log ("FizzBuzz");
    }  
    else if(arr[i] % 3=== 0){
      console.log("Fizz");
    }
    else if(arr[i] %5 === 0){
        console.log("Buzz");
    }
    else {
        console.log(arr[i])
    }
    
        
    }