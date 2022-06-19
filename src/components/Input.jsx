import { View, Text, TextInput, StyleSheet } from 'react-native'
import React from 'react'

export default function Input({ placeholder, secureTextEntry }) {
  return (
    <View>
      <TextInput placeholder= {placeholder} style={styles.input}/>
    </View>
  )
}

const styles = StyleSheet.create({
  input: {
      height: 48,
      borderBottomWidth: 1,
      borderBottomColor: '#ccc',
      marginBottom: 25,
      padding: 10
  }
})