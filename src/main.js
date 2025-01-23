//id left-password-text
//id right-password-text
const caracters = '1234567890ABCDEFGHIJKLMNOPQRSTVWXYZabcdefghijklmnopqrstvwxyz.,;:-?¿=^`++`*"·$%&¡';

// selecting which object from the html 
let leftPasswordEl = document.getElementById('left-password-text')
let rightPasswordEl = document.getElementById('right-password-text')



function caracterMixer() {
  let inputEl = document.getElementById('number-selector')
  // modifying that html object
  const inputValue = inputEl.value
    let code = '';
    for(let i = 0; i < inputValue; i++) {
    const randomCaracter = Math.floor(Math.random() * caracters.length)
    code += caracters[randomCaracter]
  } 
    leftPasswordEl.textContent = code
    return code
  
}
