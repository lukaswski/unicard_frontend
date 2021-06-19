import React from 'react';
import { useHistory } from 'react-router-dom';
import {
  StyledHero, heroImg, StyledImg, MainText, StyledSection, StyledFooter, StyledIcons, StyledMainSlogan, IconWrapper, ValueHead, HeroTxt
} from '../styledComponents/styledHome';
import { LogoImg } from '../styledComponents/styledNavbar';
import main from '../img/main.jpg';
import save from '../img/save.png';
import loved from '../img/loved.png';
import printIt from '../img/printIt.png';
import QR from '../img/QR.png';
import step1 from '../img/step1.png';
import step2 from '../img/step2.png';
import step3 from '../img/step3.png';
import step4 from '../img/step4.png';
import Logo_Qcard from '../img/Logo_Qcard.png';
import { StyledButton } from '../styledComponents/styledLogin';

const stepsToUse = [
  {
    head: 'wygeneruj kod',
    image: step1,
  },
  {
    head: 'zeskanuj naklejkę',
    image: step2,
  },
  {
    head: 'potwierdź transakcję',
    image: step3,
  },
  {
    head: 'sprawdź historię',
    image: step4,
  },
];

const sections = [
  {
    head: 'Łatwość obsługi',
    image: loved,
    site: 'normal',
    describe: 'Zapomnij, że zgubisz portfel, wszystko masz pod ręką w jednej naklejce z ograniczonym budżetem',
  },
  {
    head: 'Bezpieczne transakcje',
    image: save,
    site: 'inverse',
    describe: 'Zapomnij, że zgubisz portfel, wszystko masz pod ręką w jednej naklejce z ograniczonym budżetem',
  },
  {
    head: 'Wystarczy wydrukować naklejkę',
    image: printIt,
    site: 'normal',
    describe: 'Zapomnij, że zgubisz portfel, wszystko masz pod ręką w jednej naklejce z ograniczonym budżetem',
  },
];

const Home = () => {
  const history = useHistory();
  return (
    <>
      <StyledHero>
        <heroImg>
          <StyledImg src={main} className="hero" />
        </heroImg>
        <MainText>
          <StyledMainSlogan>
            <div>
              <HeroTxt>Print & Pay<LogoImg src={Logo_Qcard} /></HeroTxt>
              <span>bezpieczny portfel, w jednej naklejce</span>
            </div>
          </StyledMainSlogan>
          <StyledButton onClick={() => history.push('/login')}>nowe konto</StyledButton>
          <StyledButton className="second" onClick={() => history.push('/login')}>zaloguj się</StyledButton>
        </MainText>
      </StyledHero>
      {sections.map(({
        head, image, describe, site,
      }) => (
        <StyledSection key={head}>
          <h4>
            {head}
          </h4>
          <IconWrapper className={site}>
            <p>{describe}</p>
            <div>
              <StyledIcons src={image} />
            </div>
          </IconWrapper>
        </StyledSection>
      ))}
      <StyledSection className="howToUse">
        <ValueHead>
          Jak uyżywać Qcard
        </ValueHead>
        <IconWrapper>
          {stepsToUse.map(({ head, image }) => (
            <div>
              <StyledImg className="hero" src={image} />
              <h4>{head}</h4>
            </div>
          ))}
        </IconWrapper>
      </StyledSection>
            
      <StyledFooter>
        <h4>Qcard</h4>
        <div>Hack4Lem 2021r</div>
      </StyledFooter>
    </>
  );
};

export default Home;
