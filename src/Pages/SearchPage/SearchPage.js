import { useSearchParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

function SearchPage() {
  // const [searchParams] = useSearchParams();
  // console.log(searchParams);
  // const query = searchParams.get("query"); // get ?query=laptop
  // const [results, setResults] = useState([]);

  // useEffect(() => {
  //   async function fetchResult() {
  //     if (query) {
  //       let response = await axios.get(
  //         "https://dummyjson.com/products/search?q=" + query
  //       );
  //       setResults(response.data.products);
  //     }
  //   }
  //   fetchResult();
  // }, [query]);

  // return (
  //   <div className="container mt-4">
  //     <h2>Search Results for: {query}</h2>

  //     {results.map(p => (
  //       <div key={p.id} className="border p-3 mb-3">
  //         <h4>{p.title}</h4>
  //         <img src={p.thumbnail} width="100" alt="" />
  //         <p>${p.price}</p>
  //       </div>
  //     ))}
  //   </div>
  // );
}

export default SearchPage;
