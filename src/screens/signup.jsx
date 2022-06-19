import { View, Text, SafeAreaView, Image, TextInput, StyleSheet, Pressable} from 'react-native'
import React from 'react'
import Button from '../components/Button'
import Input from './../components/Input';

export default function Signup() {

    const selected = true;

  return (
    <SafeAreaView>
        <Image 
            source= {require('../../assets/signup.jpg')} 
            style={{alignSelf: 'center', width: "60%", height: 400}}
        />

        <View style={styles.inputArea}>
            <Input placeholder='Email Address' />
            <Input placeholder='Password' secureTextEntry />
            <Input placeholder='Full Name' />
            <Input placeholder='Age' />
        </View>

        <Pressable style={styles.radioContainer}>
            <View style={styles.outerCircle}>
                <View style={styles.innerCircle}/>
            </View>
            <Text style={styles.radioText}>Male</Text> 
        </Pressable>

        <Pressable style={styles.radioContainer}>
            <View 
                style={[styles.outerCircle, selected && styles.selectedOuterCircle]}
            >
                <View 
                    style={[styles.innerCircle, selected 
                    && 
                    styles.selectedInnerCircle]}
                />
            </View>
            <Text style={styles.radioText}>Female</Text> 
        </Pressable>


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

    radioContainer: {
        flexDirection: 'row',
        alignItems: 'center', 
        marginBottom: 10,
        marginLeft: 30,
    },
    outerCircle: {
        height: 30,
        width: 30,
        borderRadius: 15,
        borderWidth: 1,
        borderColor: '#cfcfcf',
        justifyContent: 'center', 
        alignItems: 'center'

    },
    innerCircle: {
        height: 15,
        width: 15,
        borderRadius: 7.5,
        borderWidth: 1,
        borderColor: '#cfcfcf',
    },
    radioText: {
        marginLeft: 10,
    },
    selectedOuterCircle: {
        borderColor: 'orange',
    },
    selectedInnerCircle: {
        backgroundColor: 'orange'
    }
})