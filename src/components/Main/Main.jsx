import  { useEffect, useState } from "react";
import axios from "axios";
import { Header } from "../Header/Header";


export const Main = () => {

  const [products, setProducts] = useState([]);
  const [selectedTitle] = useState("");
  const [count, setCount] = useState(0);
  const [selectedProduct, setSelectedProduct] = useState([]);

  const filterProducts = (title, productName) => {
  if (title === "") {
    return products;
  } else {
    const filteredProducts = products.filter(
      (product) => product.title === title
    );
    if (productName) {
      const selected = filteredProducts.find(
        (product) => product.title === productName
      );
      if (selected) {
        setSelectedProduct(selected.title);
      }
    }
    return filterProducts;
  }
};
  useEffect(() => {
    const getProducts = async () => {
      const url = "https://fakestoreapi.com/products";
      const results = await axios.get(url);
      setProducts(results.data);
      console.log(results);
    };
    getProducts();
    }, []);


    return (
      <>
      <Header count={count} selectedProduct={selectedProduct}></Header>
      <div className="flex flex-wrap gap-5 justify-center items-center">
        {products.length === 0 }
        {filterProducts(selectedTitle).map((product, i) => {
          return (
            <>
              <div className="flex flex-col justify-center bg-blue-950 items-center w-[300px] h-[400px] mt-5 border-4 border-black"
                key={i}
              >
                <div className="w-full p-2 flex justify-end items-center">
                  
                </div>
                <img className="   w-[90%] h-[40%]" src={product.image}
                />
                <h2 className="my-4 text-center w-full text-white font-normal">{product.title}</h2>
                <div className="flex flex-col text-center gap-2">
                  <h3 className="text-white font-normal"> Categoria: {product.category}</h3>
                  <h4 className="text-white font-normal">
                    Precio: {product.price}
                  </h4>
                  <button className="bg-white border-2 rounded-lg" onClick={() => {setCount(count + 1);
                  setSelectedProduct(selectedProduct +  product.title)}}> Añadir</button>
                </div>
              </div>
            </>
          );
        })}
      </div>
      </>
    )
  }
  