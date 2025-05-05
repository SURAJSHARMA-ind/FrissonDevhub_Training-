//..................................Array Methods..............................................


//............................ customLength .......................................

Array.prototype.customLength = function () {
  let index = 0;
  while (this[index] !== undefined) {
    index++
  }
  return index
}

let arr = [21, 34, 1, 65, 2, 65, 2, 32]
console.log("..................customLength......................")
console.log(arr.customLength())
console.log(arr.length)



//...............................customPush ....................................

// Array.prototype.customPush = function () {
//   let args = Array.from(arguments)
//   // console.log('args are ', args)
//   // console.log('type is ', typeof (args))
//   for (let i = 0; i < args.customLength(); i++) {
//     this[this.customLength()] = args[i]
//   }


//   return this
// }

// const arr1 = [12, 2, 32, 32]

// arr1.customPush("suraj", 'dsifh', null, { name: 'suraj' }, [32, 32, 32, 4], () => { })
// console.log(arr1)




//.......................... customConcat .....................................

// Array.prototype.customConcat = function () {

//   let args = Array.from(arguments)
//   for (let i = 0; i < args.customLength(); i++) {
//     if(Array.isArray(args[i])) {
//       for (let j = 0; j < args[i].customLength(); j++) {
//         this[this.customLength()] = args[i][j]
//       }
//     }
//     else {
//       this[this.customLength()] = args[i]
//     }
//   }
//   return this
// }
// const  arr3 = [1, 2, 3, 4, 5]
// const  arr4 = [9,0,2,1]
// const obj = { name: 'suraj' }
// const str = "suraj"

// const result = arr3.customConcat(arr4,obj,str, ()=> { })
// console.log(result)



// ........................customPop ...................................

Array.prototype.customPop = function () {
  if (this.customLength() === 0) {
    return undefined
  }
  let lastElement = this[this.customLength() - 1]

  for (let i = this.customLength() - 1; i > 1; i--) {
    this[i] = this[i - 1]
  }

  return lastElement
}

let arr2 = [1, 2, 3, 4, 5, 6, 7, 8]
const result = arr2.customPop()
console.log('poped value is ', result)
console.log('new array after pop is ', arr2)


// .......................... customShift ...................................

Array.prototype.customShift = function () {
  if (this.customLength() === 0) {
    return undefined
  }
  let firstElement = this[0]

  let length = this.customLength();
  for (let i = 1; i <= length; i++) {
    if (this[i + 1] === undefined) {
      break
    }
    this[i] = this[i + 1]
  }
  this.customPop()
  return firstElement
}


let arr5 = [1, 2, 3, 4, 5, 6, 7, 8]
const result1 = arr5.customShift()
console.log('shifted value is ', result1)
console.log('new array after shift is ', arr5)


// .........................Implementations of array methods..................................

let array1 = [1, 2, 3, 4, 5, 6, 7, 8]
let result2 = array1.map((element, index, array) => {

  return element * 2
})
console.log('result of map is ', result2)

//........................ForEach...................................

const numArray = [1, 2, 3];
const newArray = [];

numArray.forEach((num) => {
  newArray.push(num * 2);
});

console.log('forEach ',newArray); 

//........................Filter...................................
const numbers = [1, 2, 3, 4, 5];  
const filteredNumbers = numbers.filter((num) => {
  return num > 2;
});
console.log('filtered numbers are ', filteredNumbers);
