import {
  getData,
  sendResult,
} from '../../../api/popup';

export default {
  GET_DATA: ({ commit }) => getData()
    .then((response) => {
      let reasonsClient = [];

      commit('SET_DATA_SERVER', response.data.data);

      for(let el in response.data.data.reasons) {
        reasonsClient.push({ id: el, answer: ''});
      }
      commit('SET_DATA_CLIENT', reasonsClient);
    })
    .catch((error) => {
      console.log(error);
    }),

  SEND_DATA_OF_STEPS: ({ commit }, data) => sendResult(data)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.log(error);
    }),
};
