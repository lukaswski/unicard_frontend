import React from 'react';
import { StyledHero, heroImg, StyledImg, MainText } from '../styledComponents/styledHome';
import main from '../img/main.jpg';

const Home = () => (
  <StyledHero>
    <heroImg>
      <StyledImg src={main}/>
    </heroImg>
    <MainText>
      <h1>Zapłać wszystkim</h1>
      <span>bezpieczny portfel, w jednej naklejce</span>
    </MainText>
  </StyledHero>
);

export default Home;
