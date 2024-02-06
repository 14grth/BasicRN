import React from "react";
import {
  View, 
  Text, 
  Image, 
  TextInput, 
  ScrollView, 
  StyleSheet
} from 'react-native'
import Programmer from './assets/programmer.jpg';
import Title from './src/components/Title';

const App = () => {
  return (
    <ScrollView>
      <Text style={style.title}>Basic Component in RN</Text>
      <View style={{flexDirection: 'row', marginTop: 10}} >
        <View style={{width: 100, height: 100, backgroundColor: 'yellow'}} />
        <View style={{width: 100, height: 100, backgroundColor: 'green'}} />
        <View style={{width: 100, height: 100, backgroundColor: 'red'}} />
      </View>
      <Image 
        source={require('./assets/programmer.jpg')}
        style={{height: 200, width: 200}}
      />  
      <Image source={Programmer} style={{width: 200, height: 200}} />
      <TextInput 
      placeholder="Masukkan nama anda" 
      style={{
        borderColor : 'black', 
        borderWidth: 1, 
        margin: 10, 
        borderRadius: 10,
        padding: 10
        }} />
    </ScrollView>
  );
};

const style = StyleSheet.create({
  title: {
    fontSize:20,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
    marginTop: 10,
  }
})

export default App;
