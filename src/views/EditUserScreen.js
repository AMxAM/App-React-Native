import React, { useState } from 'react';
import {
  View,
  TextInput,
  Button,
  StyleSheet,
  Alert,
} from 'react-native';

import LoginViewModel from '../viewmodels/LoginViewModel';

export default function EditUserScreen({
  route,
  navigation,
}) {

  const { user } = route.params;

  const [nombre, setNombre] =
    useState(user.nombre);

  const [email, setEmail] =
    useState(user.email);

  const [password, setPassword] =
    useState('');

  const actualizar = async () => {

    try {

      await LoginViewModel.updateUser(
        user.id,
        nombre,
        email,
        password
      );

      Alert.alert(
        'Éxito',
        'Usuario actualizado'
      );

      navigation.goBack();

    } catch (error) {

      console.log(error);

      Alert.alert(
        'Error',
        'No se pudo actualizar'
      );

    }

  };

  return (

    <View style={styles.container}>

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
        placeholder="Nueva contraseña"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      <Button
        title="Guardar cambios"
        onPress={actualizar}
      />

    </View>

  );

}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },

  input: {
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
  },

});