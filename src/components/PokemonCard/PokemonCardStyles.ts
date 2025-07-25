import styled from 'styled-components';

export const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
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

export const PokemonImage = styled.img`
  width: 96px;
  height: 96px;
  object-fit: contain;
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`;

export const PokemonOrder = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.textLight};
`;

export const PokemonName = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.md};
  color: ${({ theme }) => theme.colors.text};
  margin: ${({ theme }) => theme.spacing.sm} 0 0;
  text-transform: capitalize;
`;
