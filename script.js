const loginStatus = document.querySelector('.login-status')
const loginBtn = document.querySelector('.login-btn')
    
loginBtn.addEventListener('click', (e) => {
  const acc = document.querySelector('.input-acc').value.trim();
  const pwd = document.querySelector('.input-pwd').value.trim();
      
  if (!acc || !pwd) {
    alert('Enter account number and password')
        return;
  }
      
      loginBtn.disabled = true
      loginStatus.style.display = 'flex'
      
      setTimeout(() => {
        window.location.href = 'dashboard.html'
      }, 3500)
    })
    
    const pwdBtn = document.querySelector('.input-pwd');
    const pinBtn = document.querySelector('.show-password');
    
    pinBtn.addEventListener('click', () => {
      if (pinBtn.checked) {
        pwdBtn.type = 'text';
      } else {
        pwdBtn.type = 'password'
      }
    })
    
    const userName = document.querySelector('.user-welcome');
    const balance = document.querySelector('.balance');
    const depositBtn = document.querySelector('.dep-button');
    const transferBtn = document.querySelector('.transfer-btn');
    const withdrawBtn = document.querySelector('.withdraw-btn');
    const historyBtn = document.querySelector('.history-btn')
    
    
    depositBtn.addEventListener('click', (e) => {
      setTimeout(() => {
        window.location.href = 'depPage.html'
      }, 700)
    })
    
    const AmountDeposited = document.querySelector('.dep-amount')
    const firstInputedPin = document.querySelector('.inp-pin')
    const secondInputerPin = document.querySelector('.retype')
    console.log(firstInputedPin.value === secondInputerPin.value)
