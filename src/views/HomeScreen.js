import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Button,
} from 'react-native';

import LoginViewModel from '../viewmodels/LoginViewModel';

export default function HomeScreen({ navigation }) {

  const [usuarios, setUsuarios] =
    useState([]);

  useEffect(() => {

    cargarDatos();

  }, []);

  const cargarDatos = async () => {

    try {

      const [
        lista1,
        lista2
      ] = await Promise.all([
        LoginViewModel.getUsers(),
        LoginViewModel.getUsers()
      ]);

      setUsuarios(lista1);

    } catch (error) {

      console.log(error);

    }

  };

  return (

    <ScrollView style={styles.container}>

      <Text style={styles.title}>
        Usuarios
      </Text>

      <Button
        title="Subir Imagen"
        onPress={() =>
          navigation.navigate('Upload')
        }
      />

      <View style={{ marginBottom: 20 }} />

      {
        Array.isArray(usuarios)
          ? usuarios.map(user => (
              <View
                key={user.id}
                style={styles.card}
              >

                <Text>
                  {user.nombre}
                </Text>

                <Text>
                  {user.email}
                </Text>

              </View>
            ))
          : null
      }

    </ScrollView>

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

  card: {
    padding: 15,
    borderWidth: 1,
    marginBottom: 10,
  },

});