import React, { useState, useEffect } from "react";
import styled from "styled-components";
import GlobalStyle from "./globalStyles";
import { css } from "@emotion/css";
import PropagateLoader from "react-spinners/PropagateLoader";
import { Header } from "./components/Header";
import { Products } from "./components/Products";
import { About } from "./components/About";
import { Contact } from "./components/Contact";

function App() {
  const AppStyle = styled.div`
    text-align: center;
  `;

  const override = css`
    display: block;
    border-color: red;
    margin-top: 50%;
  `;

  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <AppStyle>
     {
      loading ? <PropagateLoader color=
          {"#3d2514"} loading={loading} css={override} size={30} />
          :
          <>
            <GlobalStyle/>
            <Header />
            <Products/>
            <About/>
            <Contact/>
          </>
     }
    </AppStyle>
  );
}

export default App;
