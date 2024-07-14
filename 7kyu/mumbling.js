// The examples below show you how to write function accum:

// Examples:
// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"
// The parameter of accum is a string which includes only letters from a..z and A..Z.

// My solution:

function accum(s) {
    let newArr=[]
    let newerArr=[]
      let arr=s.split('')
    for(i=0;i<arr.length;i++){
      newArr=[]
    for(let j=0;j<=i;j++){
      newArr.push(String(arr[i]).toLowerCase())
    }
      newArr[0]=newArr[0].toUpperCase()
      newerArr.push(newArr.join(''))
    }
    return newerArr.join('-')
  }