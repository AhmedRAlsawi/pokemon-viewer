import React, { useState } from 'react';
import { electricity } from '../assets';
import { InfiniteScrolling, PaginatedScrolling } from '../components';
import { AppButton, AppContainer, AppDiv, AppText } from '../styles';
import { ScrollingTypes } from '../types';

const HomePageScreen: React.FC = () => {
  const [mode, setMode] = useState<ScrollingTypes>('pagination');
  const limit = 20;
  return (
    <AppContainer>
      <AppDiv $customizedgap='md'>
        <img src={electricity} alt="Pokédex" />
        <h1>Pokédex</h1>
      </AppDiv>
      <AppText>Discover and explore Pokemon with page controls</AppText>
      <AppDiv $customizedgap="md">
        <AppButton
          $customizedbackground={mode === 'pagination' ? 'text' : 'cardBackground'}
          $customizedcolor={mode === 'pagination' ? 'background' : 'text'}
          onClick={() => setMode('pagination')}
        >
          Pagination View
        </AppButton>
        <AppButton
          $customizedbackground={mode === 'infinite' ? 'text' : 'cardBackground'}
          $customizedcolor={mode === 'infinite' ? 'background' : 'text'}
          onClick={() => setMode('infinite')}
        >
          Grid View
        </AppButton>
      </AppDiv>
      {mode === 'pagination' ? (
        <PaginatedScrolling
          mode={mode}
          limit={limit}
        />
      ) : (
        <InfiniteScrolling
          mode={mode}
          limit={limit} />)}
    </AppContainer>
  );
};

export default HomePageScreen;
