import React from 'react';
import { getLayout } from 'src/layout/PageLayout';
import CharacterReserves from 'src/features/information/character-reserve';
const CharacteristicsReservesPage = () => {
  return <CharacterReserves />;
};

CharacteristicsReservesPage.getLayout = getLayout;
export default CharacteristicsReservesPage;
