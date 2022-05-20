import axios from 'axios';
import { ClientData, ProjectData } from '../pages/Add/Add';

const BASE_URL = 'http://localhost:5000';

function createConfig(token: string): any {
  return {
    headers: {
      Authorization: `Bearer ${token}`
    }
  };
}

interface UserData {
  name: string,
  email: string,
  password: string
}

type AuthData = Omit<UserData, 'name'>

export async function signUp(body: UserData) {
  const promise = axios.post(`${BASE_URL}/signup`, body);

  return promise;
}

export async function signIn(body: AuthData) {
  const promise = axios.post(`${BASE_URL}/signin`, body);

  return promise;
}

export async function createNewProject(body: ProjectData, token: string) {
  const promise = axios.post(`${BASE_URL}/project/add`, body, createConfig(token));

  return promise;
}

export async function createNewClient(body: ClientData, token: string) {
  const promise = axios.post(`${BASE_URL}/client/add`, body, createConfig(token));

  return promise;
}