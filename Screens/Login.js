import React,  { useEffect, useState } from 'react'
import { BackHandler, Image, ImageBackground, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import color from '../constants/Colors/color.js';
import { Card,TextInput,Button } from 'react-native-paper';
import {MaterialCommunityIcons} from 'react-native-vector-icons'


export default function Login({navigation,route}) {
const [username,setUsername] = useState("");
const [password,setPassword] = useState("");
const [showPassword,setShowPassword] = useState("True");


const getApi = () => {
    fetch('https://api.github.com/users/mralexgray/repos')
    .then((response) => response.json())
    .then((responseJson) =>{
        console.log('response of the file',responseJson);
    })
}

const redirect = () =>{
    console.log('entered redirect')
    if(username!="" && password!=""){
        // navigation.navigate('Swipelist','recieved from loginscreen');
        navigation.navigate('Logout','recieved from loginscreen');
    }
    else {
        console.log('no username or no passsword');
    }
}


    return (
        <SafeAreaView style={{flex:1}}>
            <View style={{ flex: 1 }}>
                <ImageBackground resizeMode='cover' style={{ flex: 1 }} source={require('../constants/Images/logo-og.png')}>
                    <View style={{alignItems:'center',justifyContent:"center",marginTop:'25%'}}>
                        <Card style={{width:'85%',justifyContent:'center',backgroundColor: 'rgba(52, 52, 52, 0.0)'}}>
                            <Card.Cover source={require('../constants/Images/icon.png')} style={{justifyContent:'center'}} />
                            <Card.Actions style={{justifyContent:'center',marginTop:'2%',flexDirection:'column'}}>
                                    <TextInput 
                                    mode="outlined"
                                    label="Ussername"
                                    placeholder="Type username"
                                    style ={{width:'75%',marginBottom:'5%'}}
                                    onChangeText = {text => setUsername(text)}
                                    />
                                    <TextInput 
                                    mode="outlined"
                                    label="Password"
                                    // secureTextEntry = {showPassword}
                                    placeholder="Type password"
                                    style ={{width:'75%'}}
                                    onChangeText = {text => setPassword(text)}
                                    // right ={<TextInput.Icon name="eye" />}
                                    />
                                    <Button 
                                        mode="contained"
                                        dark = "True"
                                        Loading = "True"
                                        // onPress={()=>{getApi()}}
                                        onPress={redirect}
                                        style={{marginTop:'2%'}}
                                    >
                                        Login
                                    </Button>
                            </Card.Actions>
                        </Card>
                    </View>
                </ImageBackground>

            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({})
