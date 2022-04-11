// level {1/2/3}

// Re-write the below code to better code quality standards.

// ```
// async function GET_daTA() {
//   let r = await fetch("https://jsonplaceholder.typicode.com/todos/1");
//   let DATA = await r.json();
//   return DATA;
// }
// ```

async function getData(){
    const response = await fetch('ttps://jsonplaceholder.typicode.com/todos/1');
    const data = await response.json();
    return data;
}