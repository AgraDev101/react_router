import { NavLink, useLocation } from "react-router-dom"
import { Home } from "../pages/Home"
import About from "../pages/About"
import Contact from "../pages/Contact"

const Header = () => {
    
    return (
        <div style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "20px"
        }}>
            <h1>Header</h1>
            <ul style={{
                display: "flex",
                listStyle: "none",
            }}>
                <li>
                    <NavLink style={{
                    marginRight: "10px",
                    textDecoration: "none",
                    fontSize: "120%"
                    }} to="/" element={ <Home /> }>Home</NavLink>
                </li>
                <li>
                    <NavLink style={{
                    marginRight: "10px",
                    textDecoration: "none",
                    fontSize: "120%"
                    }} to="/about" element={ <About /> }>About</NavLink>
                </li>
                <li>
                    <NavLink  style={{
                    marginRight: "10px",
                    textDecoration: "none",
                    fontSize: "120%"
                    }} to="/contact" element={ <Contact /> }>Contact</NavLink>
                </li>
            </ul>
        </div>
    )
}
export default Header