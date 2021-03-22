function handleUpdate() {
  const suffix = this?.dataset?.unit || ''
  document.documentElement.style.setProperty(`--${this.name}`, `${this.value}${suffix}`)
}

document.addEventListener("DOMContentLoaded", () => {
  const inputs = document.querySelectorAll('.control input')
  inputs.forEach(input => {
    input.addEventListener('change', handleUpdate)
    input.addEventListener('input', handleUpdate)
  })
})