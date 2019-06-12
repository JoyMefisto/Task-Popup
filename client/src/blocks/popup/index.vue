<template>
	<div class="popup" v-if="isShow">
    <div class="popup__shadow"></div>
    <div class="popup__block"></div>
  </div>
</template>

<script>
export default {
  name: 'Popup',

  props: {
    isShow: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="scss">
  .popup {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;

    &__shadow {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      z-index: 10;
      display: block;
      background-color: #000;
      opacity: .4;
    }

    &__block {
      padding: 44px 48px 40px;
      background-color: #f5f5f5;
      position: absolute;
      z-index: 20;
      top: 50%;
      left: 50%;
      margin-right: -50%;
      transform: translate(-50%, -50%);
    }
  }
</style>
