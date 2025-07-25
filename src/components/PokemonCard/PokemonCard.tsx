import React from 'react';
import { CardWrapper, PokemonImage, PokemonName, PokemonOrder } from './PokemonCardStyles';
import { useParams } from 'react-router-dom';

const PokemonCard: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  return (
    <CardWrapper>
      <PokemonImage />
      <PokemonName>s</PokemonName>
      <PokemonOrder>ss</PokemonOrder>
    </CardWrapper>
  );
};

export { PokemonCard };
