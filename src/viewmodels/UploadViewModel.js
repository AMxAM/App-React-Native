import UploadRepository from '../repositories/UploadRepository';

const UploadViewModel = {

    async uploadImage(
    imageUri,
    nombreArchivo,
    onProgress
    ) {

  try {

    return await UploadRepository.uploadImage(
      imageUri,
      nombreArchivo,
      onProgress
    );

  } catch (error) {

    throw error;

  }

},

};

export default UploadViewModel;

