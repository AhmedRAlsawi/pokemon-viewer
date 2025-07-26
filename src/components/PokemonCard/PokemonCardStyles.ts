import styled from 'styled-components';
import { PokemonImageProps } from '../../styles/types';
import { Link } from 'react-router-dom';

export const CardWrapper = styled(Link)`
  width: ${({ theme }) => theme.sizes.lg};
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.cardBackground};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.md};
  padding: ${({ theme }) => theme.spacing.base};
  box-shadow: ${({ theme }) => theme.shadows.card};
  text-align: center;
  transition: transform 0.2s ease-in-out;
  cursor: pointer;

  &:hover {
    box-shadow: ${({ theme }) => theme.shadows.hover};
    transform: translateY(-4px);
  }
`;

export const ImageWrapper = styled.div`
  width: ${({ theme }) => theme.sizes.md};
  height: ${({ theme }) => theme.sizes.md};
  background-color: ${({ theme }) => theme.colors.background};
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: ${({ theme }) => theme.radii.md};
  overflow: hidden;
`;

export const PokemonImage = styled.img<PokemonImageProps>`
  width: 100%;
  height: 100%;
  object-fit: ${({ $isHovered }) => ($isHovered ? 'none' : 'contain')};
  transition: object-fit 0.3s ease-in;
`;

export const PokemonOrder = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.md};
  color: ${({ theme }) => theme.colors.textLight};
`;

export const PokemonName = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.md};
  color: ${({ theme }) => theme.colors.text};
  margin: ${({ theme }) => theme.spacing.sm} 0 0;
  text-transform: capitalize;
`;
