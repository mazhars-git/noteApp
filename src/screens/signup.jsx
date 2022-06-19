import { View, Text, SafeAreaView, Image, TextInput, StyleSheet, Pressable} from 'react-native'
import React from 'react'
import Button from '../components/Button'
import Input from './../components/Input';

export default function Signup() {
  return (
    <SafeAreaView>
        <Image 
            source= {require('../../assets/signup.jpg')} 
            style={{alignSelf: 'center', width: "60%", height: 400}}
        />
        <Text style={{fontWeight: 'bold', textAlign: 'center'}}>Never forget your notes</Text>

        <View style={styles.inputArea}>
            <Input placeholder='Email Address' />
            <Input placeholder='Password' secureTextEntry />
            <Input placeholder='Full Name' />
            <Input placeholder='Age' />
        </View>


        <View 
            style={{
                flex: 1, 
                justifyContent: 'flex-end',
                alignItems: 'center'
                
                }}
        >
            <Button 
                title={"Sign Up"} 
                customStyles={{alignSelf: 'center', color: 'white', marginBottom: 20}}
            />

            <Pressable>
                <Text>
                    Already have an account? {" "}
                    <Text style={{color: 'green', fontWeight: 'bold'}}>Sign In</Text>
                </Text>
            </Pressable>
        </View>
        

    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    inputArea: {
        paddingHorizontal: 26,
        paddingVertical: 26
    },
})