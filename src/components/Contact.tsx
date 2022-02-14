import React from "react";
import styled from "styled-components";
import ContactImg from "../images/footer.png";

export function Contact() {
  const Contact = styled.div`
    margin-top: 120px;
    background-image: url(${ContactImg});
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    h1 {
      font-size: 3.5rem;
      color: #3d2514;
      font-weight: 500;
      margin: 0px;
      padding: 0px;
      font-family: "Alfa Slab One";
      margin-bottom: 80px;
    }

    form {
      width: 600px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin-bottom: 40px;
    }

    form input,
    form textarea {
      width: 100%;
      height: 50px;
      margin: 5px 0px;
      padding: 10px;
      border: none;
      outline: none;
      background-color: #110c09;
      color: #ffffff;
      border-radius: 5px;
    }

    form textarea {
      height: 150px;
    }

    form input[type="submit"] {
      height: 45px;
      background: linear-gradient(90deg, #bf2222 20%, #bf2222);
      color: #ffffff;
      text-transform: uppercase;
    }
  `;

  return (
    <Contact id="contact">
      <h1>Book Your Table</h1>
      <form>
        <input type="text" placeholder="Full Name" />
        <input type="email" placeholder="Type Your E-Mail" />
        <input type="submit" value="BOOk" />
      </form>
    </Contact>
  );
}
