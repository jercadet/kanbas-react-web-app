function ImpliedReturns() {
    const multiply = (a: number, b: number) => a * b;
    const fourTimesFive = multiply(4, 5);

    return (
        <>
            <h4>Implied Returns</h4>
            fourTimesFive = {fourTimesFive}
        </>
    )
}

export default ImpliedReturns