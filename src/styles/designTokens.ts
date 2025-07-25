import styled from 'styled-components';
import { AppButtonProps, AppDivProps } from './types/designTokens';
import { theme } from './theme';

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  background-color: ${({ theme }) => theme.colors.background};
  padding: ${({ theme }) => theme.spacing.md};
`;

const AppText = styled.p`
  color: ${({ theme }) => theme.colors.textLight};
  font-size: ${({ theme }) => theme.fontSizes.base};
  margin: ${({ theme }) => theme.spacing.sm} 0;
`;

const AppDiv = styled.div<AppDivProps>`
  display: flex;
  flex-wrap: wrap;
  flex-direction: ${({ customizedDir = 'row' }) => customizedDir};
  justify-content: center;
  align-items: center;
  gap: ${({ customizedGap = 'md' }) => theme.spacing[customizedGap]};
  margin-bottom: ${({ customizedVerticalMargin = 'sm' }) =>
    theme.spacing[customizedVerticalMargin]};
  margin-top: ${({ customizedVerticalMargin = 'sm' }) =>
    theme.spacing[customizedVerticalMargin]};
`;

const AppButton = styled.button<AppButtonProps>`
  background-color: ${({ customizedBackground = 'cardBackground' }) =>
    theme.colors[customizedBackground]};
  color: ${({ customizedColor = 'textLight' }) =>
    theme.colors[customizedColor]};
  border: none;
  padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.md};
  border-radius: ${({ theme }) => theme.radii.sm};
  cursor: pointer;
  font-size: ${({ theme }) => theme.fontSizes.base};
  &:hover {
    background-color: ${({ theme }) => theme.colors.text};
    color: ${({ theme }) => theme.colors.cardBackground};
  }
`;

export { AppContainer, AppText, AppDiv, AppButton };
