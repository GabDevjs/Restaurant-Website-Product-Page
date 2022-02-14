import React from "react";
import styled from "styled-components";
import { ProductsBox } from "./Productbox";
import productImage1 from "../images/s1.png";
import productImage2 from "../images/s2.png";

export function Products() {
  const Product = styled.div`
    width: 100%;
    height: 120vh;
    box-sizing: border-box;
    font-family: "Lato";
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-top: 40px;
    background-color: #ffffff;

    h1 {
      font-family: "Alfa Slab One";
      letter-spacing: 2px;
      color: #3d2514;
      font-size: 3rem;
    }

    p {
      font-family: "Bebas Neue";
      letter-spacing: 1px;
      color: #3d2514;
      font-size: 0.8rem;
      margin-top: -15px;
      margin-bottom: 35px;
    }
  `;

  const ConatinerProduct = styled.div`
    display: flex;
    justify-content: center;
    align-content: center;
  `;

  return (
    <Product id="products">
      <h1>Choosse & Enjoy</h1>
      <p>
        rem ipsum dolor sit amet, consectetur adipiscing elit. Proin vel egestas
        nulla, ultricies vulputate mauris.
      </p>
      <ConatinerProduct>
        <ProductsBox image={productImage1} title="Luger Burger" />
        <ProductsBox image={productImage2} title=" La Pigeon Burger" />
        <ProductsBox image={productImage1} title="Luger Burger" />
      </ConatinerProduct>
    </Product>
  );
}
