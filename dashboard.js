const userName = document.querySelector('.user-welcome');
const balance = document.querySelector('.balance');
const depositBtn = document.querySelector('.dep-button');
const transferBtn = document.querySelector('.transfer-btn');
const withdrawBtn = document.querySelector('.withdraw-btn');
const historyBtn = document.querySelector('.history-btn')

const welcomeMsg = localStorage.getItem('userName')   

userName.textContent = `Welcome, ${welcomeMsg}`    
    
depositBtn.addEventListener('click', (e) => {
      setTimeout(() => {
        window.location.href = 'depPage.html'
      }, 700)
    })
