import UploadService from '../services/UploadService';

const UploadRepository = {

    async uploadImage(
    imageUri,
    nombreArchivo,
    onProgress
    ) {

  return await UploadService.uploadImage(
    imageUri,
    nombreArchivo,
    onProgress
  );

},

};

export default UploadRepository;