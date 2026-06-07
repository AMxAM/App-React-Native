import AuthRepository from '../repositories/AuthRepository';

const LoginViewModel = {

  async login(email, password) {

    try {

      const result =
        await AuthRepository.login(
          email,
          password
        );

      return result;

    } catch (error) {

      throw error;

    }

  },
  
  async register(nombre, email, password) {

  try {

    return await AuthRepository.register(
      nombre,
      email,
      password
    );

  } catch (error) {

    throw error;

  }

},
  async getUsers() {

  return await AuthRepository.getUsers();

},
  async deleteUser(id) {

  return await AuthRepository.deleteUser(
    id
  );

},

async updateUser(
  id,
  nombre,
  email,
  password
) {

  return await AuthRepository.updateUser(
    id,
    nombre,
    email,
    password
  );

},
};

export default LoginViewModel;