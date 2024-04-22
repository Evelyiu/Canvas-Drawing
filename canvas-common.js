let canvas = document.querySelector("canvas");
let ctx = canvas.getContext("2d");
let clearBtn = document.querySelector(".clearBtn");
let colorBtn = document.querySelector(".colorBtn");
let StyleBtn = document.querySelectorAll(".StyleBtn");
let rangeBtn = document.querySelector(".rangeBtn");
let fillColor = document.querySelector("#fill-color");
let penSize = document.querySelector(".penSize");
let fillBtn = document.querySelector(".fillBtn");
let undoBtn = document.querySelector(".undoBtn");
let redoBtn = document.querySelector(".redoBtn");
let saveImg = document.querySelector(".save-img");
let currentFunction;
let dragging = false;
let undoHistory = [];
let redoHistory = [];
let selectedStyle = "stroke";

canvas.addEventListener("mousedown", function (e) {
  let mouseX = e.offsetX;
  let mouseY = e.offsetY;
  currentFunction.onMouseDown([mouseX, mouseY], e);
  dragging = true;
});

canvas.addEventListener("mousemove", function (e) {
  let mouseX = e.offsetX;
  let mouseY = e.offsetY;
  if (dragging) {
    currentFunction.onDragging([mouseX, mouseY], e);
  }
  currentFunction.onMouseMove([mouseX, mouseY], e);
});

canvas.addEventListener("mouseup", function (e) {
  dragging = false;
  let mouseX = e.offsetX;
  let mouseY = e.offsetY;
  currentFunction.onMouseUp([mouseX, mouseY], e);

  undoHistory.push(ctx.getImageData(0, 0, canvas.width, canvas.height));
});

canvas.addEventListener("mouseleave", function (e) {
  dragging = false;
  let mouseX = e.offsetX;
  let mouseY = e.offsetY;
  currentFunction.onMouseLeave([mouseX, mouseY], e);
});

canvas.addEventListener("mouseenter", function (e) {
  let mouseX = e.offsetX;
  let mouseY = e.offsetY;
  currentFunction.onMouseEnter([mouseX, mouseY], e);
});

//btn event
clearBtn.addEventListener("click", function () {
  ctx.fillStyle = "#ffffff";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
});

colorBtn.addEventListener("input", function () {
  ctx.strokeStyle = colorBtn.value;
  ctx.fillStyle = colorBtn.value;
});

StyleBtn.forEach((radioBtn) => {
  radioBtn.addEventListener("click", function (e) {
    if (e.target.checked) {
      ctx.lineCap = e.target.value;
    }
  });
});

fillColor.addEventListener("click", function (e) {
  if (!e.target.checked) {
    selectedStyle = "stroke";
    console.log(`stroke`);
    // return;
  } else {
    selectedStyle = "fill";
    console.log(`fill`);
  }
});

rangeBtn.addEventListener("input", function (e) {
  ctx.lineWidth = e.target.value;
  penSize.textContent = `pen width: ${ctx.lineWidth}px`;
});

undoBtn.addEventListener("click", function () {
  if (undoHistory.length === 0) {
    return;
  }
  const lastImageData = undoHistory.pop();
  redoHistory.push(lastImageData);

  if (undoHistory.length === 0) {
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  } else {
    const prevImageData = undoHistory[undoHistory.length - 1];
    ctx.putImageData(prevImageData, 0, 0);
  }
});

redoBtn.addEventListener("click", function () {
  if (redoHistory.length > 0) {
    const lastImageData = redoHistory.pop();
    undoHistory.push(lastImageData);
    ctx.putImageData(lastImageData, 0, 0);
  }
});
saveImg.addEventListener("click", function () {
  const link = document.createElement("a");
  link.download = `${Date.now()}jpg`;
  link.href = canvas.toDataURL();
  link.click();
});

class PaintFunction {
  constructor() {}
  onMouseDown() {}
  onDragging() {}
  onMouseMove() {}
  onMouseUp() {}
  onMouseLeave() {}
  onMouseEnter() {}
}
