import Header from "../components/Header"
import { useLocation, useNavigate } from "react-router-dom"

const Contact = () => {
    const location = useLocation()
    const navigate = useNavigate()

    let id = 789

    return (
        <>
        <Header />
        <h1>Contact</h1>
        <button onClick={() => navigate("/")} >Go To Home Page</button>
        <button onClick={() => navigate(`/products/${id}`)} >Go To products</button>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint deserunt distinctio corrupti at neque qui vero quas consequuntur, error veniam explicabo. Ex dicta, iure consequuntur unde repellendus officiis molestias earum labore quidem. Natus quisquam quia, error tenetur beatae molestias nihil officiis quod nostrum, nesciunt repudiandae recusandae earum excepturi, reprehenderit facilis?</p>
        </>
    )
}

export default Contact