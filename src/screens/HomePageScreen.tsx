import React from 'react';
import { electricity } from '../assets';
import { PokemonCard } from '../components';
import { AppButton, AppContainer, AppDiv, AppText } from '../styles';

const HomePageScreen: React.FC = () => {
  // TODO: Implement the HomePageScreen component logic
  // TODO: call the Pokemon API to fetch a list of Pokemon
  // TODO: Header text Podédex
  // TODO: Description text: "Discover and explore Pokemon with page controls"
  // TODO: Two buttons, one for pagination view and one for grid view
  // TODO: create a PokemonCard component to display individual Pokemon
  // TODO: pagination controls to navigate through the list of Pokemon
  // TODO: pagination controles x of y ( z pokemon shown)
  return (
    <AppContainer>
      <AppDiv customizedGap='md'>
        <img src={electricity} alt="Pokédex" />
        <h1>Pokédex</h1>
      </AppDiv>
      <AppText>Discover and explore Pokemon with page controls</AppText>
      <AppDiv customizedGap='md'>
        <AppButton>Pagination View</AppButton>
        <AppButton>Grid View</AppButton>
      </AppDiv>
      <AppDiv
        customizedDir='row'
        customizedVerticalMargin='md'
      >
        <PokemonCard />
        <PokemonCard />
        <PokemonCard />
        <PokemonCard />
      </AppDiv>
    </AppContainer>
  );
};

export default HomePageScreen;
