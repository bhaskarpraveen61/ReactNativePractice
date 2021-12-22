import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function Api() {
    
    const fetch_url = () =>{
        // try{
        //     const fetch_url = await fetch('https://api.github.com/users/mralexgray/repos')
        //     // const fetch_url = await fetch('https://reactnative.dev/movies.json')
        //     const jsno = await fetch_url.json();
        //     setData(jsno);
        //     console.log('json response',jsno[0].id);
        
        //     }
        //     catch(error){
        //         console.log('error in try block',error)
        //     }

        return fetch('https://api.github.com/users/mralexgray/repos')
            .then((response) => response.json())
            .then((responseJson) =>{
                return responseJson
            })
            .catch((error) =>{
                console.log('error in fetching', error);
            });
    }
    return fetch_url();
}
