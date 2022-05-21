import axios from 'axios';

const BASE_URL = 'http://localhost:5000';

function createConfig(token: string): any {
  return {
    headers: {
      Authorization: `Bearer ${token}`
    }
  };
}

export interface FormDataLogin {
  email: string;
  password: string;
}
export interface FormData {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export interface UserData {
  id: number;
  name: string;
  email: string;
  password: string;
}

export interface ProjectData {
  id: number
  title: string;
  resume: string;
  importantInfos: string;
  startDate: string;
  limitDate: string;
  clientId: number;
}

export interface ProjectClientData {
  id: number
  title: string;
  resume: string;
  importantInfos: string;
  startDate: string;
  limitDate: string;
  clientId: number;
  client: ClientData
}

export interface ClientData {
  id: number;
  name: string;
  email: string;
  phone: string;
}

export type TabValue = 'Projeto' | 'Cliente';

export type AuthData = Omit<UserData, 'name' | 'id'>

export type SignUpData = Omit<UserData, 'id'>

export type ProjectLoginData = Omit<ProjectData, 'id'>

export type ClientRegisterData = Omit<ClientData, 'id'>

async function signUp(body: SignUpData) {
  const promise = axios.post(`${BASE_URL}/signup`, body);

  return promise;
}

async function signIn(body: AuthData) {
  const promise = axios.post(`${BASE_URL}/signin`, body);

  return promise;
}

async function createNewProject(body: ProjectLoginData, token: string, userId: string) {
  const promise = axios.post(`${BASE_URL}/users/${userId}/project`, body, createConfig(token));

  return promise;
}

async function createNewClient(body: ClientRegisterData, token: string, userId: string) {
  const promise = axios.post(`${BASE_URL}/users/${userId}/client`, body, createConfig(token));

  return promise;
}

async function getClients(token: string, userId: number) {
  const promise = axios.get(`${BASE_URL}/users/${userId}/clients`, createConfig(token));

  return promise;
}

async function getProject(token: string, userId: number) {
  const promise = axios.get(`${BASE_URL}/users/${userId}/projects`, createConfig(token));

  return promise;
}

async function getProjectById(token: string, projectId: string | undefined, userId: number) {
  const promise = axios.get(`${BASE_URL}/users/${userId}/projects/${projectId}`, createConfig(token));

  return promise;
}

const api = {
  signUp,
  signIn,
  createNewProject,
  getClients,
  createNewClient,
  getProject,
  getProjectById
};

export default api;