import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView, TextInput } from 'react-native';

function InputUser(props) {
  const { 
    setStateOrg
  } = props
  return (
    <View style={styles.inputContainer}>
      <TextInput onChangeText={(_text)=>setStateOrg(_text)} style={styles.input}/>
      <TouchableOpacity onPress={()=> console.log('press')} style={styles.button}>
        <Text style={styles.buttonText}>イートする！</Text>
      </TouchableOpacity>
    </View>
  )
}

export default function App() {
  const [text, setText] = useState('')
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <InputUser setStateOrg={setText}></InputUser>
        <View style={styles.content}>
          <Text style={styles.contentText}>{text}</Text>
        </View>
        <StatusBar style="light" />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#222',
  },
  container: {
    flex: 1,
    paddingTop: 20,
  },
  button: {
    backgroundColor: 'rgb(29, 161, 242)',
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderRadius: 20,
  },
  buttonText: {
    color: 'white',
    fontWeight: '900',
    fontSize: 16,
  },
  inputContainer: {
    flexDirection: 'row',
    paddingHorizontal: 10,
  },
  input: {
    flex: 1,
    borderColor: 'rgb(29, 161, 242)',
    borderWidth: 2,
    marginRight: 10,
    borderRadius: 10,
    color: 'white',
    paddingHorizontal: 10,
    fontSize: 16,
  },
  content :{
    padding: 20,
  },
  contentText: {
    color: 'white',
    fontWeight: '900',
    fontSize: 16,
  },
});
