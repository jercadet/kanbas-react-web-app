function FunctionParenthesisAndParameters() {
    const square = (a: number) => a * a;
    const plusOne = (a: number) => a + 1;
    const twoSquared = square(2);
    const threePlusOne = plusOne(3);

    return (
        <>
            <h4>Function Parenthesis and Parameters</h4>
            twoSquared = {twoSquared}<br />
            threePlusOne = {threePlusOne}<br />
        </>
    )

}

export default FunctionParenthesisAndParameters