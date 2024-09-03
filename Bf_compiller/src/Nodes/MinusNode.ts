

class MinusNode{
    public x: number;
    public y: number;

    constructor(x:number, y:number){
        this.x = x;
        this.y = y;
    }

    calc(){
        return this.x - this.y;
    }

}

export default MinusNode