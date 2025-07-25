import { DefaultTheme } from 'styled-components';

export interface AppDivProps {
  customizedDir?: 'row' | 'column';
  customizedGap?: keyof DefaultTheme['spacing'];
  customizedVerticalMargin?: keyof DefaultTheme['spacing'];
}

export interface AppButtonProps {
  customizedBackground?: keyof DefaultTheme['colors'];
  customizedColor?: keyof DefaultTheme['colors'];
}
