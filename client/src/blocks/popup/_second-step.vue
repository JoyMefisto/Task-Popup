<template>
  <div class="popup-second-step">
    <h2 class="popup-second-step__title">Почему Вы не поставили оценку 10?</h2>
    <p class="popup-second-step__description">Выберите не более 3-х ключевых причин.</p>

    <div class="popup-second-step__box">
      <div class="popup-second-step__question">
        <input type="checkbox" id="checkbox1">
        <label for="checkbox1">
          <span class="popup-second-step__checkbox-custom"></span>
          <span>Задержки документооборота</span>
        </label>
        <input type="text" name="answer1">
      </div>

      <div class="popup-second-step__question">
        <input type="checkbox" id="checkbox2">
        <label for="checkbox2">
          <span class="popup-second-step__checkbox-custom"></span>
          <span>Неудобный личный кабинет / не хватает опций</span>
        </label>
        <input type="text" name="answer2">
      </div>

      <div class="popup-second-step__question">
        <input type="checkbox" id="checkbox3">
        <label for="checkbox3">
          <span class="popup-second-step__checkbox-custom"></span>
          <span>Не устраивает тарифная политика</span>
        </label>
        <input type="text" name="answer3">
      </div>

      <div class="popup-second-step__question">
        <input type="checkbox" id="checkbox4">
        <label for="checkbox4">
          <span class="popup-second-step__checkbox-custom"></span>
          <span>Текущие рабочие вопросы решаются медленно</span>
        </label>
        <input type="text" name="answer4">
      </div>

      <div class="popup-second-step__question">
        <input type="checkbox" id="checkbox5">
        <label for="checkbox5">
          <span class="popup-second-step__checkbox-custom"></span>
          <span>Неудобная отчетность / нет нужных отчетов</span>
        </label>
        <input type="text" name="answer5">
      </div>

      <div class="popup-second-step__question">
        <input type="checkbox" id="checkbox6">
        <label for="checkbox6">
          <span class="popup-second-step__checkbox-custom"></span>
          <span>Неудобные / долгие процедуры заключения договора</span>
        </label>
        <input type="text" name="answer6">
      </div>

      <div class="popup-second-step__question">
        <input type="checkbox" id="checkbox7">
        <label for="checkbox7">
          <span class="popup-second-step__checkbox-custom"></span>
          <span>Сбои при работе с личным кабинетом</span>
        </label>
        <input type="text" name="answer7">
      </div>

      <div class="popup-second-step__question">
        <input type="checkbox" id="checkbox8">
        <label for="checkbox8">
          <span class="popup-second-step__checkbox-custom"></span>
          <span>Мало дополнительных сервисов для водителей по топливным картам</span>
        </label>
        <input type="text" name="answer8">
      </div>

      <div class="popup-second-step__question">
        <input type="checkbox" id="checkbox9">
        <label for="checkbox9">
          <span class="popup-second-step__checkbox-custom"></span>
          <span>Не устраивает работа менеджеров</span>
        </label>
        <input type="text" name="answer9">
      </div>

      <div class="popup-second-step__question">
        <input type="checkbox" id="checkbox10">
        <label for="checkbox10">
          <span class="popup-second-step__checkbox-custom"></span>
          <span>Другое</span>
        </label>
        <input type="text" name="answer10">
      </div>

    </div>
    <div class="popup-second-step__interaction">
      <button type="button" class="-button" @click="nextStep">Отправить</button>
      <button type="button" class="-button__link" @click="closePopup">Закрыть</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SecondStepPopup',

  methods: {
    nextStep() {
      this.$emit('next:step', 3);
    },
    closePopup() {
      this.$emit('close:popup');
    },
  },
};
</script>

<style lang="scss">
@import "../../assets/style/variables.scss";

.popup-second-step {
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
    width: 664px;
    position: relative;
    margin: 24px 0 48px;

    & input[type="checkbox"] {
      display: none;
    }

    & label {
      display: flex;
      color: $tundora;
      align-items: center;
      font-size: 16px;
    }

    & input[type="checkbox"]:checked ~ label > .popup-second-step__checkbox-custom {
      background: url("../../assets/icon/v.png") no-repeat 0 0;
    }

    & input[type="text"] {
      display: none;
    }

    & input[type="checkbox"]:checked ~ input[type="text"] {
      display: block;
    }
  }

  &__question {
    margin-bottom: 8px;
  }

  &__checkbox-custom {
    background: url("../../assets/icon/checkbox.png") no-repeat 0 0;
    width: 21px;
    height: 21px;
    display: inline-block;
    margin-right: 8px;
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
