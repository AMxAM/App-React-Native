import axios from 'axios';

import { API_URL } from '../config/Api';

const UploadService = {

  async uploadImage(
    imageUri,
    nombreArchivo,
    onProgress
  ) {

    const formData = new FormData();

    formData.append('file', {
      uri: imageUri,
      name: nombreArchivo
        ? `${nombreArchivo}.jpg`
        : `imagen_${Date.now()}.jpg`,
      type: 'image/jpeg',
    });

    const response = await axios.post(
      `${API_URL}/api/v1/upload`,
      formData,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
        },

        onUploadProgress: (progressEvent) => {

          const percent =
            Math.round(
              (progressEvent.loaded * 100) /
              progressEvent.total
            );

          onProgress(percent);

        },

      }
    );

    return response.data;

  },

};

export default UploadService;