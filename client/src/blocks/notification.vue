<template>
  <div class="notification" v-if="isShowNotification">
    <p class="notification__block-text">
      <span>Мы хотим стать лучше! Пожалуйста, пройдите опрос и оцените качество сервиса. </span>
      <a href="/" class="notification__text-link" @click="showPopup">Пройти опрос</a>
    </p>
    <a href="/" class="notification__close" @click="closeNotification"></a>
  </div>
</template>

<script>
export default {
  name: 'Notification',

  data() {
    return {
      isShowNotification: true,
    };
  },

  methods: {
    showPopup(e) {
      e.preventDefault();

      this.$emit('show:popup');
    },
    closeNotification(e) {
      e.preventDefault();

      this.isShowNotification = false;
    },
  },
};
</script>

<style lang="scss">
  @import "../assets/style/variables.scss";

  .notification {
    background-color: $highland;
    padding: 6px 94px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    &__block-text {
      font-family: $font-regular, Arial, Helvetica, sans-serif;
      color: $white;
      line-height: 16px;
    }

    &__text-link {
      color: $white;

      &:active {
        color: $white;
      }
    }

    &__close {
      background: url("../../src/assets/logo/close.svg") no-repeat 0 0;
      display: block;
      width: 12px;
      height: 12px;
    }
  }
</style>
