//id left-password-text
//id right-password-text
const caracters = '1234567890ABCDEFGHIJKLMNOPQRSTVWXYZabcdefghijklmnopqrstvwxyz.,;:-?¿=^`++`*"·$%&¡';

// selecting which object from the html 
let leftPasswordEl = document.getElementById('left-password-text')
let rightPasswordEl = document.getElementById('right-password-text')



function caracterMixer() {
  let inputEl = document.getElementById('number-selector')
  let inputValue = inputEl.value
  if(inputValue < 4) {
    inputValue = 4
  }
    let codeOne = '';
    let codeTwo = '';
    for(let i = 0; i < inputValue; i++) {
    const randomCaracter = Math.floor(Math.random()  * caracters.length )
    codeOne += caracters[randomCaracter]
    }
    for(let i = 0; i < inputValue; i++) {
      const randomCaracter = Math.floor(Math.random()  * caracters.length )  
    codeTwo += caracters[randomCaracter ]
  }
    leftPasswordEl.textContent = codeOne
    rightPasswordEl.textContent = codeTwo
    return codeOne, codeTwo

}

function codeCopy() {
  const CodeToCopy = leftPasswordEl.textContent
  navigator.clipboard.writeText(CodeToCopy)
  .then(() => {
    alert('copy on clipboard')
  })
  .catch(err => {
    console.error('Error al copiar al portapapeles:', err);
  
})
} 

