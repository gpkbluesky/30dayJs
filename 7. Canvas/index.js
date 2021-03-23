const canvas = document.querySelector("#draw");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

ctx.lineJoin = "round";
ctx.lineCap = "round";

let isDrawing = false;
let lastX = 0,
  lastY = 0,
  hue = 0;
lineWidth = 1;
direction = true;

const startDraw = (e) => {
  isDrawing = true;
  const { offsetX, offsetY } = e;

  [lastX, lastY] = [offsetX, offsetY];
};

const draw = (e) => {
  if (!isDrawing) return;

  const { offsetX, offsetY } = e;

  ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
  ctx.lineWidth = lineWidth / 6;
  ctx.beginPath();
  ctx.moveTo(lastX, lastY);
  ctx.lineTo(offsetX, offsetY);
  ctx.stroke();

  [lastX, lastY] = [offsetX, offsetY];

  if (lineWidth > 360 || lineWidth < 1) {
    direction = !direction;
  }
  direction ? lineWidth++ : lineWidth--;
  direction ? hue++ : hue--;
};

canvas.addEventListener("mousedown", startDraw);
canvas.addEventListener("mousemove", draw);
canvas.addEventListener("mouseup", () => (isDrawing = false));
// canvas.addEventListener("mouseout", () => (isDrawing = false));
canvas.addEventListener("contextmenu", (e) => e.preventDefault());

const clearButton = document.querySelector("#clear");
clearButton.addEventListener("click", () =>
  ctx.clearRect(0, 0, canvas.width, canvas.height)
);
