import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import Header from "../components/Header"

const Product = () => {

    let { id } = useParams()

    const [ product, setProduct ] = useState({})

    console.log(id)

    useEffect(() => {
        fetchProduct()
    }, [])

    let fetchProduct = async () => {
        let request = await fetch("https://fakestoreapi.com/products/" + id)
        let data = await request.json()
        console.log(data)
        setProduct(data)
        // setProducts(data)
    }


    return (
        <>
            <Header />
            <div style={{
                maxWidth: "450px",
                margin: "80px auto"
            }}>
                <h1>{product.title}</h1>
                <img width={"300px"} src={product.image} />
            </div>
        </>
    )
}

export default Product