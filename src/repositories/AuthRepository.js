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

  async deleteUser(id) {

  return await ApiService.deleteUser(
    id
  );

},

async updateUser(
  id,
  nombre,
  email,
  password
) {

  return await ApiService.updateUser(
    id,
    nombre,
    email,
    password
  );

},
};



export default AuthRepository;