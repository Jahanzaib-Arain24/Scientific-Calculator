import * as math from 'mathjs';

const evaluate = (expression, isDeg = true) => {
    try {
        let exprToEval = expression
            .replace(/×/g, '*')
            .replace(/÷/g, '/');

        const scope = {
            pi: Math.PI,
            e: Math.E
        };

        if (isDeg) {
            const degreesToRadians = (val) => (val * Math.PI) / 180;
            const radiansToDegrees = (val) => (val * 180) / Math.PI;

            const degTrig = {
                sin: (x) => Math.sin(degreesToRadians(x)),
                cos: (x) => Math.cos(degreesToRadians(x)),
                tan: (x) => Math.tan(degreesToRadians(x)),
                asin: (x) => radiansToDegrees(Math.asin(x)),
                acos: (x) => radiansToDegrees(Math.acos(x)),
                atan: (x) => radiansToDegrees(Math.atan(x)),
            };
            Object.assign(scope, degTrig);
        }

        const result = math.evaluate(exprToEval, scope);
        return Number.isInteger(result) ? result.toString() : parseFloat(result.toFixed(10)).toString();
    } catch (e) {
        return "Error";
    }
};

const testCases = [
    { expr: "sin(90)", deg: true, expected: "1" },
    { expr: "cos(pi)", deg: false, expected: "-1" },
    { expr: "log10(100)", expected: "2" },
    { expr: "log(e)", expected: "1" }, // In mathjs, log is ln
    { expr: "sqrt(25)", expected: "5" },
    { expr: "5!", expected: "120" },
    { expr: "2^3", expected: "8" },
    { expr: "sin(45) * sqrt(2)", deg: true, expected: "1" }
];

testCases.forEach(tc => {
    const result = evaluate(tc.expr, tc.deg !== undefined ? tc.deg : true);
    console.log(`Test: ${tc.expr} (${tc.deg ? 'Deg' : 'Rad'}) | Expected: ${tc.expected} | Got: ${result} | ${result === tc.expected ? 'PASS' : 'FAIL'}`);
});
