export class Point {
    // private x: number
    // private y: number
    
    // constructor(x?: number, y?: number){
    //     this.x = x
    //     this.y = y
    // }

    // around access modifiers
    // will create class variable with exact same name and initialize with arguments
    constructor(private x?: number, private y?: number){}

    public draw() { 
        console.log('X = ', this.x)
        console.log('Y = ', this.y)
    }

    getDistance(another: Point){ // by default public 
        console.log('another X = ', another.x)
        console.log('another Y = ', another.y)
    }

    // getter & setter 
    // getX() {
    //     return this.x
    // }

    // setX(value: number){
    //     if (value < 0)
    //         throw new Error('value cannot be less than 0.')
    //     this.x = value
    // }

    // properties: we can use these properties like fields 
    get X(){
        return this.x
    }

    set X(value: number){
        if (value < 0)
            throw new Error('value cannot be less than 0.')
        this.x = value
    }

}