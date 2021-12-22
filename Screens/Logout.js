import React from 'react';
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Card,TextInput,Button } from 'react-native-paper';

export default function Logout({navigation,route}) {
    const redirect = () =>{
        console.log('logging out');
        navigation.navigate('Login','from logut screen')
    }
    return (
        <SafeAreaView>
            <Button 
                mode="contained"
                dark = "True"
                Loading = "True"
                // onPress={()=>{getApi()}}
                onPress={redirect}
                style={{marginTop:'2%'}}
             >
                    Logout
            </Button>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({})
