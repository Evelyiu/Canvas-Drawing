
class FillColor extends PaintFunction {

  constructor(ctx) {
    super();
    this.ctx = ctx;
  }

  onMouseDown(coord, event) {
    this.ctx.strokeStyle = colorBtn.value;
    this.ctx.fillStyle = colorBtn.value;
    // this.ctx.fillRect(0, 0, canvasReal.width, canvasReal.height);

  }

  // onDragging(coord, event) {
  //   this.draw(coord[0], coord[1]);
  // }

  // onMouseMove() {}
  // onMouseUp() {}
  // onMouseLeave() {}
  // onMouseEnter(e) {
  //   this.ctx.fillRect(0, 0, e.target.width, e.target.height);
  // }

  // draw(x, y) {
  //   this.ctx.lineTo(x, y);
  //   this.ctx.stroke();
  // }
}
