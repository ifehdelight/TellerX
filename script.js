const loginStatus = document.querySelector('.login-status')
const loginBtn = document.querySelector('.login-btn')

loginBtn.addEventListener('click', (e) => {
  e.preventDefault()
  
  const acc = document.querySelector('.input-acc')
  const trimmedAcc = acc.value.trim()
  const pwd = document.querySelector('.input-pwd');
  const trimmedPwd = pwd.value.trim()
  
  const storedAcc = localStorage.setItem('userName', acc.value)
  
  if (!trimmedAcc || !trimmedPwd) {
    alert('Enter account number and password')
        return;
  }
      
      loginBtn.disabled = true
      loginStatus.style.display = 'flex'
      console.log(acc.value)
      setTimeout(() => {
        window.location.href = 'dashboard.html'
      }, 2500)
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
   
