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

console.log(getBalance().toLocaleString())
console.log(isNaN(300))
function updateBalance() {
  balance.textContent = `${getBalance().toLocaleString()}`
}

console.log(updateBalance())
/*const newbalance = localStorage.getItem('amount')
const convertedBalance = Number(balance.textContent)
nBalance = convertedBalance + Number(newbalance)
localStorage.setItem('test', nBalance)
*/
balance.innerHTML = localStorage.getItem('test')
depositBtn.addEventListener('click', (e) => {
      setTimeout(() => {
        window.location.href = 'depPage.html'
      }, 700)
    })

