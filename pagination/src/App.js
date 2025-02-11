import {useState, useEffect} from "react";
import './App.css';

function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [loadingError, setLoadingError] = useState(null);
  const [page,setPage] = useState(1);

  const fetchProducts =async () => {
      try {
        setLoading(true);
        const response = await fetch(`https://dummyjson.com/products?limit=100`);
        if(!response.ok) {
          throw new Error("Something wrong happened!");
        }
        const data = await response.json();
        console.log(data.products);
        setProducts(data.products);
        setLoading(false);
      }catch(err) {
        setLoadingError(err);
      }finally {
        setLoading(false);
      }

  }
  useEffect(() => {
    fetchProducts();
  }, []);

  if(loading) {
    return <div className="loading">Loding....</div>
  }
  if(loadingError) {
    console.log(loadingError);
  }
  return (
    <div className="App">
      <div className="products">
        {products.slice(page * 10 - 10, page * 10).map((product) => {
          return <span key={product.id} className="single_product">
            <img src={product.thumbnail} alt={product.title} />
            <p>{product.title}</p>
          </span>
        })}
      </div>
      <div style={{ display: "flex", justifyContent: "center", margin: "5px"}}>
        <span style={{border: "1px solid #ccc", cursor: "pointer", userSelect: "none"}}>
          <button style={{opacity: `${page === 1 ? 0 : 1}`}} disabled={page === 1} onClick={() => setPage(page - 1)}>◀️</button>
          {[...Array(Math.floor(products.length/10))].map((_, index) => {
            return <span onClick={() => setPage(index + 1)} style={{ padding: "0 5px ",  textAlign: "center", borderLeft: "1px solid #ccc", backgroundColor: `${page === index + 1 ? "#ccc" : ""}`}}>{index + 1}</span>
          })}
          <button onClick={() => setPage(page + 1)} disabled={page === Math.floor(products.length / 10)} style={{marginLeft: "1px solid #ccc",opacity: `${page === Math.floor(products.length / 10) ? 0 : 1}`}}>▶️</button>
        </span>
      </div>
    </div>
  );
}

export default App;
