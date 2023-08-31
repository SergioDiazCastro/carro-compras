import  { useEffect, useState } from "react";
import axios from "axios";
import { Header } from "../Header/Header";


export const Main = () => {

  const [products, setProducts] = useState([]);
  const [selectedCategory,] = useState("");
  const [count, setCount] = useState(0);

  const filterProducts = (category) => {
    if (category === "") {
      return products; 
    } else {
      return products.filter((product) => product.category === category);
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
      
      <Header count={count}></Header>
      <div className="flex flex-wrap gap-5 justify-center items-center">
        {products.length === 0 }
        {filterProducts(selectedCategory).map((product, i) => {
          return (
            <>
              <div className="flex flex-col justify-center bg-blue-950 items-center w-[30%] h-[500px] mt-5 border-4 border-black"
                key={i}
              >
                <div className="w-full p-2 flex justify-end items-center">
                  <button className="rounded-full w-10 text-3xl text-black bg-white flex items-center justify-center h-full"
                    onClick={() => setCount(count + 1)}
                  >
                    +
                  </button>
                </div>
                <img className="w-[80%] h-[60%]" src={product.image}
                />
                <h2 className="my-4 text-center w-full text-white font-normal">{product.title}</h2>
                <div className="flex flex-col text-center gap-2">
                  <h3 className="text-white font-normal"> Categoria: {product.category}</h3>
                  <h4 className="text-white font-normal">
                    Precio: {product.price}
                  </h4>
                </div>
              </div>
            </>
          );
        })}
      </div>
      </>
    )
  }
  