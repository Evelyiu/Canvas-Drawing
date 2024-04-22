/**********************************************
 * Drawing Line Functionality
 * ==================================
 * This class extends the PaintFunction class, which you can find in canvas-common
 * Remember, order matters
 ***********************************************/
class Eraser extends PaintFunction {
  constructor(ctx) {
    super();
    this.ctx = ctx;
  }

  onMouseDown(coord, event) {
    this.ctx.strokeStyle = "#fff";//should only affect the eraser color but not others color
    this.ctx.lineCap = StyleBtn.value;
    this.ctx.lineWidth = rangeBtn.value;
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
