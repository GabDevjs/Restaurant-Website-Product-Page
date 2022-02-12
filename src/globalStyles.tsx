import { createGlobalStyle } from 'styled-components';

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
`;

export default GlobalStyle;