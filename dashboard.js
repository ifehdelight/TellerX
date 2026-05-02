const userName = document.querySelector('.user-welcome');
let balance = document.querySelector('.balance');
const depositBtn = document.querySelector('.dep-button');
const transferBtn = document.querySelector('.transfer-btn');
const withdrawBtn = document.querySelector('.withdraw-btn');
const historyBtn = document.querySelector('.history-btn')

const welcomeMsg = localStorage.getItem('userName') || 'Guest'  

userName.textContent = `Welcome, ${welcomeMsg}`    

function getBalance() {
  const bal = Number(localStorage.getItem('amount'))
  return isNaN(bal) ? 0 : bal;
}

function updateBalance() {
  balance.textContent = `$${getBalance().toLocaleString()}`
}
updateBalance()

depositBtn.addEventListener('click', (e) => {
      setTimeout(() => {
        window.location.href = 'depPage.html'
      }, 700)
    })

