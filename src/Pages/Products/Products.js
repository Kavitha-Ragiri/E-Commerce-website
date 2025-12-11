import React, { useEffect } from "react";
import './Products.css';
import ProductCarousel from "../../Components/ProductCarousel/ProductCarousel";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function Products(){
    const [product, setProduct] = React.useState({});
    const [addedToCart, setAddedToCart] = React.useState(false);
    const navigate = useNavigate()

    let {id} = useParams();
    console.log(id);

    useEffect(()=>{
        async function getProduct(){
            if(id){
                let product = await axios.get('https://dummyjson.com/products/'+id);
            setProduct(product.data);
            }
            
        }
        getProduct();
    },[])

    function addToCart() {
            let existingCart = JSON.parse(localStorage.getItem("cartItems")) || [];

            if (!Array.isArray(existingCart)) {
                existingCart = [];
            }

            const index = existingCart.findIndex(item => item.id === product.id);

            if (index !== -1) {
                existingCart[index].quantity += 1;
            } else {
                existingCart.push({ ...product, quantity: 1 });
            }

            localStorage.setItem("cartItems", JSON.stringify(existingCart));
            setAddedToCart(true);
             toast.success("Product added to cart!");

}
       
    console.log(product.images)
    return(
        <div className="productPage d-flex mt-4 pt-4">
            
        <div className="productImageDiv halfDiv d-flex justify-content-center align-items-center">
            <ProductCarousel images={product.images || []}/>
        </div>
        <div className="productInfoDiv halfDiv d-flex  align-items-start">
            <div className=" d-flex flex-column gap-3 p-5">
                <h1>{product.title}</h1>
                <h3>Price:${product.price}</h3>
                <h3>id{product.id}</h3>
                <h5>{product.category}</h5>
                <p>{product.description}</p>

                <div className="d-flex flex-row justify-content-center gap-3">
                    <button
                    onClick={addToCart}
                    className={`btn ${
                        addedToCart ? "btn-success" : "btn-dark"
                    }`}
                    >
                    {addedToCart ? "Added to Cart ✅" : "Add to Cart"}
                    </button>
                    <button className="btn btn-warning"
                    onClick={()=>navigate("/products")}>Back To Product</button>
                </div>
                

                
            </div>
        </div>


        </div>
        
    )
}
export default Products;