const depositForm = document.querySelector('.deposit-form')
const amountDeposited = document.querySelector('.dep-amount')
const firstInputedPin = document.querySelector('.inp-pin')
const secondInputerPin = document.querySelector('.retype');
const depBtn = document.querySelector('.final-depBtn')
console.log(firstInputedPin.value === secondInputerPin.value)

depositForm?.addEventListener('submit', (e) => {
  e.preventDefault();
  let trimmedAmt = Number(amountDeposited.value.trim())
  let trimmedPin = firstInputedPin.value.trim();
  let trimmedPin2 = secondInputerPin.value.trim();
  
  if (!trimmedAmt || !trimmedPin || !trimmedPin2) {
    return alert('Please characters must be filled!')
  }
  
  if (isNaN(trimmedAmt || trimmedAmt < 0)) {
    return alert('Enter a valid amount')
  }
  
  if (trimmedPin !== trimmedPin2) {
    return alert("PIN doesn't match")
  }
  
  if (trimmedPin < 4) {
    return alert("PIN must be 4 length")
  }
  
  const balance = Number(localStorage.getItem('amount') || 0)
  
  const newBalance = balance + trimmedAmt
  localStorage.setItem('amount', newBalance)
  
  alert(`Deposited ${trimmedAmt.toLocaleString()} successfully`)
  setTimeout(() => {
    window.location.href = 'dashboard.html'
  }, 800)

  
})
