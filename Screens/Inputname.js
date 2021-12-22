//Recro interview 
/*
Create normal input field which takes input and records value to redux store
*/

import {React} from 'react';
import { TextInput, TouchableOpacity, View } from 'react-native';
import { connect } from 'react-redux';

export default function Inputname(){
const [value,setValue] = useState("");

    return(
        <View style={{flexDirection:'row'}}>
            <TextInput 
                keyboardType="number-pad"
                placeholder="Type number"
                value={value}
                onChangeText={(text)=>setValue(text)}
            >
            </TextInput>
            <TouchableOpacity 
                onPress={()=>{console.log("value entered",value)}}
                >
                <Text>
                    Submit
                </Text>
            </TouchableOpacity>
        </View>
    )
    

}



//reducer

import {store} from 'react-redux';

const initialstate = 0; 

const reducer = (state=initialstate,action) =>{

    switch (action.type) {
        case 'add':
            state = action.payload
            return state;
            break;
    
        default:
            return state;
            break;
    }
}
