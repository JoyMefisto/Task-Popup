<template>
	<div class="popup-four-step">
    <h2 class="popup-four-step__title">Спасибо</h2>
    <button type="button" class="-button__link">Закрыть</button>
  </div>
</template>

<script>
export default {
  name: "FourStepPopup",
}
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
