const player = document.getElementById('player')
const toggleBtn = document.getElementById('toggle-btn')
const display = document.querySelector('.display')
const buttons = Array.from(document.querySelectorAll('.btn')).filter(btn => btn !== toggleBtn)
const elements = [
  document.querySelector('.first-column'),
  document.querySelector('.second-column'),
  document.querySelector('.display'),
  document.body,
]

function playStopAudio() {
  const isPaused = player.paused

  if (isPaused) {
    toggleBtn.textContent = '⏸'
    player.play()
  }

  if (!isPaused) {
    toggleBtn.textContent = '▶'
    player.pause()
  }

  toggleBtn.classList.toggle(isPaused)
  elements.forEach(el => el.classList.toggle('active'))
}

function endedAudio() {
  toggleBtn.textContent = '▶'
  elements.forEach(el => el.classList.remove('active'))
}

toggleBtn.addEventListener('click', playStopAudio)
player.addEventListener('ended', endedAudio)

buttons.forEach(button => {
  button.addEventListener('click', function (e) {
    switch (e.target.innerText) {
      case 'AC':
        display.innerText = '0'
        break
      case '=':
        try {
          display.innerText = eval(display.innerText)
        } catch (e) {
          display.innerText = 'Error!'
        }
        break
        case '+/-': 
        display.innerText = '-'
        break
      case '%':
        let passedText = display.innerText + '/100'
        display.innerText = eval(passedText)
        break
      default:
        if (display.innerText === '0' && e.target.innerText !== '.') {
          display.innerText = e.target.innerText
        } else {
          display.innerText += e.target.innerText
        }
    }
  })
})
