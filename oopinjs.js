//JS Object
const orang = {}
orang.name = 'Adam'
orang.age = 20

console.log(orang) // { name: 'Adam', age: 20 }

//JS Class
class Person{
    constructor(name, age){
        this.name = name
        this.age = age
    }

    introduction(){
        console.log(`My name is ${this.name}. I am ${this.age} years old.`)
    }
}

const orang1 = new Person("Bobi", 21)
console.log(orang1) // Person { name: 'Bobi', age: 21 }

const orang2 = new Person("Chara", 22)
orang2.introduction() // My name is Chara. I am 22 years old.

//Test Class Rectangle
class Rectangle {
    constructor(w, h){
        this.width = w
        this.height = h
    }

    calcArea(){
        return this.width * this.height
    }
}

const persegi = new Rectangle(2,2)
console.log(persegi.calcArea()) // 4

const persegiPanjang = new Rectangle(2,4)
console.log(persegiPanjang.width) // 2
console.log(persegiPanjang.height) // 4

//Test Class Point
class Point {
    constructor(x,y){
        this.x = x
        this.y = y
    }

    //Prototype Method
    coord(){ 
        console.log(`(${this,x}, ${this,y}`)
    }

    //Static Method
    static distance(p1, p2){
        let x = p1.x - p2.x
        let y = p1.y - p2.y
        return Math.hypot(x,y)
    }
}

const t1 = new Point(0,0)
const t2 = new Point(5,12)
console.log(Point.distance(t1,t2)) // 13