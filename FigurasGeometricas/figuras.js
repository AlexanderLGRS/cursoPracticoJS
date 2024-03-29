const squareSide = document.getElementById("squareSide")

const triangleSideA = document.getElementById("triangleSideA")
const triangleSideB = document.getElementById("triangleSideB")
const triangleBase = document.getElementById("triangleBase")
const triangleHeight = document.getElementById("triangleHeight")

const triangleIsoscelesSideA = document.getElementById("triangleIsoscelesSideA")
const triangleIsoscelesSideB = document.getElementById("triangleIsoscelesSideB")
const triangleIsoscelesBase = document.getElementById("triangleIsoscelesBase")

const circleRadius = document.getElementById("circleRadius")

const textSquare = document.getElementById("textSquare")
const textTriangle = document.getElementById("textTriangle")
const textTriangleIsosceles = document.getElementById("textTriangleIsosceles")
const textCircle = document.getElementById("textCircle")

const selectSquare = document.getElementById("square")
const selectTriangle = document.getElementById("triangle")
const selectCircle = document.getElementById("circle")


// functions

let pi = Math.PI
function square(side) {
    let squarePerimeter = side * 4
    let squareArea = side * side
    textSquare.innerHTML = "Los lados del cuadrado miden: " + side + " cm"
        + "\nEl perimetro del cuadrado mide: " + squarePerimeter + " cm"
        + "\nEl area del cuadrado mide: " + squareArea + " cm2"

}
function triangle(sideA, base, sideC, h) {
    let trianglePerimeter = parseInt(sideA) + parseInt(base) + parseInt(sideC)
    let triangleArea = (base * h) / 2
    textTriangle.innerHTML = "Los lados del triangulo miden: " + sideA + ", " + base + ", " + sideC + " cm"
        + "\nEl perimetro del triangulo mide: " + trianglePerimeter + " cm"
        + "\nEl area del triangulo mide: " + triangleArea + " cm2"
}
function triangleIsosceles(x, y, b) {
    if (x === y) {
        let cateto1 = b / 2
        let hipotenusa = y
        let h = Math.sqrt((hipotenusa * hipotenusa) - (cateto1 * cateto1))
        let triangleIsoscelesPerimeter = parseInt(x) + parseInt(y) + parseInt(b)
        let triangleIsoscelesArea = ((b / 2) * h) / 2
        textTriangleIsosceles.innerHTML = "La altura del triangulo es de: " + h + " cm"
            + "\nEl perimetro del triangulo mide: " + triangleIsoscelesPerimeter + " cm"
            + "\nEl area del triangulo mide " + triangleIsoscelesArea + " cm2"
    }
    else {
        textTriangleIsosceles.innerHTML = "El triangulo no es isosceles"
    }

}
function circle(radius) {
    let circleDiameter = radius * 2
    let circlePerimeter = radius * 2 * pi
    let circleArea = radius * radius * pi
    textCircle.innerHTML = "El radio del circulo mide: " + radius + " cm"
        + "\nEl diametro del circulo mide: " + circleDiameter + " cm"
        + "\nEl perimetro del circulo mide: " + circlePerimeter + " cm"
        + "\nEl area del circulo mide: " + circleArea + " cm2"
}
function squareCall() {
    square(squareSide.value)
}
function triangleCall() {
    triangle(triangleSideA.value, triangleBase.value, triangleSideB.value, triangleHeight.value)
}
function triangleIsoscelesCall() {
    triangleIsosceles(triangleIsoscelesSideA.value, triangleIsoscelesSideB.value, triangleIsoscelesBase.value)
}
function circleCall() {
    circle(circleRadius.value)
}

document.getElementById("sectionSquare").style.visibility = "hidden";
document.getElementById("sectionTriangleE").style.visibility = "hidden";
document.getElementById("sectionTriangleI").style.visibility = "hidden";
document.getElementById("sectionCircle").style.visibility = "hidden";

function display(figura) {
    switch (figura) {
        case "cuadrado":
            document.getElementById("sectionSquare").style.visibility = "visible";
            document.getElementById("sectionTriangleE").style.visibility = "hidden";
            document.getElementById("sectionTriangleI").style.visibility = "hidden";
            document.getElementById("sectionCircle").style.visibility = "hidden";
            break
        case "trianguloE":
            document.getElementById("sectionSquare").style.visibility = "hidden";
            document.getElementById("sectionTriangleE").style.visibility = "visible";
            document.getElementById("sectionTriangleI").style.visibility = "hidden";
            document.getElementById("sectionCircle").style.visibility = "hidden";
            break
        case "trianguloI":
            document.getElementById("sectionSquare").style.visibility = "hidden";
            document.getElementById("sectionTriangleE").style.visibility = "hidden";
            document.getElementById("sectionTriangleI").style.visibility = "visible";
            document.getElementById("sectionCircle").style.visibility = "hidden";
            break
        case "circulo":
            document.getElementById("sectionSquare").style.visibility = "hidden";
            document.getElementById("sectionTriangleE").style.visibility = "hidden";
            document.getElementById("sectionTriangleI").style.visibility = "hidden";
            document.getElementById("sectionCircle").style.visibility = "visible";
            break
        default:
            document.getElementById("sectionSquare").style.visibility = "hidden";
            document.getElementById("sectionTriangleE").style.visibility = "hidden";
            document.getElementById("sectionTriangleI").style.visibility = "hidden";
            document.getElementById("sectionCircle").style.visibility = "hidden";
    }
}


//Triangulo Isosceles

// function triangleIsosceles(x, y, b) {
//     if (x == y) {
//         let cateto1 = b / 2
//         let hipotenusa = y
//         let cateto2 = Math.sqrt((hipotenusa * hipotenusa) - (cateto1 * cateto1))
//         console.log(cateto2);
//     }
//     else {
//         console.log("El triangulo no es isosceles");
//     }

// }