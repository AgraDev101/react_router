import Header from "../components/Header"
import { useState } from "react"
import Tab1 from "../components/Tab1";
import Tab2 from "../components/Tab2";

const Home = () => {
    const [ tab, setTab ] = useState("Tab1")

    // Short Circuit Evaluation

    let a = 1

    let b = 3

    let c = 5

    let result = ((a > b) && "abc") || (b < c) && "123" // false AND True => False

    return (
        <>
            <Header />
            <h1>Home Page</h1>
            <div >
                <button onClick={() => setTab("Tab1")} type="button" class="btn btn-primary">Tab 1</button>
                <button onClick={() => setTab("Tab2")} type="button" class="btn btn-primary">Tab 2</button>
            </div>
            {
                (tab == "Tab1") && (<Tab1 />) || (tab == "Tab2") && (<Tab2 />)
            }
            {/* <p className="text-center">{number}</p>
            <p className="text-center">{number2}</p>
            <button onClick={incrementNumber}>Increase number</button>
            <button onClick={incrementNumber2}>Increase number2</button> */}
            {/* <Title />
            <Paragraph /> */}
        </>
    )
}

export default Home