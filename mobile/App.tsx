import { StatusBar } from 'expo-status-bar';
import React from 'react';

import {useFonts} from 'expo-font'
import { Nunito_600SemiBold, Nunito_800ExtraBold, Nunito_700Bold } from '@expo-google-fonts/nunito'

import Routes from './src/routes'

export default function App() {
  const [fontsLoaded] = useFonts({
    Nunito_800ExtraBold,
    Nunito_700Bold,
    Nunito_600SemiBold,
  })

  if (!fontsLoaded) {
    return null;
  }

  return (
    <Routes />
  );
}


