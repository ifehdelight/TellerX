const amountDeposited = document.querySelector('.dep-amount')
const firstInputedPin = document.querySelector('.inp-pin')
const secondInputerPin = document.querySelector('.retype');
const depBtn = document.querySelector('.final-depBtn')
console.log(firstInputedPin.value === secondInputerPin.value)

depBtn.addEventListener('click', (e) => {
  e.preventDefault();
  let trimmedAmt = amountDeposited.value.trim();
  let trimmedPin = firstInputedPin.value.trim();
  let trimmedPin2 = secondInputerPin.value.trim();
  
  if (!trimmedAmt || !trimmedPin || !trimmedPin2) {
    alert('Please characters must be filled!')
    return
  }
  
  if (trimmedPin === trimmedPin2) {
    alert('Deposited successfully')
    setTimeout(() => {
    window.location.href = 'dashboard.html'
  }, 1000)
  } else {
    alert("PIN doesn't match")
  }
  
  localStorage.setItem('amount', amountDeposited.value)
  
  
})
