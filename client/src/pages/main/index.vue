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
import DefaultLayout from '../../layouts/default.vue';
import Notification from '../../blocks/notification.vue';
import Popup from '../../blocks/popup/index.vue';

export default {
  name: 'MainPage',

  data() {
    return {
      isShowPopup: false,
      isShowNotification: true,
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

  computed: {
    ...mapState('popup', {
      client: state => state.rating.client,
    })
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
    },
    closePopup() {
      this.isShowPopup = false;
    },
    sendResult() {
      this.sendDataOfSteps(this.client)
        .then(
          (response) => {
            alert((response.success) ? 'Успех' : 'Провал');
          },
        )
    },
  },
};
</script>
