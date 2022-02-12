import styled from "styled-components";
import  GlobalStyle  from "./globalStyles";
import { Navbar } from "./components/Navbar";

function App() {
  const AppStyle = styled.div`
    text-align: center;
  `;

  return (
    <AppStyle>
      <GlobalStyle />
      <Navbar />
    </AppStyle>
  );
}

export default App;
