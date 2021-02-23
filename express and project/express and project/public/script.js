let inpCode = document.getElementById('inpCode')
let btnEncode = document.getElementById('btnEncode')
let btnEncrypt = document.getElementById('btnEncrypt')

let code = document.getElementById('code')
btnEncode.onclick = function () {
    let data = inpCode.value 
    data = btoa(data)
    code.value = data
}

btnEncrypt.onclick = function () {
    let data = code.value
    data = swapcase(data)
    code.value = data
}

function encryptData(str) {
    /*
        TODO: actually encrypt data
        logic: turn lowercase chars to uppercase and viceversa 
     */
   /* for(q in rawData){
    console.log(rawData[q])
    if(rawData[q]==rawData[q].toUpperCase())
    rawData[q]= rawData[q].toLowerCase()
    else if(rawData[q]==rawData[q].toLowerCase())
    rawData[q]=rawData[q].toUpperCase()
    console.log(rawData[q])
    }
    return rawData;*/
}
function swapcase(str) {
    return str.replace(/([a-z]+)|([A-Z]+)/g, function(match, chr) {
        return chr ? match.toUpperCase() : match.toLowerCase();
    });
}
