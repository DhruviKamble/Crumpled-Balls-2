class Ground {
  constructor (x,y,width,height) {
      this.body = Bodies.rectangle(x,y,width,height,{isStatic: true});
      World.add(world,this.body);
      this.width = width;
      this.height = height;   
  }

  display () {
      var pos = this.body.position;
      rectMode(CENTER);
      fill(245, 52, 255);
      rect(pos.x, pos.y, this.width, this.height);
  }
}