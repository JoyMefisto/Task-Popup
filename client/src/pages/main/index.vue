<template>
  <default-layout>
    <div class="main">
      <notification
        v-if="isShowNotification"
        @show:popup="showPopup"
        @close:notification="closeNotification"
      />
      <popup :isShow="isShowPopup" @close:popup="closePopup" />
    </div>
  </default-layout>
</template>

<script>
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

  methods: {
    showPopup() {
      this.isShowPopup = true;
    },
    closeNotification() {
      this.isShowNotification = false;
    },
    closePopup() {
      this.isShowPopup = false;
    },
  },
};
</script>
