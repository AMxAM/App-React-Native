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

};

export default LoginViewModel;