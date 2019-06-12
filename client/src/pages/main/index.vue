<template>
  <default-layout>
    <div class="main">
      <notification @show:popup="showPopup"/>
      <popup :isShow="isShowPopup" />
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
  },
};
</script>
