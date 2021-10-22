import type { NextPage } from 'next';
import React from 'react';
import PageLayout from '../../components/Layout/PageLayout/PageLayout';
import UltimateButtonPage from '../../sreens/ReleasedComponents/UltimateButtonPage/UltimateButtonPage';

const PlaygroundsScreen: NextPage = () => {
  return (
    <PageLayout>
      <UltimateButtonPage />
    </PageLayout>
  );
};

export default PlaygroundsScreen;
