import ApiService from '../services/ApiService';

const AuthRepository = {

  async login(email, password) {

    return await ApiService.login(
      email,
      password
    );

  },

  async register(nombre, email, password) {

  return await ApiService.register(
    nombre,
    email,
    password
  );

},
  async getUsers() {

  return await ApiService.getUsers();

},

};



export default AuthRepository;