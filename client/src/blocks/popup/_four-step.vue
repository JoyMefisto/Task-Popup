<template>
  <div class="popup-four-step">
    <h2 class="popup-four-step__title">Спасибо</h2>
    <button type="button" class="-button__link" @click="closePopup">Закрыть</button>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
  name: 'FourStepPopup',

  methods: {
    ...mapMutations('popup', {
      setFinish: 'SET_FINISH',
    }),
    closePopup() {
      this.setFinish(true);
      this.$emit('close:popup').$emit('send:result');
    },
  },
};
</script>

<style lang="scss">
@import "../../assets/style/variables.scss";

.popup-four-step {
  max-width: 816px;
  text-align: center;

  &__title {
    font-size: 32px;
    line-height: 42px;
    margin-bottom: 44px;
    min-width: 482px;
    color: $tundora;
  }

  .-button__link {
    font-size: 20px;
  }
}
</style>
