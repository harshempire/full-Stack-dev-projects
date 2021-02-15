let btnWait = document.getElementById('btnWait')
let btnCount = document.getElementById('btnCount')
let divStatus = document.getElementById('divStatus')
let divVal = document.getElementById('divVal')


let count = 0 

btnCount.onclick = function () {
    count++ 
    console.log('count', count)
    divVal.textContent = count
}

btnWait.onclick = function () {
    divStatus.textContent = 'WAITING'
    console.log('waiting')
    let start = Date.now()
    while (Date.now() < start + 5000) { /* do nothing */ }
    divStatus.textContent = 'DONE'// it will not do WAITING because interpreter waits till the last line
    // of the function is executed and in the last line DONE is to be printed so WAITING will not print.
    console.log('done')
}