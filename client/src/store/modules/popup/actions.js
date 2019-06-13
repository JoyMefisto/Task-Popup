import {
  getData,
  sendResult,
} from '../../../api/popup';

export default {
  GET_DATA: ({ commit }) => getData()
    .then((response) => {
      commit('SET_DATA_SERVER', response.data.data);
    })
    .catch((error) => {
      console.log(error); // eslint-disable-line no-console
    }),

  SEND_DATA_OF_STEPS: ({ commit }, data) => sendResult(data) // eslint-disable-line no-unused-vars
    .then(response => response.data)
    .catch((error) => {
      console.log(error); // eslint-disable-line no-console
    }),
};
