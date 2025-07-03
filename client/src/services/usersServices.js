import { httpClient } from './httpClient';

export async function createUser(data) {
  const response = await httpClient.post('/users', data);
  return response.data;
}
