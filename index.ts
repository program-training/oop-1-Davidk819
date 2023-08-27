// class Rectangle {
//     height: number;
//     width: number;

//     constructor (height:number,width:number) {
//         this.height = height;
//         this.width = width;
//     }
//     area():number{
//         return this.height*this.width;
//     }
// }

// class Square extends Rectangle {
//     ribLength:number;

//     constructor(height:number,width:number,ribLength:number){
//         super(height,width);
//         this.ribLength = ribLength;
//     }
//     area(): number {
//         return this.ribLength * this.ribLength
//     }
// }

// class Shape{

//     constructor(){
        
//     }
//     info():string {
//         return `This is a shape`;
//     }
    
// }

// class Rectangle extends Shape {
//     height: number;
//     width: number;

//     static Rec2(rectangle1:Rectangle,rectangle2:Rectangle):Rectangle  {
//         return new Rectangle(rectangle1.height + rectangle2.height,rectangle1.width + rectangle2.width);
//     }

//     constructor (height:number,width:number) {
//         super();
//         this.height = height;
//         this.width = width;
//     }
//     area():number{
//         return this.height*this.width;
//     }
//     info(): string {
//         return "this is a rectangle";
//     }
//     scale(x:number):Rectangle {
//         this.height *= x;
//         this.width *= x;
//         return this;
//     }

// }
// class ColoredRectangle extends Rectangle{
//     color:string;

//     constructor(height:number,width:number,color:string) {
//         super(height,width);
//         this.color = color;
//     }
//     info(): string {
//         return `this is a ${this.color}rectangle`;
//     }


// }


class Shape{

    constructor(){
        
    }
    draw():void {
        console.log( `drawing a shape`);
    }
    
}

class Triangle extends Shape {
    constructor() {
        super();
    }
    draw(): void {
        console.log( `drawing a triangle`)
    }
}
class Circle extends Shape {
    constructor(){ super()}
    draw(): void {
        console.log( `drawing a circle`)
    }
}
class Square extends Shape {
    constructor(){ super()}
    draw(): void {
        console.log( `drawing a square`)
    }
}
let circle = new Circle();
let triangle = new Triangle();
let square = new Square();

let shapesArray: Shape[] = [circle, triangle, square];

for (let shape of shapesArray) {
    shape.draw();
}

function renderShapes(arr:Shape[]):void {
    arr.forEach((item) => {
        item.draw
    })
}