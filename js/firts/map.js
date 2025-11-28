// map filter reduce 

const nums = [1, 2, 3, 4, 5, 6]
//map
// const mutliple = nums.map((num) => num * 2)
// console.log("method ", mutliple)
//polifill
// Array.prototype.myMap = function (cb) {
//      let temp = []
//      for (let i = 0; i < this.length; i++) {
//           temp.push(cb(this[i] ,i ,this))
//      }
//      return temp;
// }

// const constom = nums.myMap((num,i ,arr) => {
//      return num*3
// })
// console.log("constom ", constom)


// 2. filter

// const filters = nums.filter((num) => num % 2 === 0)

// console.log(filters)


// Array.prototype.myFilter = function (cb) {
//      let temp = [];

//      for (let i = 0; i < this.length; i++) {
//           if (cb(this[i], i, this)) {   
//                temp.push(this[i]);      
//           }
//      }

//      return temp;
// };


// const result = nums.myFilter((num) => num > 2);

// console.log(result);

// 3. reduce

  const reduces = nums.reduce((acc , current)=>{
        return acc+current
  },0)

console.log(reduces)






