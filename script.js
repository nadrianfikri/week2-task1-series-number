const displayNum = document.querySelector('#display-num p');
const displayElm = document.getElementById('display-num');
const numberInput = document.getElementById('number-input');

function performEvenNumber() {
  let result = '';
  for (let i = 1; i <= numberInput.value; i++) {
    if (i % 2 === 0) {
      result += `${i}  `;
    }
  }

  // displayNum.style.height = 'auto';
  displayElm.style.border = '3px solid #9c1515 ';

  displayNum.innerHTML = result;
}
function performOddNumber() {
  let result = '';
  for (let i = 1; i <= numberInput.value; i++) {
    if (i % 2 === 1) {
      result += `${i}  `;
    }
  }
  // displayNum.style.height = 'auto';
  displayElm.style.border = '3px solid #f3ef18 ';
  
  displayNum.innerHTML = result;
}

function performPrimeNumber() {
  let result = '';

  function isPrime(num) {
    for (let i = 2; i < num; i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  }

  for (let i = 2; i <= numberInput.value; i++) {
    if (isPrime(i)) {
      result += `${i}  `;
    }
  }
  // displayNum.style.transition = '1s';

  // displayNum.style.height = 'auto';
  displayElm.style.border = '3px solid #27bd27 ';

  displayNum.innerHTML = result;
}
