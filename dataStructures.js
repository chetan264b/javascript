// level {1/2/3}


//1. Convert [1, 2, 3] to [2, 3, 4] using one line of code.
//Output should be [2, 3, 4]

console.log([1,2,3].map((num) => num+1))


// 2. Calculate total of all the numbers in array [1, 2, 3] using one line of code.
// Output should be a number: 6

console.log([1, 2, 3].reduce(function(a,b){ return (a+b);},0))


// 3. Print all the properties of the object along with value {name: 'Elie', rank: 'Pro'}.
// Output should be a string: "name: Elie, rank: Pro"

obj = {name: 'Elie', rank: 'Pro'}
res = ''
for (const[key,value] of Object.entries(obj)){
    res += `${key}: ${value} `
}
console.log(res);
// console.lo