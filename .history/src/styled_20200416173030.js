import {
  Badge, Jumbotron, Dropdown, Container, Row, Modal,
} from 'react-bootstrap';
import styled from 'styled-components';

export const StyledModal = styled(Modal)`
&.form-group{
  padding-left: 0;
}
&.text-center{
  padding-left: 0;
}`;

export const StyledBadge = styled(Badge)`
  background-color: grey;
    &.water {
      background-color: blue;
    }
    &.fire{
      background-color: red;
    }
    &.poison{
      background-color: purple;
    }
    &.flying{
      background-color: skyblue;
    }
    &.grass{
      background-color: rgb(9, 209, 9);
    }
    &.bug{
      background-color: darkgreen;
    }
    &.normal{
      background-color: sandybrown;
    }
    &.fairy{
      background-color: pink;
    }
    &.ice{
      background-color: rgb(149, 235, 209);
    }
    &.electric{
      background-color: rgb(228, 228, 3);
    }
    &.fighting{
      background-color: rgb(141, 0, 0);
    }
    &.ground{
      background-color: saddlebrown;
    }
    &.rock{
      background-color: rosybrown;
    }
    &.ghost{
      background-color: midnightblue;
    }
    &.steel{
      background-color: silver;
    }
    &.psychic{
      background-color: rgb(144, 84, 179);
    }
    &.dragon{
      background-color: orange;
    }
    &.dark{
      background-color: black;
    }
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

