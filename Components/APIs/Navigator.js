import React,{useState} from 'react'
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Login from '../../Screens/Login.js';
import MainScreen from '../../Screens/MainScreen.js';
import SwipelistScreen from '../../Screens/SwipelistScreen.js';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import personal from '../../Screens/Details'
import Details from '../../Screens/Details';
import colors from '../../constants/Colors/color.js'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import Logout from '../../Screens/Logout.js';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {Drawer} from 'react-native-paper';
// import { createNativeStackNavigator } from "react-navigation-stack";
// import { NavigationContainer } from "react-navigation";

const defaultNavigationOptions = {
  title: "ROUTE PLANNER",
  headerTitleStyle: {
    fontSize: 30,

    fontWeight: "200",
  },
  headerTitleAlign: "center",
  headerStyle: {
    backgroundColor: colors.primaryColor,
  },
  headerTintColor: "white",
};
const backgroundColors = ['white','black','blue','red'];
const HomeStack = createNativeStackNavigator();
const LoginStack = createNativeStackNavigator();
const Tabbar = createMaterialBottomTabNavigator();
// const LoginStack = createNativeStackNavigator({
//     Login:{
//         screen: Login,
//         navigationOptions: {
//             title:'Login',
//             ...defaultNavigationOptions
//         }
//     },
//     List:{
//         screen: SwipelistScreen,
//         navigationOptions:{
//             title:'List',
//             ...defaultNavigationOptions
//         }
//     }
// })

// export default NavigationContainer(LoginStack);
const home = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="Login"
        component={Login}
      />
    </HomeStack.Navigator>
  )
}

export default function Navigator() {
const [active, setactive] = useState('');

  return (
    <NavigationContainer>
      
      <Tabbar.Navigator initialRouteName={'Swipe'} backBehavior={'order'} activeColor={Colors.tabActiveColor} inactiveColor={Colors.tabInactiveColor} shifting={true} barStyle={{backgroundColor:'#2d0659'}} >
        <Tabbar.Screen name='Swipe' component={SwipelistScreen} 
          options={{
            tabBarIcon:({color}) => (<MaterialCommunityIcons name="gesture-swipe" color={color} size={30} /> ),
            tabBarColor:'#e9ed09'
             }}/>
        <Tabbar.Screen name='flat' component={MainScreen} 
            options={{
              tabBarIcon:({color}) => (<MaterialCommunityIcons name="view-list" color={color} size={30} />
               ),
              tabBarColor:'black'

            }}/>
        <Tabbar.Screen name ='Logout' component ={Logout} 
        options={{
          tabBarIcon:({color}) => (<MaterialCommunityIcons name="logout" color={color} size={30} /> ),
          tabBarColor:'#34008f'
        }}/>
      </Tabbar.Navigator>
    </NavigationContainer>

  )
}