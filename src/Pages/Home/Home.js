import React, { useEffect } from "react";
import './Home.css';
import Carousel from "../../Components/Carousel/Carousel";
import CategoryCard from "../../Components/CategoryCards/CategoryCards";
import axios from "axios";
import { Link } from "react-router-dom";
import Footer from "../../Components/Footer/Footer";



function Home(){
    const [product,setProduct]=React.useState([])

    useEffect (()=>{
        async function getProducts (){
           //let res=await axios.get('https://dummyjson.com/products')
           let res=await axios.get('https://dummyjson.com/products?limit=15')
        //    console.log(res.data.products);
           setProduct(res.data.products)
           console.log(product);
        }
         getProducts()   
        
    },[])
    return (
        <div className="mt-4 pt-4">
            <Carousel/>
            <div className=" container mt-3">
                <img 
                src="viewproduct.webp" 
                alt="ViewProducts" 
                className="img-fluid w-100"
                style={{ maxHeight: "300px", objectFit: "cover" ,border:"10px", borderRadius:"5px" }}
            />
            </div>
            

           <div className="container text-center text-md-start my-3">
                <Link 
                    to="/products" 
                    className="btn btn-warning mb-3"
                >
                    View All Products
                </Link>

                <h2 className="fw-bold">Categories</h2>
                </div>

            <div className="container">
                <div className="row g-3">
                    <div className="col-6 col-md-4 col-lg-3">
                    <Link to="/category/beauty" className="text-decoration-none text-dark">
                        <CategoryCard fileName="beauty.jpg" categoryName="Beauty" />
                    </Link>
                    </div>

                    <div className="col-6 col-md-4 col-lg-3">
                    <Link to="/category/groceries" className="text-decoration-none text-dark">
                        <CategoryCard fileName="grocery.jpg" categoryName="Groceries" />
                    </Link>
                    </div>

                    <div className="col-6 col-md-4 col-lg-3">
                    <Link to="/category/fragrances" className="text-decoration-none text-dark">
                        <CategoryCard fileName="fragrance.jpeg" categoryName="Fragrances" />
                    </Link>
                    </div>

                    <div className="col-6 col-md-4 col-lg-3">
                    <Link to="/category/furniture" className="text-decoration-none text-dark">
                        <CategoryCard fileName="furniture.jpg" categoryName="Furniture" />
                    </Link>
                    </div>

                </div>
    </div>

   <div className=" container mt-3">
                <img 
                src="bannerHome.jpg" 
                alt="BannerHome" 
                className="img-fluid w-100"
                style={{ maxHeight: "300px", objectFit: "cover" ,border:"10px", borderRadius:"5px" }}
            />
            </div>
                   <Footer/>
            
        </div>
    )
}

export default Home;