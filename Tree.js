class Tree extends BaseClass{

    constructor(x, y, width, height){
    
        super(x, y, width, height);
        Body.setStatic(this.body, true);
        this.image = loadImage("tree.png");
    }

    display(){
        super.display();
    }
}