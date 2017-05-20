import React, { Component } from 'react';
import {Animated, LayoutAnimation, Easing, AppRegistry, StyleSheet, Text, Image, TouchableOpacity,
         View, StackNavigator, Navigator, Button,
} from 'react-native';
import Index from "./src/Index"
import First from "./src/First"
import Second from "./src/Second"
import Third from "./src/Third"
import Fourth from "./src/Fourth"
import Fifth from "./src/Fifth"
import Sixth from "./src/Sixth"
import One from "./src/One"


export default class animation extends Component {

  navigationRenderScene(route, navigator){
    _navigator = navigator;
    switch(route.id){
      case "Index":
        return (<Index navigator = {navigator} title = "animations" />);
      case "First":
        return (<First navigator = {navigator} title = "First animation" />);
      case "Second":
        return (<Second navigator = {navigator} title = "Second animation" />);
      case "Third":
        return(<Third navigator = {navigator} title = "Third animation" />);
      case "Fourth": 
        return(<Fourth navigator = {navigator} title = "Fourth animation" />);
      case "Fifth":
        return (<Fifth navigator = {navigator} title = "Fifth animation" />);
      case "Sixth": 
        return(<Sixth navigator = {navigator} title = "Sixth animation" />);
      case "One":
        return (<One navigator = {navigator} title = "example one" />); 
    }
  }

  render(){
    return (
        <Navigator
        initialRoute = {{
          id : "Index"
        }}
        renderScene = {
          this.navigationRenderScene
        }/>
    );
  }

}

var style = StyleSheet.create({
  container : {
    justifyContent : "center",
    alignItems : "center",
    backgroundColor : "#ffff",
    marginTop : 50,
    flex : 1
  },
  circle : {
    backgroundColor : "skyblue",
    borderRadius : 100,
  }
});


AppRegistry.registerComponent('animation', () => animation);
