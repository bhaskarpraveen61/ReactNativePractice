import React,{useEffect,useState} from 'react'
import { View, Text,FlatList,SafeAreaView,ActivityIndicator,Image } from 'react-native'
const data = ['1','2','3','4'];

export default function MainScreen() {
    const [loading,setloading] = useState(true);
    const [git, setgit] = useState([])
    const getMovies = async () => {
        try{
            const url = await fetch('https://api.github.com/users/mralexgray/repos')
            const resp = await url.json()
            setgit(resp)
            console.log('git data ---',git[0].name)
        }catch(error){
            console.log('error',error);
        }finally{
            setloading(false)
        }
    }
    const renderItemData = (rowItem)=>{
        return(
            <View style={{flexDirection:'row'}}>
                {/* <Image source={require('../constants/Images/icon.png')} style={{height:80,width:80}} /> */}
                <Image source={{uri:rowItem.item.owner.avatar_url}} style={{height:50,width:80}} />
                <Text style={{margin:10}}>{rowItem.item.owner.avatar_url}</Text>
            </View>
            
        )
    }
    const seperator = () => {
        return(
            <View style={{height:2,backgroundColor:'grey',marginLeft:'5%'}}></View>
        )
    }

    useEffect(()=>{
        getMovies()
    },[])
    return (
        <SafeAreaView>
            <FlatList 
            data ={git}
            renderItem = {renderItemData}
            keyExtractor = {item => item.id}
            ItemSeparatorComponent ={seperator}
            />
        </SafeAreaView>
    )
}
