import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import LoginViewModel from '../viewmodels/LoginViewModel';

export default function LoginScreen({
  navigation
}) {
  
  const [email, setEmail] =
    useState('');

  const [password, setPassword] =
    useState('');

  const login = async () => {

    try {

      const result =
  await LoginViewModel.login(
    email,
    password
  );

await AsyncStorage.setItem(
  'token',
  result.token
);

navigation.navigate('Home');

const token =
  await AsyncStorage.getItem(
    'token'
  );


alert('Login exitoso');

    } catch (error) {

      alert(
        'Error al iniciar sesión'
      );

      console.log(error);

    }

  };

  return (

    <View style={styles.container}>

      <Text style={styles.title}>
        Login
      </Text>

      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />

      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      <Button
        title="Iniciar Sesión"
        onPress={login}
      />
      <View style={{ marginTop: 5 }} />

      <Button
      title="Registrarse"
      onPress={() =>
      navigation.navigate('Register')
    }
/>
    </View>

  );

}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },

  title: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
  },

  input: {
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
  },

});