import styled from 'styled-components';
import { AppButtonProps, AppDivProps } from './types/designTokens';

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
  flex: ${({ $cusomizedflex = null }) => $cusomizedflex};
  flex-wrap: wrap;
  flex-direction: ${({ $customizeddir = 'row' }) => $customizeddir};
  justify-content: center;
  align-items: center;
  gap: ${({ theme, $customizedgap = 'md' }) => theme.spacing[$customizedgap]};
  margin-bottom: ${({ theme, $customizedverticalmargin = 'sm' }) =>
    theme.spacing[$customizedverticalmargin]};
  margin-top: ${({ theme, $customizedverticalmargin = 'sm' }) =>
    theme.spacing[$customizedverticalmargin]};
`;

const AppButton = styled.button<AppButtonProps>`
  background-color: ${({ theme, $customizedbackground = 'cardBackground' }) =>
    theme.colors[$customizedbackground]};
  color: ${({ theme, $customizedcolor = 'textLight' }) =>
    theme.colors[$customizedcolor]};
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

export { AppButton, AppContainer, AppDiv, AppText };

