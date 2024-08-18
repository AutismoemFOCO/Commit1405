import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import Cadastro from './src/telas/cadastro/cadastro';
import TabBar from './src/components/menu/tabbar'
import HomeConv from './src/telas/homeConv/homeconv';
import Login from './src/telas/login/login';
import Carrossel from './src/components/carrossel/carrossel';
import Direitos from './src/telas/direitos/direitos';
import Inicial from './src/telas/inicial/inicial'
import Home from './src/telas/home/home'
import Apoio from './src/telas/apoio/apoio';
import SubDireito from './src/telas/direitos/subDireito';
import SubApoio from './src/telas/apoio/subApoio';
import Revistas from './src/telas/revistas/revistas';



const color = {
  azulPadrao: '#81B1FA',
  azulClaro: '#96C0FF',
  azulCaneta: '#2C78E9'
}




export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

        <Revistas />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
});

