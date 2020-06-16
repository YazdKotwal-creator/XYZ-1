import React from 'react';
import {View,Text,StyleSheet,Image,TextInput,TouchableOpacity,Alert,KeyboardAvoidingView} from 'react-native';
import * as firebase from 'firebase'
export default class HomeScreen extends React.Component {

  render(){
      return(
        <KeyboardAvoidingView style = {{alignItems:'center',marginTop:20}}>
        <View>
          <Image
            source={require("../assets/xyz-logo-1.jpg")}
            style={{width:200, height: 200}}/>
        </View>
      </KeyboardAvoidingView>
      )
  }
}