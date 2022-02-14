import React from "react";
import styled from "styled-components";

export function ProductsBox(props: {
  image: string | undefined;
  title:
    | boolean
    | React.ReactChild
    | React.ReactFragment
    | React.ReactPortal
    | null
    | undefined;
}) {
  const BoxProduct = styled.div`
    background-color: #ffffff;
    width: 300px;
    height: 435px;
    margin: 20px;
    border-radius: 10px;
    overflow: hidden;
    transition: 0.4s ease-in-out;
    position: relative;

    &:hover {
      box-shadow: 2px 2px 12px rgba(184, 98, 0, 0.445);
    }
  `;

  const BoxProductImage = styled.div`
    width: 100%;
    height: 60%;

    img {
      padding: 15px;
      margin-top: 40px;
      width: 100%;
      height: 100%;
    }
  `;

  const BoxProductText = styled.div`
    width: 100%;
    height: 40%;
    background-color: #ffffff;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    flex-direction: column;

    h2 {
      color: #3d2514;
    }
  `;

  const ProductboxButton = styled.div`
    width: 120px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    font-family: "Lato";
    background-color: #bf2222;
    box-shadow: 5px 10px 30px rgba(255, 103, 2, 0.336);
    border-radius: 5px;
    color: #ffffff;

    &:hover {
      background-color: transparent;
      transition: all ease 0.5s;
      color: #3d2514;
      border: 2px solid #3d2514;
    }
  `;

  return (
    <BoxProduct>
      <BoxProductImage>
        <img src={props.image} alt="" />
      </BoxProductImage>
      <BoxProductText>
        <h2>{props.title}</h2>
        <ProductboxButton>Order Now</ProductboxButton>
      </BoxProductText>
    </BoxProduct>
  );
}
