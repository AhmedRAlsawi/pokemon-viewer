import React, { useState } from 'react';
import { PokemonWithImage } from '../../types';
import { padStartFormat } from '../../utils';
import { CardWrapper, ImageWrapper, PokemonImage, PokemonName, PokemonOrder } from './PokemonCardStyles';


const PokemonCard: React.FC<PokemonWithImage> = ({
  id,
  images,
  name
}) => {
  const formattedId = padStartFormat(id);
  const { pngImage, gifImage } = images;
  const [isHovered, setIsHovered] = useState(false);

  return (
    <CardWrapper to={`/pokemon/${id}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <ImageWrapper>
        <PokemonImage
          $isHovered={isHovered}
          src={isHovered ? gifImage : pngImage}
          alt={name}
          loading="lazy"
          onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
            if (isHovered) {
              e.currentTarget.src = pngImage;
            }
          }}
        />
      </ImageWrapper>
      <PokemonName>{name}</PokemonName>
      <PokemonOrder>{formattedId}</PokemonOrder>
    </CardWrapper>
  );
};

export { PokemonCard };
