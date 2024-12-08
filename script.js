//1.Write a function that takes a string and returns it reversed.

let h=document.getElementById('head')
let btn=document.getElementById('mybtn')
let btn1=document.getElementById('mybtn1')

// function reverse(str){

//    return str.split('').reverse().join('')
// }

// h.innerHTML=reverse("akshay")



//2.Create a function to check if a number is even or odd.

// function even_odd(num){

//     if(num%2==0){
//       return h.innerHTML='even'
//     } else{
//       return h.innerHTML='odd'
//     }
// }
// h.innerHTML=even_odd(19)



//3.Write a function to find the maximum number in an array.


// let arr=[10,20,30,40,5,200,500]

// function max(arr){

//    return Math.max(...arr)
// }

// h.innerHTML=max(arr)


//4.Create a function that finds the sum of all numbers in an array.

// let arr=[1,2,3,4,5,6,7,8,9,10]

// function sum(arr){
//    let arr1=0
//    for(const num of arr){
//       var sum1= arr1+=num
//    }
//    return sum1
// }

// h.innerHTML=sum(arr)

//5.Implement a function that takes a callback and calls it after 2 seconds.

// function display(){
//    setTimeout(function(){
//       h.innerHTML='akki'
//    },2000)
// }
// display()

//Q6. Write the JavaScript code to change the content and color of the HTML element below when we click button?
     
//   btn.addEventListener('click',()=>{
//    h.innerHTML="khushi shree"
//    h.style.color='red'
//   })


//Q7. Write a JavaScript program to calculate multiplication and division of two numbers (input from the user).  


// function multiplication(){

// let input1=parseInt(document.getElementById('inp1').value)
// let input2=parseInt(document.getElementById('inp2').value)

//     return input1 *  input2
// }

// btn.addEventListener('click',()=>{
//    h.innerHTML=multiplication()
// })

// function division(){
//    let input1=parseInt(document.getElementById('inp1').value)
// let input2=parseInt(document.getElementById('inp2').value)

//     return input1 / input2
// }
// btn1.addEventListener('click',()=>{
//    h.innerHTML=division()
// })


//Q8. Write a Java Script Program to create 8-character random password generator.

let pwd=Math.floor(Math.random()*(1000-2000)+2000)

// h.innerHTML=pwd


// let green=document.getElementById('gre')
// let black=document.getElementById('bla')
// let orange=document.getElementById('ora')


// green.addEventListener('click',()=>{
//   document. body.style.backgroundColor="green"
// })

// black.addEventListener('click',()=>{
//    document.body.style.backgroundColor="black"
// })
// orange.addEventListener('click',()=>{
//   document. body.style.backgroundColor="orange"
// })

// function capital(str){
//      return str
//          .split('')
//          .map(word=>word.charAt(0).toUpperCase() + word.slice(1))
//          .join("")
// }
// let input="akshay world best developer"
// h.innerHTML=capital(input)

   

// Math.sign()
// //Math.sign(x) returns if x is negative (-1),null or positive(1)

// Math.pow(3,4)
// // retur the vallue of x to the power of y

// Math.sqrt()
// //return sqr root of any number

// output=Math.max(1,2,3,4,undefined)
// console.log(output)

// const arr1=[""]
// const arr2=[442]

//  console.log(arr1)


//  function getRandomNumber(max,min){
//     return Math.floor(Math.random()*(max-min)+min)
//  }

//  console.log(getRandomNumber(5,10))


//  const arr=[1,2,3,undefined,4,5]

//  arr.forEach(function(e){
//     console.log(e)
//  })

//  const newarr=arr.map(double)

//  function double(e){
//     return e*e
//  }
//  console.log(newarr)