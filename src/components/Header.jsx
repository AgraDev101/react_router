import Home from "../pages/Home"
import Contact from "../pages/Contact"
import { NavLink, useLocation } from "react-router-dom"
import Products from "../pages/Products"

const Header = () => {
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
                </ul>
            </section>
        </>
    )
}

export default Header