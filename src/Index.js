import React, { Component } from 'react';
import {Animated, AppRegistry, StyleSheet, Text,  TouchableOpacity,
         View, StackNavigator, Navigator, Button, ScrollView,
} from 'react-native';
import Header from "./Header"
import Body from "./Body"
import Footer from "./Footer"

export default class Index extends Component{
    
    on_PressFirst(){
        this.props.navigator.push({
            id : "First"
        });
    }
    _onPressSecond(){
        this.props.navigator.push({
            id : "Second"
        });
    }
    _onPressThird(){
        this.props.navigator.push({
            id : "Third"
        });
    }
    _onPressFourth(){
        this.props.navigator.push({
            id : "Fourth"
        });
    }
    _onPressFifth(){
        this.props.navigator.push({
            id : "Fifth"
        });
    }
    _onPressSixth(){
        this.props.navigator.push({
            id : "Sixth"
        });
    }
    _onPressOne(){
        this.props.navigator.push({
            id : "One"
        });
    }

    render(){
        return(
            <View style = {{backgroundColor : "#EAECEE  ", flex : 1}}>
                <Header />
                <ScrollView horizontal style = {{height : 0}}>
                    <View style = {styles.container}>
                    <TouchableOpacity 
                        style = {styles.FirstAnimation}
                        onPress = {this.on_PressFirst.bind(this)}
                        >
                        <Text style = {styles.TextFont}>
                            Timing
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        style = {styles.SecondAnimation}
                        onPress = {this._onPressSecond.bind(this)}
                        >
                        <Text style = {styles.TextFont}>
                            Timing 
                            examples
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity             
                        style = {styles.ThirdAnimation}
                        onPress = {this._onPressThird.bind(this)}  
                    >
                        <Text style = {styles.TextFont}>
                            Spring
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity             
                        style = {styles.FourthAnimation}
                        onPress = {this._onPressFourth.bind(this)}  
                    >
                        <Text style = {styles.TextFont}>
                            Parallel
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity             
                        style = {styles.FifthAnimation}
                        onPress = {this._onPressFifth.bind(this)}  
                    >
                        <Text style = {styles.TextFont}>
                            Sequence
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity             
                        style = {styles.SixthAnimation}
                        onPress = {this._onPressSixth.bind(this)}  
                    >
                        <Text style = {styles.TextFont}>
                            Stagger
                        </Text>
                    </TouchableOpacity>
                </View>
                </ScrollView>  
                <Body /> 
                <ScrollView>
                    <View>
                        <TouchableOpacity             
                        style = {styles.OneAnimation}
                        onPress = {this._onPressOne.bind(this)}  
                        >
                        <Text style = {styles.TextFont}>
                            Example 1
                        </Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>                

                <Footer />
            </View>
        );
    }
}

var styles = StyleSheet.create({
    container : {
        flex : 1,
        flexDirection : "row",
        margin : 3,
        justifyContent : "center",
        alignItems : "center",
    },
    FirstAnimation : {
        flex : 1,
        backgroundColor : "#3498DB",
        justifyContent : "center",
        alignItems : "center",
        height : 200,
        width : 200, 
        margin : 3
    },
    SecondAnimation : {
        flex : 1,
        backgroundColor : "#2ECC71",
        justifyContent : "center",
        alignItems : "center",  
        paddingLeft : 50,
        height : 200,
        width : 200,
        margin : 3    
    },
    ThirdAnimation : {
        flex : 1,
        backgroundColor : "#E67E22",
        justifyContent : "center",
        alignItems : "center",
        height : 200,
        width : 200,
        margin : 3
    },
    TextFont : {
        fontSize : 30,
        color : "white"
    },
    FourthAnimation : {
        flex : 1,
        backgroundColor : "#BDC3C7",
        justifyContent : "center",
        alignItems : "center",
        height : 200,
        width : 200,
        margin : 3
    },
    FifthAnimation : {
        flex : 1,
        backgroundColor : "#5D6D7E",
        justifyContent : "center",
        alignItems : "center",
        height : 200,
        width : 200,
        margin : 3
    },
    SixthAnimation : {
        flex : 1,
        backgroundColor : "#5B2C6F",
        justifyContent : "center",
        alignItems : "center",
        height : 200,
        width : 200,
        margin : 3
    },
    OneAnimation : {
        flex : .5,
        backgroundColor : "#641E16",
        justifyContent : "center",
        alignItems : "center",
        height : 120,
        width : 200, 
        margin : 3
    },
});