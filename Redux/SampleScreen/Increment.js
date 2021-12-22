import React, { useState } from 'react';
import { Pressable, ScrollView, View, Text, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {increment,decrement} from '../Actions/ActionCreators.js';

function Increment(props) {
    const [count, setCount] = useState(0);
    return (
        <SafeAreaView style={styles.scrollView}>
            <View>
                <View style={{flexDirection:'row'}}>
                    <TouchableOpacity
                        style={styles.addButton}
                        onPress={() => {props.increment(5)}}
                    >
                        <Text style={{ color: 'white', alignSelf: 'center', alignItems: 'center' }}>
                            Add
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.removeButton}
                        onPress={() => {props.decrement(7)}}
                    >
                        <Text style={{color: 'white', alignSelf: 'center', alignItems: 'center' }}>
                            Decrease
                        </Text>

                    </TouchableOpacity>
                </View>
                <Text>
                    welcome to increment page {props.ToDo.Count}
                </Text>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    scrollView: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    addButton: {
        borderWidth: 1,
        backgroundColor:'blue'
    },
    removeButton: {
        marginLeft:5,
        borderWidth: 1,
        backgroundColor:'blue'
    }
})

const mapStateToProps = (state) => ({
    ToDo : state.ButtonAction
})

const mapDispatchToProps = (dispatch) => ({
    ...bindActionCreators({increment,decrement},dispatch)
})

export default connect(mapStateToProps,mapDispatchToProps)(Increment);