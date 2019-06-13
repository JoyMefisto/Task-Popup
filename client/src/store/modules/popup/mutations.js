export default {
  SET_DATA_SERVER: (state, data) => {
    state.rating.server = data;
  },
  SET_DATA_CLIENT: (state, data) => {
    state.rating.client.reasons = data;
  },
  SET_ANSWER: (state, payload) => {
    state.rating.client.reasons.some(el => {
      if(el.id == payload.id) return el.answer = payload.answer;
    })
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
