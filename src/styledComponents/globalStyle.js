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
}
h5{
  color: grey;
}

`;

export default GlobalStyle;
