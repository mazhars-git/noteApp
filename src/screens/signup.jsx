import { View, Text, SafeAreaView, Image, TextInput, StyleSheet, Pressable} from 'react-native'
import React, { useState } from 'react'
import Button from '../components/Button'
import Input from './../components/Input';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
const auth = getAuth();

const genderOptions = ["Male", "Female"];



export default function Signup() {

    const [gender, setGender] = useState(null);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [age, setAge] = useState("");


    const signup = () => {
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            console.log("user created:", user)
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
        });
    }

  return (
    <SafeAreaView>
        <Image 
            source= {require('../../assets/signup.jpg')} 
            style={{alignSelf: 'center', width: "60%", height: 400}}
        />

        <View style={styles.inputArea}>
            <Input placeholder='Email Address' onChangeText={(text) => setEmail(text)} />
            <Input placeholder='Password' secureTextEntry onChangeText={(text) => setPassword(text)} />
            <Input placeholder='Full Name' onChangeText={(text) => setName(text)} />
            <Input placeholder='Age' onChangeText={(text) => setAge(text)} />
        </View>

        <View style={{marginVertical: 20, marginLeft: 20}}>
            <Text style={{fontWeight: 'bold'}}>Select Gender</Text>
        </View>

        {
            genderOptions.map((option) =>{
            const selected = option === gender;

            return(
                <Pressable 
                    style={styles.radioContainer}
                    onPress = {() => setGender(option)}
                    key={option}
                >
                    <View 
                        style={[styles.outerCircle, selected && styles.selectedOuterCircle]}
                    >
                        <View 
                            style={[styles.innerCircle, selected 
                            && 
                            styles.selectedInnerCircle]}
                        />
                    </View>
                    <Text style={styles.radioText}>{option}</Text> 
                </Pressable>
            );
            })
        }


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
                onPress= {signup}
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