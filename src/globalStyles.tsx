import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Alfa+Slab+One&display=swap');

body {
  margin: 0px;
  padding: 0px;
  background-color: #ffffff;
  font-family: 'Bebas Neue', 'Lato', sans-serif;
}

* {
  box-sizing: border-box;
}

ul {
  list-style: none;
}

a {
  text-decoration: none;
}

button {
  outline: none;
  border: none;
}

input {
  outline: none;
  border: none;
}

html{
  overflow-x: hidden;
  scroll-behavior: smooth;
  scroll-padding-top: 4rem;
}
        
html::-webkit-scrollbar {
  width: .5rem;
}

html::-webkit-scrollbar-thumb {
  background: #bf2222;
  border-radius: 1rem;
}
`;

export default GlobalStyle;
