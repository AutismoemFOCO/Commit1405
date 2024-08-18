import { StyleSheet } from "react-native"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { NavigationContainer } from "@react-navigation/native"
import { Ionicons } from "@expo/vector-icons"

const color = {
    azulPadrao: '#81B1FA'
  }

import Home from '../../telas/home/home'
import Direitos from '../../telas/direitos/direitos'
import Info from '../../telas/info/info'
import Apoio from '../../telas/apoio/apoio'

const Tab = createBottomTabNavigator();

export default function TabBar() {

    return (
        <Tab.Navigator
            screenOptions={{
                tabBarStyle:{
                    position: 'absolute',


                    bottom: 14,
                    left: 15,
                    right: 15,
                    elevation: 0,
                    borderRadius: 15,
                    height: 52,
                    flex: 1,
                    justifyContent: 'center',
                    alignContent: 'center',
                    borderWidth: 2,
                    borderColor: color.azulPadrao,
                    fontSize: 8,
                    borderTopWidth: 2
                    
                    
                }
            }}>
            <Tab.Screen
                name="Home"
                component={Home}
                style={styles.label}
                options={{
                    headerShown: false,
                    tabBarIcon:({color, size, focused}) => {
                        if(focused){
                            return <Ionicons name="home" size={size} color={'#81B1FA'}/>
                        }
                        return <Ionicons name="home-outline" size={size} color={color}/>
                    }
                    
                    
                }}
                
                 />

            <Tab.Screen
                name="Direitos"
                component={Direitos}
                style={styles.label}
                options={{
                    headerShown: false,
                    tabBarIcon:({color, size, focused}) => {
                        if(focused){
                            return <Ionicons name="globe" size={size} color={'#81B1FA'}/>
                        }
                        return <Ionicons name="globe-outline" size={size} color={color}/>
                    }
                    
                    
                }} />

            <Tab.Screen
                name="Info"
                component={Info}
                style={styles.label}
                options={{
                    headerShown: false,
                    tabBarIcon:({color, size, focused}) => {
                        if(focused){
                            return <Ionicons name="newspaper" size={size} color={'#81B1FA'}/>
                        }
                        return <Ionicons name="newspaper-outline" size={size} color={color}/>
                    }
                    
                    
                }} />

            <Tab.Screen
                name="Apoio"
                component={Apoio}
                style={styles.label} 
                options={{
                    headerShown: false,
                    tabBarIcon:({color, size, focused}) => {
                        if(focused){
                            return <Ionicons name="hand-left" size={size} color={'#81B1FA'}/>
                        }
                        return <Ionicons name="hand-left-outline" size={size} color={color}/>
                    }
                    
                    
                }} />
        </Tab.Navigator>

    )

}

const styles = StyleSheet.create({
    label:{
        fontSize: 10
    }
    

})