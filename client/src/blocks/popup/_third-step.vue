<template>
	<div class="popup-third-step">
    <h2 class="popup-third-step__title">Багодарим за оценку!</h2>
    <p class="popup-third-step__description">Мы будем признательны, если Вы оставите отзыв или предложение по
      улучшению работы «Газпромнефть-Корпоративные продажи».</p>

    <div class="popup-third-step__box">
      <textarea class="popup-third-step__answer" placeholder="Ваш ответ..." name="answer" id="" cols="30" rows="10"></textarea>
    </div>
    <div class="popup-third-step__interaction">
      <button type="button" class="-button">Отправить</button>
      <button type="button" class="-button__link">Закрыть</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "ThirdStepPopup",
}
</script>

<style lang="scss">
@import "../../assets/style/variables.scss";

.popup-third-step {
  max-width: 816px;

  &__title {
    font-size: 32px;
    line-height: 42px;
    margin-bottom: 28px;
    color: $tundora;
  }

  &__description {
    font-size: 16px;
    line-height: 20px;
    color: $mortar;
    margin-bottom: 20px;
  }

  &__box {
    width: 100%;
    position: relative;
    margin: 24px auto 40px;
  }

  &__answer {
    width: 100%;
    color: $nobel;
    font-size: 16px;
    font-family: $font-italic, Arial, Helvetica, sans-serif;
    padding: 14px 18px;
    border: solid 1px $alto;
    border-radius: 3px;

    &::placeholder {
      color: $nobel;
    }
  }

  &__interaction {
    display: flex;
    justify-content: space-between;

    .-button__link {
      font-size: 20px;
    }
  }
}
</style>
