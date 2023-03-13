import React, { useState } from 'react'
import { Button, StyleSheet, Text, TextInput, View, Pressable } from 'react-native'
import DateTimePicker from '@react-native-community/datetimepicker'
import { AppStyles, AppInputs } from '../../Styles'

type InputParamList = {
    label: string;
    inputType: string;
    inputPlaceholder?: string;
}

export default function ListInput ({ label, inputType, inputPlaceholder = '' } : InputParamList) {
  let inputElement

  switch (inputType) {
    case 'date':
      inputElement = InputDate()
      break
    default:
      inputElement = InputText(inputPlaceholder)
      break
  }

  return (

    <View style={[AppStyles.subContainer, AppStyles.subContainerInput]}>

      <Text style={[{ flex: 1 }, AppStyles.inputText]}>{label}</Text>

      {inputElement}

    </View>
  )
}

function InputText (placeholder: string) {
  return (
    <TextInput placeholder={placeholder} style={AppInputs.formInput} />
  )
}

function InputDate () {
  return (
    <DateTimePicker value={new Date()} />
  )
}
