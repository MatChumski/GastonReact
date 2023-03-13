import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { Button, StyleSheet, Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator, NativeStackScreenProps } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'

import NewExpense from './src/components/NewExpense/NewExpense'
import Home from './src/components/Home/Home'
import ExpenseList from './src/components/ExpenseList/ExpenseList'
import Settings from './src/components/Settings/Settings'
import { AppColors } from './Styles'
import { white } from 'react-native-paper/lib/typescript/styles/themes/v2/colors'

// Listado de las páginas, y los props que cada una puede recibir
type GastonParamList = {
  NewExpense: undefined;
  Home: undefined;
  ExpenseList: undefined;
  Settings: undefined
};

const Tabs = createBottomTabNavigator<GastonParamList>()

export default function App () {
  return (
    <NavigationContainer>
      <Tabs.Navigator
        initialRouteName='Home'
        backBehavior='initialRoute'
        screenOptions={{
          tabBarStyle: {
            backgroundColor: AppColors.LighterBlue
          },
          tabBarShowLabel: false,
          tabBarActiveTintColor: AppColors.DarkBlue,
          tabBarInactiveTintColor: 'white',
          headerStyle: {
            backgroundColor: AppColors.LighterBlue
          },
          headerTintColor: 'white'
        }}
      >
        <Tabs.Screen name='NewExpense' component={NewExpense} />
        <Tabs.Screen name='Home' component={Home} />
        <Tabs.Screen name='ExpenseList' component={ExpenseList} />
        <Tabs.Screen name='Settings' component={Settings} />
      </Tabs.Navigator>
    </NavigationContainer>
  )
}
