// closser in javascriot

// var name =  "Roaside";
// function local() {
// console.log("name" , name)
// }
// local()


// Curryin in JavaScript
// Examples f(a,b) into f(a)(b)

function f (a) {
 return function(b){
     return function(c){
          return a+b+c
     }
  }
}

console.log(f(1)(2)(3))

