const panels = document.querySelectorAll('.panel')

const ACTIVE_CLASS_NAME = 'active'

function toggleOpen() {
  const activeElement = document.querySelector('.panel.active')

  if (activeElement) {
    activeElement.classList.remove(ACTIVE_CLASS_NAME)
  }

  if (activeElement !== this) {
    this.classList.add(ACTIVE_CLASS_NAME)
  }
}

panels.forEach(panel => panel.addEventListener('click', toggleOpen))

