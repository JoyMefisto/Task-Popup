export default {
  SET_DATA_SERVER: (state, data) => {
    state.rating.server = data;
  },
  CREATE_ANSWER: (state, payload) => {
    state.rating.client.reasons.push(payload);
  },
  SET_ANSWER: (state, payload) => {
    state.rating.client.reasons.some((el) => { // eslint-disable-line array-callback-return
      if (el.id == payload.id) el.answer = payload.answer; // eslint-disable-line eqeqeq
    });
  },
  DELETE_ANSWER: (state, payload) => {
    /* eslint-disable consistent-return */
    state.rating.client.reasons.some((el, i) => { // eslint-disable-line array-callback-return
      if (el.id === payload.id) {
        return state.rating.client.reasons.splice(i, 1);
      }
      /* eslint-disable consistent-return */
    });
  },
  SET_RATE: (state, rate) => {
    state.rating.client.rate = rate;
  },
  SET_TEXTAREA_TEXT: (state, value) => {
    state.rating.client.message = value;
  },
  SET_FINISH: (state, value) => {
    state.rating.client.finish = value;
  },
};
