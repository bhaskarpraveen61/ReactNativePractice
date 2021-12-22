import React, { useState } from 'react'
import { Text, View,FlatList, SafeAreaView, TouchableOpacity, TextInput, Alert } from 'react-native'
import { Checkbox } from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { connect } from 'react-redux';
import { AddToDo,DeleteToDo } from '../Redux/Actions/FlatListAction';
import {bindActionCreators} from 'redux';

export function FlatListExample (props) {
    console.log('data from store',props.ToDo);
    const compData = [{
        id:123,
        value:'create to-do'
      },
      {
        id:234,
        value:'create-tp-d0-2'
      }
    ]; 
    const [isSelected, setisSelected] = useState("false");
    const [data, setdata] = useState(compData);
    const [value, setvalue] = useState("");

    const deleteHandler = (render) => {
        console.log('deletehandler',render,data);
        // data.map((item,index)=>{
        //     if(item.id == render){
        //         console.log('index',index,data.splice(index,1));
        //         data.splice(index,1); 
        //     }
        //     else{
        //         console.log('y ther are not equal',item.id,index,render);
        //     }
        // })
        // setdata([...data]);
        props.DeleteToDo(render);
    }
    const addHandler = (render) =>{
        if(render.length ==0){
            console.log('');
        }
        const obj ={id:Math.random(),value:render};
        props.AddToDo(obj);

    }
    const hadlerender = (render) =>{
        return (
            <SafeAreaView>
                <View style={{flex:1,flexDirection:'row',justifyContent:'space-evenly',alignItems:'center',margin:'1%',marginLeft:'5%',borderWidth:1}}>
                    <Checkbox value={isSelected} style={{height:'2%',width:'2%',color:'red'}} />
                    <Text>{render.item.value}</Text>
                    <TouchableOpacity 
                        onPress={()=>deleteHandler(render.item.id)}
                    >
                        <MaterialCommunityIcons name="delete" color="black" size={20} key={render.item.key}/>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        )
    }

    return (
        <View style={{flex:1}}>
            <View style={{flex:0.9,justifyContent:'flex-start'}}>
                <FlatList
                    data={props.ToDo}
                    renderItem ={hadlerender}
                    keyExtractor={item =>item.id}
                >
                </FlatList>
            </View>
            <SafeAreaView style={{flex:0.05,alignItems:'center',justifyContent:'flex-end'}}>
                <View style={{flexDirection:'row',justifyContent:'center'}}>
                    <TextInput 
                        name="Add to-do"
                        placeholder="Type to add to-do"
                        value={value}
                        onChangeText ={(text)=>setvalue(text)}
                        style={{width:'80%',height:'100%',borderWidth:1}}
                        >
                    </TextInput>
                    <TouchableOpacity style={{justifyContent:'center'}} onPress={()=>{addHandler(value)}}>
                        <MaterialCommunityIcons name="send" color="black"  size={50}/>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
            
            
        </View>
    )
}

const mapStateToProps = (state) => ({
    ToDo : state.ToDoAction
})

const mapDispatchToProps = (dispatch) => ({
    ...bindActionCreators({AddToDo,DeleteToDo},dispatch)
})

export default connect(mapStateToProps,mapDispatchToProps)(FlatListExample);


// export default FlatListExample;
