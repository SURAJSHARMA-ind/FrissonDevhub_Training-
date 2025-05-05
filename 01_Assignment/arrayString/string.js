//..................................String Methods..............................................


// ..................................concat..............................................
let str = "suraj"
const result = str.concat(" ",'Sharma')
console.log(result)
console.log(str)

//...........................charAt..............................................
let str1 = "suraj"
let result1 = str1.charAt(0)
console.log('charAt',result1) 

// ..............................at.........................................
let str6 = "suraj"
let resul4 = str6.at(0)    
// not support negatie index but work ?
let resul5 = str6.at(-1)        


console.log('at',resul4)
console.log('at',resul5)
//...........................charCodeAt..............................................
let str2 = "suraj"
let result2 = str2.charCodeAt(0)
console.log(result2)

// ............................upperCase..............................................
let str3 = "suraj"
let result3 = str3.toUpperCase()
console.log(result3)

// ............................lowerCase..............................................
let str4 = "SURAJ"
let result4 = str4.toLowerCase()
console.log(result4)

//.............................indexOf..............................................
// return first index which match the value
let str5 = "suraaj"
let result5 = str5.indexOf('a')
console.log('indexOf ',result5)

// .............................lastIndexOf..............................................
// return last index which match the value
let str7 = "suraaj"
let result6 = str7.lastIndexOf('a')
console.log('lastIndexOf ',result6)

//.............................split..............................................
// return array 
let str8 = "suraj"
let str9 = "suraj sharma"

let result7 = str8.split('') 
let result8 = str9.split(' ',1) 
let result9 = str9.split(' ',2) 
let result10 = str9.split('s') 
console.log('split',result7)
console.log('split',result8)
console.log('split',result9)
console.log('split',result10)

// .............................slice..............................................
let str10 = "suraj sharma"
// return new string
let result11 = str10.slice(0, 4) 
console.log('slice',result11)
