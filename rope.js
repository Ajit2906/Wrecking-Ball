class Rope{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 100
        }
        
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }
    display(){
        var pointA = this.sling.bodyA.position;
        var pointB = this.pointB;
        stroke("yellow");
        strokeWeight(3);
        line(pointA.x , pointA.y, pointB.x , pointB.y);
    }
}