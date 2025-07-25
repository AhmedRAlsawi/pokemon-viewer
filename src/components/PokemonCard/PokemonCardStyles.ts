import styled from 'styled-components';
import { PokemonImageProps } from '../../styles/types';

export const CardWrapper = styled.div`
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
  transform: ${({ $isHovered }) => ($isHovered ? 'scale(0.9)' : 'scale(1)')};
  transition: transform 0.4s ease-out;
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
