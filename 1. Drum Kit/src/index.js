window.addEventListener('keydown', ({ keyCode }) => {
  const audio = document.querySelector(`audio[data-key="${keyCode}"]`)

  if (!audio) return
  audio.volume = 1 / 100 * +(audio.dataset.volume || 100)
  audio.currentTime = 0
  audio.play()

  const button = document.querySelector(`.button[data-key="${keyCode}"]`)
  button.classList.add('active')

  audio.addEventListener('ended', () => {
    button.classList.remove('active')
  })
})