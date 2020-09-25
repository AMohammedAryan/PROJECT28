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

    fly(){

        this.constraint.bodyA = null;
    }

    attach(body){

        this.constraint.bodyA = body;
    }
}
