import api from '../create-api';

export function getData() {
  return api.get('default');
}

export function sendResult(data) {
  return api.post('finally', data);
}
