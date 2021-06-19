import {
  Badge, Jumbotron, Dropdown, Container, Row,
} from 'react-bootstrap';
import styled from 'styled-components';

export const StyledBadge = styled(Badge)`
  background-color: ${({ type }) => {
    switch (type) {
      case 'fire':
        return 'red';
      case 'water':
        return 'blue';
      case 'grass':
        return 'green';
      case 'poison':
        return 'purple';
      case 'flying':
        return 'skyblue';
      case 'bug':
        return 'darkgreen';
      case 'normal':
        return 'sandybrown';
      case 'fairy':
        return 'pink';
      case 'electric':
        return 'rgb(228, 228, 3)';
      case 'fighting':
        return 'rgb(141, 0, 0)';
      case 'ground':
        return 'saddlebrown';
      case 'rock':
        return 'rosybrown';
      case 'ghost':
        return 'midnightblue';
      case 'steel':
        return 'silver';
      case 'psychic':
        return 'violet';
      case 'ice':
        return 'rgb(209, 209, 209)';
      case 'dragon':
        return 'orange';
      case 'dark':
        return 'black';
      default:
        return 'grey';
    }
  }};
  color: white;
  margin: 5px;
  padding: 8px;
  letter-spacing: 2px;
`;

export const StyledJumbotron = styled(Jumbotron)`
  color: white;
  background-color: rgb(233, 83, 83);
  border-radius: 0;
  margin-bottom: 0;
`;

export const StyledDropdown = styled(Dropdown)`
  margin: 1rem;
`;

export const SingleCardWrapper = styled(Container)`
  cursor: pointer;
  box-shadow: 0px 0px 15px -5px grey;
  border-radius: 6px;
  height: 12rem;
  padding: 1rem;
  margin: 1rem auto;
  width: 12rem;
`;

export const StyledRow = {
  centerContent: styled(Row)`
    justify-content: center;
    align-items: center;
  `,
};

export const PokemonImage = styled.img`
  max-height: 96px;
  max-width: 96px;
`;

export const PaginationList = styled.ul`
  flex-wrap: wrap;
  justify-content: center;
`;
