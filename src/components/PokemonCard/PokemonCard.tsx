import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { PokemonWithImage } from '../../types';
import { padStartFormat } from '../../utils';
import { CardWrapper, ImageWrapper, PokemonImage, PokemonName, PokemonOrder } from './PokemonCardStyles';


const PokemonCard: React.FC<PokemonWithImage> = ({ name, url, images, id }) => {
  const formattedId = padStartFormat(id);
  const { pngImage, gifImage } = images;

  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/pokemon/${id}`);
  };

  const [isHovered, setIsHovered] = useState(false);
  return (
    <CardWrapper
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleClick}
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
