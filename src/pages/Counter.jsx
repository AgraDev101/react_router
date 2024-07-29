import { increment, decrement, decrement2, increment2, counterState } from "../components/counterSlice";
import { useSelector, useDispatch } from "react-redux";


const Counter = () => {

    const { number, isLoggedIn } = useSelector(counterState)

    const dispatch = useDispatch()

    return (
        <>
        <h1>Counter App</h1>
        <h2>{number}</h2>
        <button onClick={() => dispatch(increment({data: "hello world"}))}>Increment</button>
        <button onClick={() => dispatch(increment2({data: 5}))}>Increment by 5</button>
        <button onClick={() => dispatch(decrement())}>change state</button>
        <button onClick={() => dispatch(decrement2())}>change state2</button>
        </>
    )
}

export default Counter