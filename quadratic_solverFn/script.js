

const rootCalc = (a, b, c) => {

    let x = [];
    const discriminant = Math.pow(b, 2) - (4 * a * c);

    //Quadratic eqn is invalid when A = 0


    if (a == 0) {
        return "Invalid Equation";
    } else if (discriminant < 0) {

        return "No real roots";

    } else if (discriminant === 0) {

        // One real root exits

        x.push(-b / (2 * a));
        return `One real root: ${x}`;
    } else {

        //if two real roots exits

        const x1 = (-b + Math.sqrt(discriminant)) / (2 * a);
        const x2 = (-b - Math.sqrt(discriminant)) / (2 * a);
        x = x.push(x1, x2);
        return x;
    }
}


console.log(rootCalc(0, -3, 2));
