import axios from 'axios';

const BASE_URL = 'http://localhost:5000';

function createConfig(token: string): any {
  return {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }
}

interface authData {
  name: string,
  email: string,
  password: string
}

export async function signUp(body: authData) {
  const promise = axios.post(`${BASE_URL}/signup`, body);

  return promise;
}