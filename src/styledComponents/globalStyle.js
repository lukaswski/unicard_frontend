import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

body{
  margin: 0;
  padding: 0;
}
input{
  width: 300px;
  height: 40px;
  margin: 10px;
  padding-left: 10%;
    &.checkBox{
      height:20px;
      margin: 0;
      padding: 0;
      width: inherit;
    }
    @media(max-width: 775px) {
      width: 200px;
    }
}
h1{
  font-size: 50px;
  letter-spacing: 5px;
}
h5{
  color: grey;
}

`;

export default GlobalStyle;
