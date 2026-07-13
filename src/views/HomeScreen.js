import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Button,
} from 'react-native';

import { Alert } from 'react-native';
import LoginViewModel from '../viewmodels/LoginViewModel';

export default function HomeScreen({ navigation }) {

  const [usuarios, setUsuarios] =
    useState([]);

  useEffect(() => {

    cargarDatos();

  }, []);

  const cargarDatos = async () => {

    try {

      const lista =
        await LoginViewModel.getUsers();
      setUsuarios(lista);

    } catch (error) {

      console.log(error);

    }

  };

  const eliminarUsuario = async (id) => {

    Alert.alert(
      'Eliminar usuario',
      '¿Deseas eliminar este usuario?',
      [
        {
          text: 'Cancelar',
          style: 'cancel',
        },
        {
          text: 'Eliminar',
          style: 'destructive',
          onPress: async () => {

            try {

              await LoginViewModel.deleteUser(
                id
              );

              cargarDatos();

            } catch (error) {

              console.log(error);

              Alert.alert(
                'Error',
                'No se pudo eliminar'
              );

            }

          },
        },
      ]
    );

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
      <View style={{ marginBottom: 10 }} />
      <Button
        title="Enviar Correo"
        onPress={() =>
          navigation.navigate(
            'Notifications'
          )
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

                <View style={styles.buttonsContainer}>

                  <Button
                    title="Editar"
                    onPress={() =>
                      navigation.navigate(
                        'EditUser',
                        { user }
                      )
                    }
                  />
                  <Button
                    title="Eliminar"
                    color="red"
                    onPress={() =>
                      eliminarUsuario(user.id)
                    }
                  />
                </View>
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

  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 5,
  },

});