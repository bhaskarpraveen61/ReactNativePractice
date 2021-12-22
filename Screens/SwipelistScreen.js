import React,{useEffect,useState} from 'react'
import { View, Text,FlatList,SafeAreaView,ActivityIndicator,Image, TouchableOpacity,StyleSheet } from 'react-native'
import {SwipeListView} from 'react-native-swipe-list-view'
import { Avatar, Card } from 'react-native-paper';
const data = ['1','2','3','4'];
import json_data from '../rednit .json';

export default function SwipelistScreen({navigation,route}) {
    const [refreshing,setrefreshing] = useState(false);
    const [git, setgit] = useState([]);
    const [loading, setloading] = useState(false);
    const getMovies = async () => {
        console.log('routes',route.params);
        try{
            const url = await fetch('https://api.github.com/users/mralexgray/repos')
            const resp = await url.json()
            setgit(resp)
            console.log('git data ---',git.length)
        }catch(error){
            console.log('error',error);
        }finally{
            setloading(false)
        }
    }
    const renderItemData = (rowItem)=>{
        return(
            <View style={{flexDirection:'row',marginLeft:'1%',marginBottom:'1%',backgroundColor:'white'}}>
                <TouchableOpacity 
                style={{flex:1}} 
                onPress={()=>{navigation.navigate('Details','from Swipe screen')}}
                
                >
                    {/* <Avatar.Image source={{uri:rowItem.item.photo}}  />
                    <Text style={{margin:10,flexShrink: 1,fontSize:30}}>{rowItem.item.first_name.substring(0,10)}{"  "}{rowItem.item.last_name.substring(0,10)}</Text> */}
                    <Card mode='elevated'>
                        {/* <Card.Cover style={{justifyContent:'center',margin:'2%'}} source={{uri:'https://picsum.photos/700'}} /> */}
                        {/* <Card.Cover style={{justifyContent:'center',margin:'2%'}} source={{uri:rowItem.item.photo}} /> */}
                        <View style={{alignItems:'center',marginTop:'2%'}}>
                            <Avatar.Image size={100} source={{uri:'https://picsum.photos/700'}} />
                        </View>
                        <Card.Content>
                            <Text style={{fontSize:30,alignSelf:'center'}}>{rowItem.item.first_name.replace(/\s/g,'').substring(0,10)}{" "}{rowItem.item.last_name.replace(/\s/g,'').substring(0,10)}</Text>
                        </Card.Content>
                    </Card>
                </TouchableOpacity>
            </View>
            
        )
    }
    const seperator = () => {
        return(
            <View style={{backgroundColor:'#e0e0e0'}}></View>
        )
    }
    const renderSwipe = () => {
        return(
            <View style={{height:120}}>
                <TouchableOpacity
                onPress={() => {console.log('clicked unlying row')}}
                style={styles.item}
                >
                    <Text style={{justifyContent:'center',alignContent:'center',color:'white',fontWeight:'bold'}}>click</Text>
                </TouchableOpacity>
            </View>
        )
    }

    useEffect(()=>{
        getMovies()
    },[])
    return (
        <SafeAreaView>
            <SwipeListView 
                data ={json_data}
                renderItem={renderItemData}
                keyExtractor = {item => item.id}
                renderHiddenItem={renderItemData}
                leftOpenValue={100}
                leftActionValue={120}
                rightActionValue={120}
                rightOpenValue={-100}
                refreshing = {refreshing}
                onRefresh ={ () => {
                    setrefreshing(true)
                    getMovies().then(()=>{setrefreshing(false);
                    });
                }
                }
                ItemSeparatorComponent={seperator}
                style={{backgroundColor:'#e0e0e0'}}
                renderHiddenItem ={renderSwipe}
                leftActivationValue = {console.log('activated left activation')}
            />
            
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    item :{
    height: '50%',
    left: 0,
    width: 150,
    flexDirection: "row",
    padding: 10,
    marginLeft:10,
    backgroundColor: '#0000cc',
    justifyContent: "flex-start",
    marginVertical: 5,
    elevation: 3,
    alignItems: "center",
    // borderColor: "#d9d9d9",
    borderBottomColor: "#d9d9d9",
    // borderBottomWidth: 1,
    // borderWidth: 1,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    shadowColor: "black",
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 3,
    }
})