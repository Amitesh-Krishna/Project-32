class Box {
  constructor(x,y,width,height,color) {
      var options = {
          isStatic: false
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      this.color = color;
      this.visiblity = 255;
      World.add(world, this.body);
    }
    display(){
        if(this.body.speed < 3){
            push();
            var pos =this.body.position;
            rectMode(CENTER);
            fill(this.color);
            strokeWeight(4);
            rect(pos.x, pos.y, this.width, this.height);
            pop();
        }else{
            World.remove(world,this.body);
            this.visiblity -= 5;
        }
        push();
        tint(255,this.visiblity);
        pop();
        if(this.visiblity < 0 && this.visiblity >-10){
            score ++;
        }
    }
};
