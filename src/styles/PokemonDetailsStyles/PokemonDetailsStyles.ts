import styled from 'styled-components';

export const DetailWrapper = styled.div`
  margin: ${({ theme }) => theme.spacing.lg};
  background: white;
  border-radius: ${({ theme }) => theme.radii.lg};
  box-shadow: ${({ theme }) => theme.shadows.card};
  overflow: hidden;
  font-family: ${({ theme }) => theme.fonts.base};
`;

export const Header = styled.div`
  background: linear-gradient(90deg, #e7488f, #9f44d3);
  color: white;
  padding: ${({ theme }) => theme.spacing.lg};
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;
export const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: ${({ theme }) => theme.spacing.lg};
  gap: ${({ theme }) => theme.spacing.lg};
`;

export const LeftColumn = styled.div`
  flex: 1;
  min-width: 240px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
`;

export const PokemonImage = styled.img`
  height: ${({ theme }) => theme.sizes.lg};
  width: ${({ theme }) => theme.sizes.lg};
  object-fit: cover;
`;

export const TypeBadge = styled.span`
  background-color: #f08030;
  color: white;
  padding: 4px 12px;
  border-radius: 20px;
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: bold;
`;

export const MetaInfo = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  margin-top: ${({ theme }) => theme.spacing.sm};
`;

export const MetaItem = styled.div`
  text-align: center;
`;

export const MetaLabel = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.textLight};
`;

export const MetaValue = styled.div`
  font-weight: bold;
  font-size: ${({ theme }) => theme.fontSizes.base};
`;

export const RightColumn = styled.div`
  flex: 1;
  min-width: 240px;
`;

export const SectionTitle = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`;

export const StatRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${({ theme }) => theme.spacing.xs};
`;

export const StatName = styled.span`
  width: 100px;
`;

export const StatBarWrapper = styled.div`
  background: #e0e0e0;
  flex: 1;
  height: 6px;
  border-radius: 3px;
  overflow: hidden;
  margin: 0 8px;
`;

export const StatBar = styled.div<{ value: number }>`
  height: 100%;
  width: ${({ value }) => value}%;
  background-color: #000;
  transition: width 0.3s ease;
`;

export const StatValue = styled.span`
  width: 30px;
  text-align: right;
`;

export const AbilitiesWrapper = styled.div`
  margin-top: ${({ theme }) => theme.spacing.base};
`;

export const AbilityTag = styled.span<{ hidden?: boolean }>`
  display: inline-block;
  background: ${({ hidden }) => (hidden ? '#e0e0e0' : '#f2f2f2')};
  color: #333;
  padding: 4px 10px;
  border-radius: 16px;
  margin-right: 8px;
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: 500;

  &::after {
    content: ${({ hidden }) => (hidden ? "' (Hidden)'" : "''")};
    font-size: ${({ theme }) => theme.fontSizes.xs};
    color: #888;
  }
`;

export const Experience = styled.div`
  margin-top: ${({ theme }) => theme.spacing.base};
  font-size: ${({ theme }) => theme.fontSizes.lg};
  font-weight: bold;
  color: #8e44ec;
`;
