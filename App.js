import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, StyleSheet, Text, View, TextInput, TouchableOpacity, Image,} from 'react-native';
import react, {useState} from 'react';

export default function App() {
  const [id, setid]=useState(' ');
  const [password,setPassword]=useState(' ');
  return (
   
    <View style={styles.container}>
      <Image source = {require("./assets/g.jpg")}
      style={{width: 200, height: 200, borderRadius: 2145}}/>
      <Text style={styles.forheading}>Login Form</Text>

      <Text style={styles.forls}>ID Number:</Text>
    
      <TextInput style={styles.fortf} placeholder=' N161316' placeholderTextColor="#095859" onChangeText={(val)=> setid(val)} />

        <Text style={styles.forls}>Password   :</Text>
        <TextInput
          style={styles.fortf}
          placeholder="Password: XXXXX"
          placeholderTextColor="#095859"
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
          />
      <View>
      <TouchableOpacity style={styles.but}>
      <Text style={styles.butstyle}>Login</Text>
      </TouchableOpacity>
      </View>

    </View>
    
  );
}

const styles = StyleSheet.create ( {
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#095859',
    borderWidth:20,
    
  },
  image :{
    marginBottom: 5
 
  },
  butstyle: {
    fontSize:20,
    color: "white",
  },
  but: {
    borderRadius: 30,
    borderWidth: 1,
    width: 300,
    height: 45,
    alignItems:"center",
    justifyContent:"center",
    marginTop:10,
    backgroundColor:"#095859",
  },
  forls:{
    fontSize:20,
    marginBottom:10,
  },
  
  fortf: {
    borderColor: '#095859',
    borderWidth: 1,
    width: 300,
    height: 45,
    marginBottom: 10,
    alignItems: "center",
    justifyContent: 'center',
    textAlign: 'center',
  }
 
});
