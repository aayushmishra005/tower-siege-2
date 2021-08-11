class Block{
  constructor(x, y, width, height) {
      var options = {
          restitution :0.4,
          friction :0.0,
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
      this.image = loadImage("block.png")
      this.Visibiity = 255;

    }
    display(){

      if (this.body.speed<3){
       var angle = this.body.angle;
       var pos = this.body.position;
       push();
       translate(pos.x,pos.y);
       rotate(angle);
       rectMode(CENTER);
       rect(0,0,this.width,this.height);
       pop();

      }

      else{
        World.remove(world,this.body);
        push();
        this.Visibiity = this.Visibiity - 7;
        tint(255,this.Visibiity);
        rect(999,999,this.width, this.height);

    }

    }

}