import { createGlobalStyle } from "styled-components";
import styled from 'styled-components';


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
}
span{
  position: absolute;
  left: 50px;
}
`;

export default GlobalStyle;
