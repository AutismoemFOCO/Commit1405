import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { RotasStack } from './src/rotas/RotasStack';

const color = {
  azulPadrao: '#81B1FA',
  azulClaro: '#96C0FF',
  azulCaneta: '#2C78E9'
}

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <RotasStack />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
});

