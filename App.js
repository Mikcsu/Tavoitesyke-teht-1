import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import React, { useState } from 'react';

export default function App() {
  const [number, setNumber] = useState('');

  let lower = (220 - number) * 0.65;
  let upper = (220 - number) * 0.85;
  
  return (
    <View style={styles.container}>
      <Text>Age</Text>
      <TextInput
        style={styles.input}
        placeholder="Type here..."
        onChangeText={(value) => setNumber(value)}
        value={number}
      />
      <Text>Hr limits</Text>
      <Text>{lower.toFixed()} - {upper.toFixed()}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
