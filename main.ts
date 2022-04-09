import { Point } from './point'

// Basic types
let a: number
let b: boolean
let c: string
let d: any
let e: number[] = [1, 2, 3]
let f: any[] = [1, true, 'a', false]

enum Color {Red, Green, Blue}
let backgroundColor: Color = Color.Red

// let msg: string = 'abc'
// let endsWithC = msg.endsWith('c')

// type assertion 
let msg
msg = 'abc'
// let endsWithC = (msg as string).endsWith('c') // type assertion
let endsWithC = (<string>msg).endsWith('c') // type assertion
// type assertion doesn't change type of variable at run time, 
// just tells typescript compiler about the type of variable so we can access intellisence 


// arrow functions 
let log = function(message){
    console.log(message)
}

let doLog = (message) => {
    console.log(message)
}

// custom types
// interface Point {
//     x: number,
//     y: number,
// }

// let drawPoint = (point: Point) => {
//     // ...
// }
// drawPoint({x: 1, y: 2})

// let getDistance = (pointA: Point, pointB: Point) => {
//     // ...
// }

// cohesion: things that are related should be part of one unit 
// class: groups vaiables (properties) and functions (methods) that are highly related
// interface Point {
//     x: number,
//     y: number,
//     draw: () => void
//     getDistance: () => number
// }

// in interface we can not have implementations 
// in this case we can use class
// classes, constructor, access modifiers 
// class Point {
//     // private x: number
//     // private y: number
    
//     // constructor(x?: number, y?: number){
//     //     this.x = x
//     //     this.y = y
//     // }

//     // around access modifiers
//     // will create class variable with exact same name and initialize with arguments
//     constructor(private x?: number, private y?: number){}

//     public draw() { 
//         console.log('X = ', this.x)
//         console.log('Y = ', this.y)
//     }

//     getDistance(another: Point){ // by default public 
//         console.log('another X = ', another.x)
//         console.log('another Y = ', another.y)
//     }

//     // getter & setter 
//     // getX() {
//     //     return this.x
//     // }

//     // setX(value: number){
//     //     if (value < 0)
//     //         throw new Error('value cannot be less than 0.')
//     //     this.x = value
//     // }

//     // properties: we can use these properties like fields 
//     get X(){
//         return this.x
//     }

//     set X(value: number){
//         if (value < 0)
//             throw new Error('value cannot be less than 0.')
//         this.x = value
//     }

// }

// let point = new Point()
let point = new Point(5, 3)
let x = point.X // get property 
point.X = 9 // set property 
point.draw()
point.getDistance(new Point(10, 6))


// modules 