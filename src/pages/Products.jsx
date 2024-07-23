import { useEffect, useState } from "react"
import { useLocation, useNavigate, useParams } from "react-router-dom"
import Header from "../components/Header"

const Products = () => {

    const [ products, setProducts ] = useState([])

    useEffect(function (){
        fetchProducts()
    }, [])

    async function fetchProducts() {
        let request = await fetch("https://fakestoreapi.com/products")
        let data = await request.json()
        setProducts(data)
    }

    
    const location = useLocation()

    if (location.pathname == "/products") {
        document.title = "Products"
    }

    const navigate = useNavigate()

    return (
        <>
            <Header />
            <h1>Products</h1>
            <div style={{
                maxWidth: "90%",
                margin: "80px auto",
                display: "flex",
                justifyContent: "space-between",
                flexWrap: 'wrap'
            }}>
            {
                products.map((product) => {
                    return (
                            <div key={product.id} class="card mb-4 shadow" style={{
                                width: "300px",
                                display: "flex",
                                flexDirection: "column",
                                alignContent: "space-between"
                                }}>
                                <img src={product.image} height={"350px"} class="card-img-top p-3" alt="..." />
                                <div class="card-body">
                                    <h5 style={{
                                        cursor: "pointer"
                                    }} onClick={() => navigate("/product/"+product.id)} class="card-title">{product.title.slice(0, 40)}</h5>
                                    <p class="card-text">{product.description.slice(0, 100)+"..."}</p>
                                    <h6>Price: {product.price}</h6>
                                    <a href="#" class="btn btn-primary">Add To Cart</a>
                                </div>
                            </div>
                    )
                })
            }
            </div>
        </>
    )
}

export default Products