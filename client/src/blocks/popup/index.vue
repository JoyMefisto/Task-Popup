<template>
  <div class="popup" v-if="isShow">
    <div class="popup__shadow"></div>
    <div class="popup__block">
      <first-step v-if="step === 1" @next:step="nextStep" @close:popup="closePopup" />
      <second-step v-if="step === 2" @next:step="nextStep" @close:popup="closePopup" @send:result="sendResult" />
      <third-step v-if="step === 3" @next:step="nextStep" @close:popup="closePopup" @send:result="sendResult" />
      <four-step v-if="step === 4" @close:popup="closePopup" @send:result="sendResult" />
    </div>
  </div>
</template>

<script>
import FirstStep from './_first-step.vue';
import SecondStep from './_second-step.vue';
import ThirdStep from './_third-step.vue';
import FourStep from './_four-step.vue';

export default {
  name: 'Popup',

  data() {
    return {
      step: 1,
    };
  },

  components: {
    FirstStep,
    SecondStep,
    ThirdStep,
    FourStep,
  },

  props: {
    isShow: {
      type: Boolean,
      default: false,
    },
  },

  methods: {
    nextStep(step) {
      this.step = step;
    },
    closePopup() {
      this.$emit('close:popup');
    },
    sendResult() {
      this.$emit('send:result');
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
