

const quadraticForm = (a, b, c) => {

    let x = [];
    const discriminant = b * b - 4 * a * c;

    //Quadratic eqn is invalid when A = 0


    if (a == 0) {
        console.log("Invalid Equation")
    } else if (discriminant < 0) {

        console.log("No real roots");

    } else if (discriminant === 0) {

        // One real root exits

        x.push(-b / (2 * a));
        return console.log(`One real root: ${x}`);
    } else {

        //if two real roots exits

        const x1 = (-b + Math.sqrt(discriminant)) / (2 * a);
        const x2 = (-b - Math.sqrt(discriminant)) / (2 * a);
        x = x.push(x1, x2);
        return console.log(x);
    }
}


console.log(quadraticForm(0, -3, 2));