// Given a string, you have to return a string in which each character (case-sensitive) is repeated once.

// Examples (Input -> Output):
// * "String"      -> "SSttrriinngg"
// * "Hello World" -> "HHeelllloo  WWoorrlldd"
// * "1234!_ "     -> "11223344!!__  "

//my solution:

function doubleChar(str) {
    let arr=str.split('')
    let newStr= arr.map(el=>el+el).join('')
    return newStr
  }