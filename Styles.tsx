import React from 'react'
import { StyleSheet } from 'react-native'

export const AppColors =
{
  DarkBlue: '#2F4159',
  LightBlue: '#7AA7E6',
  MidBlue: '#516F99',
  LessDarkBlue: '#445D80',
  LighterBlue: '#5878A6'
}

export const AppStyles = StyleSheet.create({

  // Container for all main views
  mainContainer: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: AppColors.DarkBlue
  },
  // Big title for all views
  mainTitle: {
    color: 'white',
    textAlign: 'center',
    fontSize: 44,
    fontWeight: 'bold'
  },
  // Main container for the elements on the views
  container: {
    backgroundColor: AppColors.LessDarkBlue,
    width: '95%',
    padding: 6,
    borderRadius: 15
  },
  // Sub container for listed elements
  subContainer: {
    backgroundColor: AppColors.LighterBlue,
    borderRadius: 15
  },
  subContainerInput: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 6,
    paddingLeft: 12,
    paddingRight: 12,
    marginBottom: 8
  },
  inputText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'left',
    textAlignVertical: 'center'
  }
  /* containerList: {
    display: 'flex',
    gap: 6
  } */
})

export const AppInputs = StyleSheet.create({

  formInput: {
    backgroundColor: 'white',
    borderRadius: 15,
    fontSize: 20,
    color: 'white'
  }

})
