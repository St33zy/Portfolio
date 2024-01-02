const form = document.querySelector('.form1')
const submitButton = document.querySelector('.btn')

form.addEventListener('submit', (e) => {
  submitButton.disabled = true
  e.preventDefault()
  window.location.href = window.location.origin + '/block09/Portfolio/success.html'
})