import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import ProductCards from "../../Components/ProductCards/ProductCards";



function CategoryProducts() {
  const { categoryName } = useParams();
  const [products, setProducts] = useState([])
  const navigate = useNavigate()
  useEffect(()=>{
    async function getData(){
        const response = await axios.get('https://dummyjson.com/products')
        setProducts(response.data.products)
    }
    getData()
  },[categoryName])

  const filteredProducts = products.filter(
    (product) => product.category === categoryName
  );
  console.log(filteredProducts)

  return (
    <div className="container m-5 p-5">
      <div className="d-flex flex-row justify-content-start align-items-center gap-4">
        <button className="btn btn-warning"
        onClick={()=>navigate("/")}>Back</button>
        <h2 className="mb-4">{categoryName} Products</h2>
      </div>


  <div className="container">
    <div className="row g-3">
      {filteredProducts.map((product) => (
        <div key={product.id} className="col-12 col-sm-6 col-md-4 col-lg-3">
          { <ProductCards product={product}/>}
        </div>
      ))}
    </div>
  </div>
</div>

  );
}

export default CategoryProducts;
