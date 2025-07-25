import { DefaultTheme } from 'styled-components';

export interface AppDivProps {
  $customizeddir?: 'row' | 'column';
  $customizedgap?: keyof DefaultTheme['spacing'];
  $customizedverticalmargin?: keyof DefaultTheme['spacing'];
}

export interface AppButtonProps {
  $customizedbackground?: keyof DefaultTheme['colors'];
  $customizedcolor?: keyof DefaultTheme['colors'];
}

export interface PokemonImageProps {
  $isHovered: boolean;
}
