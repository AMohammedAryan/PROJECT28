class Stone extends BaseClass{

    constructor(x, y){
        super(x, y, 50, 50);
        this.image = loadImage("stone.png");    
        Body.setStatic(this.body, true);
    }

    display(){
        super.display();
    }
}