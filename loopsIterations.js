// level {1/2/3}


// Write a function in Javascript to print the following pattern.

// ```
//       1
//     1 2 1
//   1 2 3 2 1
// 1 2 3 4 3 2 1
// ```

// The function can take the number of rows as input. The pattern should be printed in the console. Minimum number of rows should be 3.


const printPattern = (numberOfRows) => {
    let pattern='';
    for(let i=1; i<=numberOfRows;i++){
        
        for(let j=1; j<=(numberOfRows-i);j++){
            pattern += ' '
        }
        for (let k = 1; k<=i;k++){
            pattern+=k
        }
        for (let k = i-1; k>0;k--){
            pattern+=k
        }
        pattern+= '\n'
    }console.log(pattern)
}
printPattern(4);