import { useEffect, useState } from "react"
import { useLocation, useNavigate, useParams } from "react-router-dom"
import Header from "../components/Header"

const Products = () => {

    const [ products, setProducts ] = useState([])
    const [ sortOrder, setSortOrder ] = useState("option1")

    useEffect(function (){
        fetchProducts()
    }, [])


    async function fetchProducts() {
        let request = await fetch("https://fakestoreapi.com/products")
        let data = await request.json()
        setProducts(data)
    }

    const sortMethods = {
        option1: {
            method: (a, b) => a.price - b.price
        },
        option2: {
            method: (a, b) => b.price - a.price
        },
        option3: {
            method: (a) => a
        }
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
            <div style={{ marginLeft: "70px" }}>
                <div class="form-check form-check-inline">
                    <input onChange={() => setSortOrder("option1")} class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1"/>
                    <label class="form-check-label" htmlFor="inlineRadio1">Order by price low to high</label>
                </div>
                <div class="form-check form-check-inline">
                    <input onChange={() => setSortOrder("option2")} class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
                    <label class="form-check-label" htmlFor="inlineRadio2">Order by price high to low</label>
                </div>
                <div class="form-check form-check-inline">
                    <input onChange={() => setSortOrder("option3")} class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
                    <label class="form-check-label" htmlFor="inlineRadio2">reset</label>
                </div>
            </div>
            <div style={{
                maxWidth: "90%",
                margin: "20px auto 80px auto",
                display: "flex",
                justifyContent: "space-between",
                flexWrap: 'wrap'
            }}>
            {
                products.sort(sortMethods[sortOrder].method).map((product) => {
                    return (
                            <div key={product.id} class="card mb-4 shadow" style={{
                                width: "300px",
                                }}>
                                <img src={product.image} height={"350px"} class="card-img-top p-3" alt="..." />
                                <div class="card-body">
                                    <h5 style={{
                                        cursor: "pointer"
                                    }} onClick={() => navigate("/product/"+product.id)} class="card-title">{product.title.slice(0, 40)}</h5>
                                    <p class="card-text">{product.description.slice(0, 100) + "..."}</p>
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