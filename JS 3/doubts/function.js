function helloSayer() {
    console.log('world')
    return 'hello';
}
let x = () => { helloSayer(); }
console.log(x)//  function will be printed.///
// we are not calling the function here so function will get printed.///////
// console.log(() => {
//     helloSayer();
// })
