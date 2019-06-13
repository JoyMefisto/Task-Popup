<template>
  <default-layout>
    <div class="main">
      <notification
        v-if="isShowNotification"
        @show:popup="showPopup"
        @close:notification="closeNotification"
      />
      <popup :isShow="isShowPopup" @close:popup="closePopup" @send:result="sendResult" />
    </div>
  </default-layout>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import { setItemLocalStorage, getItemLocalStorage } from '@/utils/helpers/localStorage';
import DefaultLayout from '../../layouts/default.vue';
import Notification from '../../blocks/notification.vue';
import Popup from '../../blocks/popup/index.vue';

export default {
  name: 'MainPage',

  data() {
    return {
      isShowPopup: false,
      isShowNotification: false,
    };
  },

  components: {
    DefaultLayout,
    Notification,
    Popup,
  },

  beforeCreate() {
    this.$store.dispatch('popup/GET_DATA');
  },

  created() { // eslint-disable-line consistent-return
    const session = getItemLocalStorage('is-show-notification-of-rating');

    if (typeof session === 'object') {
      setItemLocalStorage('is-show-notification-of-rating', true);
      this.isShowNotification = true;

      return true;
    }

    this.isShowNotification = session === 'true';
  },

  computed: {
    ...mapState('popup', {
      client: state => state.rating.client,
    }),
  },

  methods: {
    ...mapActions('popup', {
      sendDataOfSteps: 'SEND_DATA_OF_STEPS',
    }),

    showPopup() {
      this.isShowPopup = true;
    },
    closeNotification() {
      this.isShowNotification = false;
      setItemLocalStorage('is-show-notification-of-rating', false);
    },
    closePopup() {
      this.isShowPopup = false;
      this.closeNotification();
    },
    sendResult() {
      this.sendDataOfSteps(this.client)
        .then(
          (response) => {
            alert((response.success) ? 'Успех' : 'Провал'); // eslint-disable-line no-alert
          },
        )
        .catch((error) => {
          console.log(error); // eslint-disable-line no-console
        });
    },
  },
};
</script>
