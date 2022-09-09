let count = 1;
const increment = () => {
      const numberField = document.getElementById('number-element');
      const numberFieldValue = parseInt(numberField.innerText);
      
      const increment = numberFieldValue + count;
      numberField.innerText = increment;
      localStorage.setItem('number', increment);
      

}
const numberField = document.getElementById('number-element');
numberField.innerText = localStorage.getItem('number');