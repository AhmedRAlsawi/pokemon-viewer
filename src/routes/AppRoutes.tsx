import { lazy, Suspense } from 'react';

import { Navigate, Route, Routes } from 'react-router-dom';
import { LoadingComp } from '../components';
import ErrorScreen from '../screens/ErrorScreen';
const HomePage = lazy(() => import('../screens/HomePageScreen'));
const PokemonDetails = lazy(() => import('../screens/PokemonDetailsScreen'));

function AppRoutes() {
  return (
    <Suspense fallback={<LoadingComp />}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/pokemon/:id" element={<PokemonDetails />} />
        <Route path="/error" element={<ErrorScreen />} />
        <Route path="*" element={<Navigate to="/error" replace />} />
      </Routes>
    </Suspense>
  );
}

export { AppRoutes };
