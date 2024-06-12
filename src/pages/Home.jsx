import Header from "../components/Header"
import { useState, useEffect } from "react"
import Tab1 from "../components/Tab1"
import Tab2 from "../components/Tab2"


export const Home = () => {

    let [tab, setTab] = useState("tab1")

    useEffect(() => {
        let getData = async () => {
            let res = await fetch("https://jsonplaceholder.typicode.com/posts")
            let data = await res.json()
            console.log(data)
        }
        getData()
    }, [])

    return (
        <>
            <Header />
            <h1>Home Page</h1>
            <div style={{
                display: "flex",
                justifyContent: "space-between",
                maxWidth: "150px",
                margin: "20px auto"
            }}>
                <button onClick={() => setTab("tab1")} type="button" class="btn btn-primary">Tab 1</button>
                <button onClick={() => setTab("tab2")} type="button" class="btn btn-primary">Tab 2</button>
            </div>
            {
                ((tab == "tab1") && <Tab1 />) || ((tab == "tab2") && <Tab2 />)
            }
        </>
    )
}