import React from 'react'
import { Button, StyleSheet, Text, TextInput, View, Pressable } from 'react-native'
import { AppStyles, AppInputs } from '../../../Styles'
import ListInput from '../ListInput'

export default function NewExpense () {
  return (
    <View style={AppStyles.mainContainer}>

      <Text style={AppStyles.mainTitle}>
        New Expense
      </Text>

      <View style={[AppStyles.container]}>

        <ListInput label='Description' inputType='text' />
        <ListInput label='Amount' inputType='text' />
        <ListInput label='Category' inputType='text' />
        <ListInput label='Date' inputType='date' />

      </View>

    </View>
  )
}
