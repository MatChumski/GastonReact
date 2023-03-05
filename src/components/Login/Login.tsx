import React from 'react'
import { Button, StyleSheet, Text, TextInput, View, Pressable } from 'react-native'
import { AppStyles } from '../../../Styles'
import { Styles } from './Login.styles'
// import Constants from 'expo-constants'

export default function Main () {
  return (
    <View style={Styles.background}>

      <View style={{
        width: '90%',
        height: '30%',
        backgroundColor: 'white',
        borderRadius: 100,
        marginBottom: 12
      }}
      />

      <View style={Styles.container}>
        <TextInput style={Styles.textInput} placeholder='Username / E-Mail' placeholderTextColor='#FFFFFF50' />
        <TextInput style={Styles.textInput} placeholder='Password' placeholderTextColor='#FFFFFF50' />

        <View style={{ marginTop: 10 }}>

          <View style={[Styles.floatingButton, Styles.floatingButtonRight]}>
            <Pressable android_ripple={{ color: 'white', borderless: true }} style={[Styles.floatingButtonPress, Styles.floatingButtonPressRight]}>
              <Text style={[Styles.floatingButtonText, { textAlign: 'left' }]}>LOGIN</Text>
            </Pressable>
          </View>

          <View style={[Styles.floatingButton, Styles.floatingButtonLeft]}>
            <Pressable android_ripple={{ color: 'white', borderless: true }} style={[Styles.floatingButtonPress, Styles.floatingButtonPressLeft]}>
              <Text style={[Styles.floatingButtonText, { textAlign: 'right' }]}>SIGNUP</Text>
            </Pressable>
          </View>
        </View>

      </View>

    </View>
  )
}
