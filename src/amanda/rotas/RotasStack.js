import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Inicial from '../telas/inicial/inicial'

import Login from '../telas/login/login'

import Cadastro from '../telas/cadastro/cadastro'

//Homes
import HomeConv from '../telas/homeConv/homeconv'
import TabBar from '../components/menu/tabbar'

//Grupos de Apoio
import Apoio from '../telas/apoio/apoio'
import AMais from '../telas/apoio/aMais'
import AMAAH from '../telas/apoio/amaah'
import Assuma from '../telas/apoio/assuma'
import Gafa from '../telas/apoio/gafa'
import ASA from '../telas/apoio/asa'

//Direito
import Direitos from '../telas/direitos/direitos'
import Direito01 from '../telas/direitos/direito01/direito01'
import Direito02 from '../telas/direitos/direito02/direito02'
import Direito03 from '../telas/direitos/direito03/direito03'
import Direito04 from '../telas/direitos/direito04/direito04'
import Direito05 from '../telas/direitos/direito05/direito05'
import Direito06 from '../telas/direitos/direito06/direito06'
import Direito08 from '../telas/direitos/direito08/direito08'
import Direito07 from '../telas/direitos/direito07/direito07'
import Direito09 from '../telas/direitos/direito09/direito09'
import Direito10 from '../telas/direitos/direito10/direito10'


//Revistas
import Revistas from '../telas/revistas/revistas'

//Formulário
import Formulario from '../telas/formulario/formulario'
import Form from '../telas/formulario/form'

//Infos
import Info from '../telas/info/info'
//import Info3 from '../telas/info/subInfo/info3'
//import Info2 from '../telas/info/subInfo/info2'
import PostDetails from '../telas/info/PostDetail'

//Usuario
import Usuario from '../telas/usuario/usuario'

//Favoritos
import FavoritesScreen from '../telas/favoritos/favoritosScreen'
import CategoryScreen from '../telas/categoria/categoria'


const Stack = createNativeStackNavigator()

export function RotasStack() {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName='login'>


                <Stack.Screen
                    name='inicial'
                    component={Inicial}
                />

                <Stack.Screen
                    name='login'
                    component={Login}
                />

                <Stack.Screen
                    name='cadastro'
                    component={Cadastro}
                />

                <Stack.Screen
                    name='usuario'
                    component={Usuario}
                />

                {/*Home*/}
                <Stack.Screen
                    name='home'
                    component={TabBar}
                />

                <Stack.Screen
                    name='homeconv'
                    component={HomeConv}
                />

                {/*Grupos de Apoio*/}
                <Stack.Screen
                    name='apoio'
                    component={Apoio}
                />

                <Stack.Screen
                    name='aMais'
                    component={AMais}
                />

                <Stack.Screen
                    name='amaah'
                    component={AMAAH}
                />

                <Stack.Screen
                    name='assuma'
                    component={Assuma}
                />

                <Stack.Screen
                    name='gafa'
                    component={Gafa}
                />

                <Stack.Screen
                    name='asa'
                    component={ASA}
                />

                {/*Direitos dos Autistas*/}
                <Stack.Screen
                    name='direitos'
                    component={Direitos}
                />

                <Stack.Screen
                    name='subDireito'
                    component={Direito01}
                />

                <Stack.Screen
                    name='direito2'
                    component={Direito02}
                />

                <Stack.Screen
                    name='direito3'
                    component={Direito03}
                />

                <Stack.Screen
                    name='direito4'
                    component={Direito04}
                />

                <Stack.Screen
                    name='direito5'
                    component={Direito05}
                />

                <Stack.Screen
                    name='direito6'
                    component={Direito06}
                />

                <Stack.Screen
                    name='direito7'
                    component={Direito07}
                />

                <Stack.Screen
                    name='direito8'
                    component={Direito08}
                />

                <Stack.Screen
                    name='direito9'
                    component={Direito09}
                />

                <Stack.Screen
                    name='direito10'
                    component={Direito10}
                />

                {/*Revistas*/}
                <Stack.Screen
                    name='revista'
                    component={Revistas}
                />

                {/*a*/}


                {/*Formulário de Hipótese */}

                <Stack.Screen
                    name='formulario'
                    component={Formulario}
                />

                <Stack.Screen
                    name='startForm'
                    component={Form}
                />

                {/*Informações */}

                <Stack.Screen
                    name='info1'
                    component={Info}
                />

                { /*<Stack.Screen
                    name='info2'
                    component={Info2}
                />

                <Stack.Screen
                    name='info3'
                    component={Info3}
                />*/ }

                <Stack.Screen
                    name='favoritos'
                    component={FavoritesScreen} />

                <Stack.Screen
                    name='details'
                    component={PostDetails} />

<Stack.Screen
                    name='esteriotipia'
                    component={CategoryScreen} />

            </Stack.Navigator>
        </NavigationContainer>
    )
}
/*
//navegação stack

import { useNavigation } from '@react-navigation/native';

    const navegacao = useNavigation()

    function autenticarUsuario() {
        navegacao.navigate('login')
    }

    function novoUsuario() {
        navegacao.navigate('cadastro')
    }
    function homeConv(){
        navegacao.navigate('homeconv')
    }

    function home(){
        navegacao.navigate('home')
    }


        */

