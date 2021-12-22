import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import data from '../rednit .json';

export default function Details({navigation,route}) {
    console.log('data from rednit file',data.length);
    return (
        <View>
            <Text>personal details sectoin</Text>
            <Text>From {route.name} scree and infor {route.params}</Text>
        </View>
    )
}

const styles = StyleSheet.create({})
