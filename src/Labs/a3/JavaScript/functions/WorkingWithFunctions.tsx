import ArrowFunctions from "./ArrowFunctions"
import ES5Functions from "./ES5Functions"
import FunctionDestructing from "./FunctionDestructing"
import FunctionParenthesisAndParameters from "./FunctionParenthesisAndParameters"
import ImpliedReturns from "./ImpliedReturns"

function WorkingWithFunctions() {

    return (
        <div>
            <ES5Functions />
            <ArrowFunctions />
            <ImpliedReturns />
            <FunctionParenthesisAndParameters />
            <FunctionDestructing />
        </div>
    )
}

export default WorkingWithFunctions