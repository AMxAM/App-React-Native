import React, { useState } from 'react';
import {
  View,
  Button,
  Image,
  Text,
  TextInput,
  StyleSheet,
} from 'react-native';

import { API_URL } from '../config/Api';

import * as ImagePicker from 'expo-image-picker';

import UploadViewModel from '../viewmodels/UploadViewModel';

export default function UploadScreen() {

    const [image, setImage] = useState(null);

    const [url, setUrl] = useState('');

    const [nombreArchivo, setNombreArchivo] = useState('');
    
    const [loading, setLoading] = useState(false);

    const [progress, setProgress] = useState(0);

  const pickImage = async () => {

    const result =
      await ImagePicker.launchImageLibraryAsync({
        mediaTypes:
          ImagePicker.MediaTypeOptions.Images,
        quality: 1,
      });

    if (!result.canceled) {

      setImage(
        result.assets[0].uri
      );

    }

  };

  const uploadImage = async () => {

  try {

    setLoading(true);

    const response =
    await UploadViewModel.uploadImage(
    image,
    nombreArchivo,
    (percent) => {

      setProgress(percent);

    }
  );

    setUrl(response.url);

  } catch (error) {

    console.log(error);

    alert(error.message);

  } finally {

    setLoading(false);

  }

};

  return (

    <View style={styles.container}>

      <Button
        title="Seleccionar Imagen"
        onPress={pickImage}
      />

      {
        image && (

          <Image
            source={{ uri: image }}
            style={styles.image}
          />

        )
      }

        <TextInput
            style={styles.input}
            placeholder="Nombre del archivo"
            value={nombreArchivo}
            onChangeText={setNombreArchivo}
        />

      <Button
        title="Subir Imagen"
        onPress={uploadImage}
      />

      <Text>
            Progreso: {progress}%
        </Text>

      <Text>
        {url}
      </Text>

      {
  url !== '' && (

    <Image
      source={{
        uri: `${API_URL}${url}`
      }}
      style={{
        width: 250,
        height: 250,
        marginTop: 20,
        alignSelf: 'center',
      }}
    />

  )
}

    </View>

  );

}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },

  image: {
    width: 250,
    height: 250,
    alignSelf: 'center',
    marginVertical: 20,
  },

});
