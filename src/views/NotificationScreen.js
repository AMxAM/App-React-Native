import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  Alert,
  StyleSheet,
} from 'react-native';

import ApiService from '../services/ApiService';

export default function NotificationScreen() {

  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const enviar = async () => {

    try {

      const response =
        await ApiService.sendNotification(
          email,
          subject,
          message
        );

      Alert.alert(
        'Éxito',
        response.message
      );

    } catch (error) {

      Alert.alert(
        'Error',
        'No se pudo enviar'
      );

    }

  };

  return (

    <View style={styles.container}>

      <Text style={styles.title}>
        Enviar Correo
      </Text>

      <TextInput
        style={styles.input}
        placeholder="Correo destino"
        value={email}
        onChangeText={setEmail}
      />

      <TextInput
        style={styles.input}
        placeholder="Asunto"
        value={subject}
        onChangeText={setSubject}
      />

      <TextInput
        style={styles.input}
        placeholder="Mensaje"
        value={message}
        onChangeText={setMessage}
        multiline
      />

      <Button
        title="Enviar"
        onPress={enviar}
      />

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    padding: 20,
  },

  title: {
    fontSize: 24,
    marginBottom: 20,
  },

  input: {
    borderWidth: 1,
    padding: 10,
    marginBottom: 15,
  },

});