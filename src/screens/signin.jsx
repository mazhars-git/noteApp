import { View, Text, SafeAreaView, Image, TextInput, StyleSheet, Pressable} from 'react-native'
import React from 'react'
import Button from '../components/Button'

export default function Signin({navigation}) {
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


        <View 
            style={{
                flex: 1, 
                justifyContent: 'flex-end',
                alignItems: 'center'
                
                }}
        >
            <Button 
                title={"login"} 
                customStyles={{alignSelf: 'center', color: 'white', marginBottom: 20}}
            />

            <Pressable onPress={() =>{navigation.navigate('Signup')}}>
                <Text>
                    Don't have an account? {" "}
                    <Text style={{color: 'green', fontWeight: 'bold'}}>Sign Up</Text>
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
    input: {
        height: 48,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        marginBottom: 25,
        padding: 10
    }
})