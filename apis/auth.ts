import { AxiosResponse } from 'axios';
import axios from 'helpers/axios';

export const signIn = (payload: object): Promise<AxiosResponse> => {
  return axios.post('/v1/users/sign_in', payload);
};

export const getCurrentUser = (): Promise<AxiosResponse> => {
  return axios.get('/v1/users/current');
};
export const updateProfile = (payload: object): Promise<AxiosResponse> => {
  return axios.put('/v1/users/current', payload);
};
export const changePassword = (payload: object): Promise<AxiosResponse> => {
  return axios.put('/v1/users/current', payload);
};
