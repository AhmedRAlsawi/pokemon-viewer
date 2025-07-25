import React from 'react';
import { electricity } from '../assets';
import { PokemonCard } from '../components';
import { useListPokemon } from '../hooks';
import { AppButton, AppContainer, AppDiv, AppText } from '../styles';
const HomePageScreen: React.FC = () => {
  // TODO: Two buttons, one for pagination view and one for grid view
  // TODO: pagination controls to navigate through the list of Pokemon
  // TODO: pagination controles x of y ( z pokemon shown)
  const { data, isLoading, isError } = useListPokemon({ limit: 12, offset: 0 });

  if (isLoading) return <AppContainer>
    <AppText>Loading Pokémon list...</AppText>
  </AppContainer>;
  if (isError) return <AppContainer><AppText>Error loading Pokémon list</AppText></AppContainer>;
  return (
    <AppContainer>
      <AppDiv $customizedgap='md'>
        <img src={electricity} alt="Pokédex" />
        <h1>Pokédex</h1>
      </AppDiv>
      <AppText>Discover and explore Pokemon with page controls</AppText>
      <AppDiv $customizedgap='md'>
        <AppButton>Pagination View</AppButton>
        <AppButton>Grid View</AppButton>
      </AppDiv>
      <AppDiv
        $customizeddir='row'
        $customizedverticalmargin='md'
      >
        {data && data.map(({ name, url, id, images }) => (
          <PokemonCard key={id} name={name} url={url} images={images} id={id} />
        ))}

      </AppDiv>
    </AppContainer>
  );
};

export default HomePageScreen;
