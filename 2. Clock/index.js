const interval = setInterval(() => {
  const now = new Date();

  const hours = now.getHours();
  const hourTurn = (hours / 12) - .25;
  document.querySelector('#clock .hour-hand').style.transform = `rotate(${hourTurn}turn)`

  const minutes = now.getMinutes();
  const minuteTurn = (minutes / 60) - .25;
  document.querySelector('#clock .min-hand').style.transform = `rotate(${minuteTurn}turn)`

  const seconds = now.getSeconds();
  const secondTurn = (seconds / 60) - .25;
  document.querySelector('#clock .second-hand').style.transform = `rotate(${secondTurn}turn)`
}, 1000)