class DrawingLine extends PaintFunction {
  constructor(ctx) {
    super();
    this.ctx = ctx;
  }

  onMouseDown(coord, event) {
    this.ctx.strokeStyle = colorBtn.value;
    this.ctx.lineCap = StyleBtn.value;
    this.ctx.lineWidth = rangeBtn.value;
    this.ctx.lineJoin = "round";
    this.ctx.beginPath();
    this.ctx.moveTo(coord[0], coord[1]);
  }

  onDragging(coord, event) {
    this.draw(coord[0], coord[1]);
  }
  onMouseMove() {}
  onMouseUp() {}
  onMouseLeave() {}
  onMouseEnter() {}

  draw(x, y) {
    this.ctx.lineTo(x, y);
    this.ctx.stroke();
  }
}
