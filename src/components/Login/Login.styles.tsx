import React from 'react'
import { StyleSheet, TouchableWithoutFeedback } from 'react-native'
import { AppStyles, AppColors } from '../../../Styles'

export const Styles = StyleSheet.create({

  background: {
    flex: 1,
    backgroundColor: AppColors.DarkBlue,
    alignItems: 'center',
    justifyContent: 'center'
  },
  container: {
    position: 'relative',
    backgroundColor: 'white',
    height: '40%',
    minHeight: 350,
    width: '90%',
    borderRadius: 90,
    paddingTop: 60,
    paddingLeft: 30,
    paddingRight: 30
  },
  textInput: {
    backgroundColor: AppColors.DarkBlue,
    borderRadius: 15,
    fontSize: 20,
    padding: 6,
    paddingLeft: 12,
    paddingRight: 12,
    color: 'white',
    marginBottom: 12
  },
  floatingButton: {
    position: 'absolute',
    top: '50%',
    backgroundColor: AppColors.LessDarkBlue,
    width: '60%'
  },
  floatingButtonText: {
    color: 'white',
    fontSize: 20
  },
  floatingButtonLeft: {
    left: '-25%',
    borderBottomRightRadius: 30,
    borderTopRightRadius: 30
  },
  floatingButtonRight: {
    right: '-25%',
    borderBottomLeftRadius: 30,
    borderTopLeftRadius: 30
  },
  floatingButtonPress: {
    padding: 12
  },
  floatingButtonPressRight: {
    paddingLeft: 32
  },
  floatingButtonPressLeft: {
    paddingRight: 32
  }

})
