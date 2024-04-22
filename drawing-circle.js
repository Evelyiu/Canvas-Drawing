class DrawingCircle extends PaintFunction {
  constructor(ctx) {
    super();
    this.ctx = ctx;
    this.initialImage = null;
  }

  onMouseDown(coord, event) {
    this.ctx.fillStyle = colorBtn.value;
    this.ctx.strokeStyle = colorBtn.value;
    this.selectedStyle = selectedStyle;

    this.origX =coord[0]
    this.origY = coord[1];
    this.initialImage = ctx.getImageData(0, 0, canvas.width, canvas.height);
  }

  onDragging(coord, event) {
    this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
    this.ctx.putImageData(this.initialImage, 0, 0);

    this.ctx.beginPath();
    this.ctx.moveTo(this.origX + Math.abs(coord[0] - this.origX), this.origY); // avoid the radius path
    this.ctx.arc(this.origX, this.origY, Math.abs(coord[0] - this.origX), 0, Math.PI * 2);
    this.selectedStyle === "fill" ? this.ctx.fill() : this.ctx.stroke() 
  }
  onMouseMove() {}
  onMouseUp(coord) {
    this.ctx.beginPath();
    this.ctx.moveTo(this.origX + Math.abs(coord[0] - this.origX), this.origY);  // avoid the radius path
    this.ctx.arc(this.origX, this.origY, Math.abs(coord[0] - this.origX), 0, Math.PI * 2);
    this.selectedStyle === "fill" ? this.ctx.fill() : this.ctx.stroke()  
  }
  onMouseLeave() {}
  onMouseEnter() {}
}
