class Drop{
    constructor(x, y){
        var options = {
            restitution: 0.3, 
            friction: 0.001,
          }
          this.body = Bodies.circle (x, y, 5, options);
          this.radius = 5;
          Matter.Body.setVelocity(this.body, {x: 0, y:0.05})
          World.add(world, this.body);
    }

    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        angleMode(RADIANS); //radians (PI is 180 degrees) is used in Matter.js, degrees is used in p5.play
        translate(pos.x, pos.y);
        rotate(angle);
        fill("blue");
        ellipseMode(RADIUS);
        ellipse(0,0,this.radius, this.radius)
        pop();
    }

    update(){
        if(this.body.position.y > height){
            Matter.Body.setPosition(this.body, {x: random(0, 400), y: random(0, 400)})
        }
    }
}