import React, { Component } from 'react';
import {Animated, AppRegistry, StyleSheet, Text,  TouchableOpacity,
         View, StackNavigator, Navigator, Button, ScrollView,
} from 'react-native';

export default class Header extends Component{
    render(){
        return(
            <View>
                <View style = {{backgroundColor : "#CD5C5C", flexDirection : "row", justifyContent : "center", alignItems : "center", padding : 20}}>
                    <Text style = {{ fontSize : 30 , color : "white"}}>
                        Animation Tutorials
                    </Text>
                </View>
                <View style = {{backgroundColor : "#148F77", width : 250, height : 50,justifyContent : "center", alignItems : "center", padding : 20, marginTop : 5, marginBottom : 5}}>
                    <Text style = {{ fontSize : 18 , color : "white"}}>
                        Types of animation ->
                    </Text>
                </View>
            </View>
        );
    }
}