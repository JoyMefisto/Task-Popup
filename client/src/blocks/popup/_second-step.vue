<template>
  <div class="popup-second-step">
    <h2 class="popup-second-step__title">Почему Вы не поставили оценку 10?</h2>
    <p class="popup-second-step__description">Выберите не более 3-х ключевых причин.</p>

    <div class="popup-second-step__box">
      <div
        class="popup-second-step__question"
        v-for="(item, key) in reasons"
        :key="key">
        <input type="checkbox" :id="key" @change="checkCheckbox">
        <label :for="key">
          <span class="popup-second-step__checkbox-custom"></span>
          <span>{{item}}</span>
        </label>
        <input type="text" :id="`answer${key}`" :data-id="key" @input="setValueOfInputs">
      </div>
    </div>

    <div class="popup-second-step__interaction">
      <button
        type="button"
        :class="[
          '-button',
          {
            '-button_disabled': isDisableNext
          }
        ]"
        :disabled="isDisableNext"
        @click="nextStep"
      >
        Отправить
      </button>
      <button type="button" class="-button__link" @click="closePopup">Закрыть</button>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';

export default {
  name: 'SecondStepPopup',

  data() {
    return {
      isDisableNext: true,
    };
  },

  computed: {
    ...mapState('popup', {
      reasons: state => state.rating.server.reasons,
    }),
  },

  methods: {
    ...mapMutations('popup', {
      createAnswer: 'CREATE_ANSWER',
      setAnswer: 'SET_ANSWER',
      deleteAnswer: 'DELETE_ANSWER',
    }),
    nextStep() { // eslint-disable-line consistent-return
      const isCheckedTen = this.$el.querySelector('input[id="10"]').checked;

      if (isCheckedTen) {
        if (this.$el.querySelector('#answer10').value === '') {
          alert('Поле "Другое" - обязательно для заполнения!'); // eslint-disable-line no-alert

          return false;
        }
      }

      this.$emit('next:step', 3);
    },
    closePopup() {
      this.$emit('close:popup').$emit('send:result');
    },
    setValueOfInputs(e) {
      this.setAnswer({ id: e.target.dataset.id, answer: e.target.value });
    },
    checkCheckbox(e) { // eslint-disable-line consistent-return
      if (e.target.checked) {
        this.createAnswer({ id: e.target.id, answer: '' });
      } else {
        this.deleteAnswer({ id: e.target.id });
        this.$el.querySelector(`#answer${e.target.id}`).value = '';
      }

      /* Validation second step */
      const checked = this.$el.querySelectorAll('.popup-second-step__question input[type="checkbox"]:checked');
      const lengthCheckbox = checked.length;
      const dontChecked = this.$el.querySelectorAll('.popup-second-step__question input[type="checkbox"]:not(:checked)');

      if (lengthCheckbox === 3) {
        dontChecked.forEach((el) => {
          const elem = el;

          elem.disabled = true;
        });
      } else {
        dontChecked.forEach((el) => {
          const elem = el;

          elem.disabled = false;
        });
      }

      if (lengthCheckbox > 0 && lengthCheckbox < 4) {
        this.isDisableNext = false;
        return false;
      }

      this.isDisableNext = true;
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

    & input[type="checkbox"]:disabled ~ label {
      opacity: .4;
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
