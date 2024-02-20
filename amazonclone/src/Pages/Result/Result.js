import React, { useEffect, useState } from "react";
import classes from "./result.module.css";
import Layout from "../../Components/Layout/Layout";
import { useParams } from "react-router-dom";
import axios from "axios";
import { productUrl } from "../../Api/endPoints";
import ProductCard from "../../Components/Product/ProductCard";
import Loader from "../../Components/Loader/Loader";

function Result() {
  const [result, SetResult] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { categoryName } = useParams();
  useEffect(() => {
    setIsLoading(false);
    axios
      .get(`${productUrl}/products/category/${categoryName}`)
      .then((res) => {
        SetResult(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <Layout>
      <section>
        <h1 style={{ padding: "30px" }}>Results</h1>
        <p style={{ padding: "30px" }}>Category / {categoryName}</p>
        <hr />
        {isLoading ? (
          <Loader />
        ) : (
          <div className={classes.product_container}>
            {result?.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </section>
    </Layout>
  );
}

export default Result;
