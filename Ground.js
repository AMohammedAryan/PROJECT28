class Ground{

    constructor(){

        var options = {
            isStatic:true
        }

        this.body = Bodies.rectangle(width/2, height-10, width, 20, options);
        this.width = width;
        this.height = 50;

        World.add(world, this.body);
    }

    display(){

        var pos = this.body.position;

        rect(pos.x, pos.y, this.width, this.height);
    }
}