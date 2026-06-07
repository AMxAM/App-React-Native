import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
} from 'react-native';

import LoginViewModel from '../viewmodels/LoginViewModel';

export default function RegisterScreen() {

  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const register = async () => {

  try {

    const result =
      await LoginViewModel.register(
        nombre,
        email,
        password
      );

    console.log(result);

    alert(JSON.stringify(result));

  } catch (error) {

    console.log(error);

    alert(error.message);

  }

};

  return (

    <View style={styles.container}>

      <Text style={styles.title}>
        Registro
      </Text>

      <TextInput
        style={styles.input}
        placeholder="Nombre"
        value={nombre}
        onChangeText={setNombre}
      />

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
        title="Registrar"
        onPress={register}
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
    textAlign: 'center',
    marginBottom: 20,
  },

  input: {
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
  },

});