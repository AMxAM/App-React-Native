import AsyncStorage from '@react-native-async-storage/async-storage';

import { API_URL } from '../config/Api';

const ApiService = {

  async login(email, password) {

    const response = await fetch(
      `${API_URL}/api/v1/auth/login`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          password,
        }),
      }
    );

    return await response.json();
  },

  async register(nombre, email, password) {

    const response = await fetch(
      `${API_URL}/api/v1/auth/register`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          nombre,
          email,
          password,
        }),
      }
    );

    return await response.json();
  },

  async getUsers() {

    const token =
      await AsyncStorage.getItem(
        'token'
      );

    console.log('TOKEN:', token);

    const response = await fetch(
      `${API_URL}/api/v1/users`,
      {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      }
    );

    return await response.json();
  },

  async deleteUser(id) {

  const token =
    await AsyncStorage.getItem(
      'token'
    );

  const response = await fetch(
    `${API_URL}/api/v1/users/${id}`,
    {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    }
  );

  return await response.json();
},

async updateUser(
  id,
  nombre,
  email,
  password
) {

    const token =
      await AsyncStorage.getItem(
        'token'
      );

    const response = await fetch(
      `${API_URL}/api/v1/users/${id}`,
      {
        method: 'PUT',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          nombre,
          email,
          password,
        }),
      }
    );

    return await response.json();
  },
};

export default ApiService;





