import styled from 'styled-components';

export const StyledHero = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-wrap: wrap;
`;

export const heroImg = styled.div`
background-image: ;
  width:100%;
  height:100%;
`;

export const MainText = styled.div`
  text-align: right;
  @media(max-width: 600px) {
    text-align: center;
      }
`;
export const HeroTxt = styled.div`
  font-size: 50px;
  letter-spacing: 5px;
`;

export const StyledImg = styled.img`
  width: 20%;
  &.hero{
    width:100%;
  }
`;

export const StyledMainSlogan = styled.div`
  margin-bottom: 80px;
  display: flex;
  
    @media(max-width: 1200px) {
      margin-bottom: 0px;
      }
`;


export const StyledSection = styled.div`
  height: 400px;
  padding: 100px;
  margin: 5% auto;
  text-align: center;
  &.howToUse{
    height: 900px;
    @media(max-width: 1265px) {
      height: 100%;
  }
 
  }
`;

export const StyledIcons = styled.img`
  width: 170px;
  margin-top: 50px;
  
  @media(max-width: 1100px) {
      margin-top: 100px;
  }
`;

export const IconWrapper = styled.div`
margin-top: 60px;
  display:flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;
    &.inverse{
      flex-direction: row-reverse;
    }
`;

export const ValueHead = styled.div`
background-color: #00a2f9;
width: 50%;
margin: 0 auto;
padding: 20px;
color: white;
letter-spacing: 5px;
font-weight: 600;
@media(max-width: 1100px) {
      width: 90%;
  }
`;

export const StyledFooter = styled.div`
  background: #006093;
  width: 100%;
  height: 200px;
  margin-top: 10%;
  text-align: center;
  color: white;
  letter-spacing: 5px;
  padding-top: 120px;
`;

export const StepWrapper = styled.div`
width: 100%;
`;