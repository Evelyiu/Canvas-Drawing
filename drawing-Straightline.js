class DrawingStraightline extends PaintFunction {
  constructor(ctx) {
    super();
    this.ctx = ctx;
    this.initialImage = null;
  }
  onMouseDown(coord, event) {
    this.ctx.strokeStyle = colorBtn.value;
    this.ctx.lineCap = StyleBtn.value;
    this.ctx.lineWidth = rangeBtn.value;
    this.ctx.lineJoin = "round";
    this.origX = coord[0];
    this.origY = coord[1];
    this.initialImage = ctx.getImageData(0, 0, canvas.width, canvas.height);
  }

  onDragging(coord, event) {
    this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.width);
    this.ctx.putImageData(this.initialImage, 0, 0);
    this.ctx.beginPath();
    this.ctx.moveTo(this.origX, this.origY);
    this.ctx.lineTo(coord[0], coord[1]);
    this.ctx.stroke();
  }

  onMouseMove() {}
  onMouseUp(coord) {
    this.ctx.beginPath();
    this.ctx.moveTo(this.origX, this.origY);
    this.ctx.lineTo(coord[0], coord[1]);
    this.ctx.stroke();
  }
  onMouseLeave() {}
  onMouseEnter() {}
}
