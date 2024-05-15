import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import Cadastro from './telas/cadastro/cadastro';
import Inicial from './telas/inicial/inicial'



export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Cadastro />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
});

