class DrawingRectangle extends PaintFunction {
  constructor(ctx) {
    super();
    this.ctx = ctx;
    this.initialImage = null;
  }

  onMouseDown(coord, event) {
    this.ctx.fillStyle = colorBtn.value;
    this.ctx.strokeStyle = colorBtn.value;
    this.selectedStyle = selectedStyle;

    this.origX = coord[0];
    this.origY = coord[1];
    this.initialImage = ctx.getImageData(0, 0, canvas.width, canvas.height);
  }

  onDragging(coord, event) {
    this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
    this.ctx.putImageData(this.initialImage, 0, 0);

    this.selectedStyle === "fill"
      ? this.ctx.fillRect(this.origX,this.origY,coord[0] - this.origX,coord[1] - this.origY)
      : this.ctx.strokeRect(this.origX,this.origY,coord[0] - this.origX,coord[1] - this.origY);
  }
  onMouseMove() {}
  onMouseUp(coord) {
    if (this.selectedStyle === "fill") {
      this.ctx.fillRect(
        this.origX,
        this.origY,
        coord[0] - this.origX,
        coord[1] - this.origY
      );
    } else {
      this.ctx.strokeRect(
        this.origX,
        this.origY,
        coord[0] - this.origX,
        coord[1] - this.origY
      );
    }
  }
  onMouseLeave() {}
  onMouseEnter() {}
}
