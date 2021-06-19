import React from 'react';

import { pokemonDefaultImage } from '../../../../shared/config';
import { StyledBadge, StyledRow, PokemonImage } from '../../../../styled';
import capitalizeFirstLetter from '../../../../shared/utilites';

const SingleCard = ({ pokemonData }) => {
  const { name, sprites, types } = pokemonData;

  return (
    <>
      <StyledRow.centerContent>
        {capitalizeFirstLetter(name)}
      </StyledRow.centerContent>
      <StyledRow.centerContent>
        <PokemonImage variant="top" src={sprites.front_default || pokemonDefaultImage} alt={name} />
      </StyledRow.centerContent>
      <StyledRow.centerContent>
        {types.map((singleType) => (
          <StyledBadge type={singleType.type.name} key={singleType.type.name}>
            {singleType.type.name}
          </StyledBadge>
        ))}
      </StyledRow.centerContent>
    </>
  );
};
export default SingleCard;
