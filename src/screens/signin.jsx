import { View, Text, SafeAreaView, Image, TextInput, StyleSheet, Pressable} from 'react-native'
import React from 'react'

export default function Signin() {
  return (
    <SafeAreaView>
        <Image 
            source= {require('../../assets/signin.jpg')} 
            style={{alignSelf: 'center', width: "60%", height: 400}}
        />
        <Text style={{fontWeight: 'bold', textAlign: 'center'}}>Never forget your notes</Text>

        <View style={styles.inputArea}>
            <TextInput placeholder='Email Address' style={styles.input}/>
            <TextInput placeholder='Password' secureTextEntry style={styles.input}/>
        </View>

        <Pressable>
            <Text></Text>
        </Pressable>

    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    inputArea: {
        paddingHorizontal: 26,
        paddingVertical: 26
    },
    input: {
        height: 48,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        marginBottom: 25,
    }
})