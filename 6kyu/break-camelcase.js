// Complete the solution so that the function will break up camel casing, using a space between words.

// Example
// "camelCasing"  =>  "camel Casing"
// "identifier"   =>  "identifier"
// ""             =>  ""

// My solution:

function solution(string) {
    let arr=string.split('')
    let arr2=[]
    for(let i=0;i<arr.length;i++){
      if(arr[i]!==arr[i].toUpperCase()){
        arr2.push(arr[i])
      } else if (arr[i]===arr[i].toUpperCase()){
        arr2.push(' ')
        arr2.push(arr[i])
      }
    }
    return arr2.join('');
  }

  function solution2(string) {
    return(string.replace(/([A-Z])/g, ' $1'));
  
  }