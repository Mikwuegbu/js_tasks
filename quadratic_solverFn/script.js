

const quadraticForm = (a, b, c) => {

    const x = [];
    const discriminant = b * b - 4 * a * c;

    //Quadratic eqn is invalid when A = 0


    if (a == 0) {
        console.log("Invalid Equation")
    } else if (discriminant < 0) {

        console.log("No real roots");

    } else if (discriminant === 0) {

        // One real root exits

        x = x.push(-b / (2 * a));
        return console.log(`One real root: ${x}`);
    } else {

        //if two real roots exits

        const x1 = (-b + Math.sqrt(discriminant)) / (2 * a);
        const x2 = (-b - Math.sqrt(discriminant)) / (2 * a);
        x.push(x1, x2);
        return {
            x,
            conditions: "Two real roots",
        };
    }
}


quadraticForm(0, 1, 0);