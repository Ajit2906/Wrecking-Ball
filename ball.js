class Ball {
    constructor (x,y){
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
        this.body = Bodies.circle(x,y,80,options);
        World.add(world, this.body);
        this.radius = 80;
    }
    display(){
            var angle = this.body.angle;
            push();
            translate(this.body.position.x, this.body.position.y);
            rotate(angle);
            ellipseMode(CENTER);
            fill("white")
            ellipse(0, 0, this.radius,this.radius);
            pop();
            }
    } 
    