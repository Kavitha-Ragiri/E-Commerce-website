import React, { useMemo, useState, useEffect } from 'react'
import axios from 'axios'
import ProductCards from "../../Components/ProductCards/ProductCards";
import { useNavigate, useSearchParams } from 'react-router-dom';

function AllProducts() {

  const [allProducts, setAllProducts] = useState([]);
  const [products, setProducts] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [searchParams] = useSearchParams()
  const [sortOption,setSortOption]= useState("")
  const [activeCategory, setActiveCategory] = useState("all")

  const searchQuery = searchParams.get("searchProduct") || "";
  const navigate = useNavigate()

  // Search filter
  const filteredProducts = useMemo(() =>
    products.filter((item) =>
      item.title.toLowerCase().includes(searchText.toLowerCase())
    ),
    [products, searchText]
  );

  // search text sync with URL param
  useEffect(() => {
    setSearchText(searchQuery);
  }, [searchQuery]);


  // ⭐ FIXED CATEGORY FILTER FUNCTION
  const filterByCategory = (category) => {
    if (category === "all") {
      setProducts(allProducts);
      setActiveCategory(category)
    
      return;
    }

    const filtered = allProducts.filter((item) => item.category === category);
    setProducts(filtered);
      setActiveCategory(category)
  };


  // Fetch products
  useEffect(() => {
    async function getProducts() {
      let res = await axios.get('https://dummyjson.com/products');
      setAllProducts(res.data.products);
       setProducts(res.data.products);
      
    }
    getProducts();
  }, []);

  const sortedProducts = useMemo(() => {
          let sorted = [...filteredProducts];

          if (sortOption === "price-low-high") {
            sorted.sort((a, b) => a.price - b.price);
          }
          if (sortOption === "price-high-low") {
            sorted.sort((a, b) => b.price - a.price);
          }
          return sorted;

}, [filteredProducts, sortOption]);



  return (
    <div style={{ backgroundColor: "white" }}>
      <div className='container mt-5 pt-4'>

        <div className='d-flex flex-row justify-content-start gap-5 mt-3 pt-3 align-items-center'>
          <button onClick={() => navigate("/")} style={{border:"none", backgroundColor:"white"}}>
            <span><i class="bi bi-arrow-left"></i> Back</span></button>
        </div>

        <div className="category-bar d-flex justify-content-between align-items-center flex-wrap my-4">

          {/* LEFT SIDE – CATEGORY BUTTONS */}
          <div className="d-flex gap-3 flex-wrap">
            <button
              className={`btn ${activeCategory === "all" ? "btn-dark" : "btn-outline-dark"}`}
              onClick={() => filterByCategory("all")}
            >
              All
            </button>

            <button
              className={`btn ${activeCategory === "beauty" ? "btn-dark" : "btn-outline-dark"}`}
              onClick={() => filterByCategory("beauty")}
            >
              Beauty
            </button>

            <button
              className={`btn ${activeCategory === "groceries" ? "btn-dark" : "btn-outline-dark"}`}
              onClick={() => filterByCategory("groceries")}
            >
              Groceries
            </button>

            <button
              className={`btn ${activeCategory === "fragrances" ? "btn-dark" : "btn-outline-dark"}`}
              onClick={() => filterByCategory("fragrances")}
            >
              Fragrances
            </button>

            <button
              className={`btn ${activeCategory === "furniture" ? "btn-dark" : "btn-outline-dark"}`}
              onClick={() => filterByCategory("furniture")}
            >
              Furniture
            </button>
          </div>

          {/* RIGHT SIDE – SORT DROPDOWN */}
          <div>
            <select
              className="form-select w-auto"
              value={sortOption}
              onChange={(e) => setSortOption(e.target.value)}
            >
              <option value="">Sort By</option>
              <option value="price-low-high">Price: Low to High</option>
              <option value="price-high-low">Price: High to Low</option>
            </select>
          </div>

        </div>



        <div className='container'>
          <div className="d-flex justify-content-start gap-3 flex-wrap" style={{ height: 'auto' }}>
            {sortedProducts.map((product) => (
              <ProductCards key={product.id} product={product} />
            ))}
          </div>
        </div>

      </div>
    </div>
  )
}

export default AllProducts;
