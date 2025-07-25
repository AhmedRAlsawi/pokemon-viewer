import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { PokemonName, PokemonOrder } from '../components/PokemonCard/PokemonCardStyles';
import { usePokemonDetails } from '../hooks';
import {
  AbilitiesWrapper,
  AbilityTag,
  AppButton,
  AppDiv,
  Content,
  DetailWrapper,
  Experience,
  Header,
  LeftColumn,
  MetaInfo,
  MetaItem,
  MetaLabel,
  MetaValue,
  PokemonImage,
  RightColumn,
  SectionTitle,
  StatBar,
  StatBarWrapper,
  StatName,
  StatRow,
  StatValue,
  TypeBadge
} from '../styles';
import { PokemonDetailsResponse } from '../types';
import { padStartFormat } from '../utils';

const PokemonDetailsScreen: React.FC = () => {
  const { id } = useParams<{ id: string; }>();
  const navigate = useNavigate();

  const formattedId = padStartFormat(id!);

  const { data, isLoading, isError } = usePokemonDetails(id!);
  const handleBack = () => {
    navigate('/');
  };

  if (isLoading) return <div>Loading...</div>;
  if (isError || !data) return <div>Pokémon not found.</div>;
  return (
    <DetailWrapper>
      <Header>
        <AppButton onClick={handleBack}>
          Back to List
        </AppButton>
        <AppDiv $customizeddir='column' $cusomizedflex={1}>
          <PokemonName>{data.name}</PokemonName>
          <PokemonOrder>{formattedId}</PokemonOrder>
        </AppDiv>
      </Header>

      <Content>
        <LeftColumn>
          <PokemonImage src={data.pokemoneImage} alt={data.name} />
          {data.types.map((type: PokemonDetailsResponse['types'][number]) => (
            <TypeBadge key={type.type.name}>{type.type.name}</TypeBadge>
          ))}

          <MetaInfo>
            <MetaItem>
              <MetaLabel>Height</MetaLabel>
              <MetaValue>{data.height / 10} m</MetaValue>
            </MetaItem>
            <MetaItem>
              <MetaLabel>Weight</MetaLabel>
              <MetaValue>{data.weight / 10} kg</MetaValue>
            </MetaItem>
          </MetaInfo>
        </LeftColumn>

        <RightColumn>
          <SectionTitle>Base Stats</SectionTitle>
          {data.stats.map((stat: PokemonDetailsResponse['stats'][number]) => (
            <StatRow key={stat.stat.name}>
              <StatName>{stat.stat.name.replace('special-', 'Sp. ')}</StatName>
              <StatBarWrapper>
                <StatBar value={Math.min(stat.base_stat, 100)} />
              </StatBarWrapper>
              <StatValue>{stat.base_stat}</StatValue>
            </StatRow>
          ))}

          <AbilitiesWrapper>
            <SectionTitle>Abilities</SectionTitle>
            {data.abilities.map((a: PokemonDetailsResponse['abilities'][number]) => (
              <AbilityTag key={a.ability.name} hidden={a.is_hidden}>
                {a.ability.name}
              </AbilityTag>
            ))}
          </AbilitiesWrapper>

          <Experience>
            Base Experience: <span>{data.base_experience} XP</span>
          </Experience>
        </RightColumn>
      </Content>
    </DetailWrapper>
  );
};

export default PokemonDetailsScreen;
