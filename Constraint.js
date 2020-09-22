class Constraint {

    constructor(bodyA, pointB){

        var options = {

            bodyA:bodyA,
            pointB:pointB,
            length:10,
            stiffness:0.04
        }

        this.constraint = Matter.Constraint.create(options);
        World.add(world, this.constraint);
    }

    display(){

        var posA = this.constraint.bodyA.position;
        var posB = this.pointB;

        line(posA.x, posA.y, posB.x, posB.y);
    }
}