// class Rectangle {
//     height: number;
//     width: number;
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var Shape = /** @class */ (function () {
    function Shape() {
    }
    Shape.prototype.draw = function () {
        console.log("drawing a shape");
    };
    return Shape;
}());
var Triangle = /** @class */ (function (_super) {
    __extends(Triangle, _super);
    function Triangle() {
        return _super.call(this) || this;
    }
    Triangle.prototype.draw = function () {
        console.log("drawing a triangle");
    };
    return Triangle;
}(Shape));
var Circle = /** @class */ (function (_super) {
    __extends(Circle, _super);
    function Circle() {
        return _super.call(this) || this;
    }
    Circle.prototype.draw = function () {
        console.log("drawing a circle");
    };
    return Circle;
}(Shape));
var Square = /** @class */ (function (_super) {
    __extends(Square, _super);
    function Square() {
        return _super.call(this) || this;
    }
    Square.prototype.draw = function () {
        console.log("drawing a square");
    };
    return Square;
}(Shape));
var item1 = new Circle();
item1.draw();
