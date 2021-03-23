const checkboxes = document.querySelectorAll('input[type="checkbox"]');

let lastChecked;

function handleCheck(e) {
  let inBetween = false;
  if (e.shiftKey && this.checked) {
    checkboxes.forEach((checkbox) => {
      [this, lastChecked].includes(checkbox) && (inBetween = !inBetween);
      inBetween && (checkbox.checked = true);
    });
  }

  lastChecked = this
}

checkboxes.forEach((checkbox) =>
  checkbox.addEventListener("click", handleCheck)
);
