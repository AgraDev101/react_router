import Home from "../pages/Home"
import Contact from "../pages/Contact"
import { NavLink, useLocation } from "react-router-dom"
import Products from "../pages/Products"
import Counter from "../pages/Counter"
import Tasks from "../pages/Tasks/Task"
import Quiz from "../pages/Quiz/Quiz"

const Header = (props) => {
    const location = useLocation()

    let activeStyle = {
        fontWeight: "bolder"
    }


    return (
        <>
            <section style={{
                display: "flex",
                alignItems: "center"
            }}>
                <h1>Navbar</h1>
                <ul style={{
                    display: "flex",
                    listStyle: "none",
                    marginTop: "10px"
                }}>
                    <li style={(location.pathname == "/") ? activeStyle : null}>
                        <NavLink style={{ textDecoration: "none" }} to="/" element={<Home />}>Home Page</NavLink>
                    </li>
                    <li style={(location.pathname == "/contact") ? activeStyle : null}>
                        <NavLink style={{ marginLeft: "20px", textDecoration: "none" }} to="/contact" element={<Contact />}>Contact</NavLink>
                    </li>
                    <li style={(location.pathname == "/products") ? activeStyle : null}>
                        <NavLink style={{ marginLeft: "20px", textDecoration: "none" }} to="/products" element={<Products />}>Products</NavLink>
                    </li>
                    <li style={(location.pathname == "/counter") ? activeStyle : null}>
                        <NavLink style={{ marginLeft: "20px", textDecoration: "none" }} to="/counter" element={<Counter />}>Counter</NavLink>
                    </li>
                    <li style={(location.pathname == "/tasks") ? activeStyle : null}>
                        <NavLink style={{ marginLeft: "20px", textDecoration: "none" }} to="/tasks" element={<Tasks />}>Tasks</NavLink>
                    </li>
                    <li style={(location.pathname == "/quiz") ? activeStyle : null}>
                        <NavLink style={{ marginLeft: "20px", textDecoration: "none" }} to="/quiz" element={<Quiz />}>Quiz</NavLink>
                    </li>
                </ul>
            </section>
        </>
    )
}

export default Header