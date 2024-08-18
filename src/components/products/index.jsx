import React, { useState } from "react";
import { CardText, Product, ProductsContainer } from "./style";
import axios from "axios";

let count = 0;
const Products = () => {
  const [loading, setLoading] = useState(0);
  const [allProducts, setAllProducts] = useState([]);

  const getProduct = async () => {
    if ((await allProducts.length) === 0) {
      setLoading(1);
      await axios.get("http://localhost:4000/api/products").then((respone) => {
        setAllProducts(respone.data);
      });
      setLoading(0);
      return 1;
    }
  };

  getProduct();

  return (
    <>
      {loading ? (
        <div className="loaderWindow">
          <div className="loader"></div>
        </div>
      ) : (
        ""
      )}
      <ProductsContainer>
        {allProducts?.map((v, i) => {
          return (
            <Product key={v?.id || i}>
              <div className="img">
                {/* <img src={GetPic(v.pics[0])} alt="" /> */}
              </div>
              <CardText>
                <h2>{v?.name}</h2>
                <p>{v?.price.zero}</p>
              </CardText>
            </Product>
          );
        })}
      </ProductsContainer>
    </>
  );
};

export default Products;
