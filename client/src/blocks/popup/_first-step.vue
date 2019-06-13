<template>
  <div class="popup-first-step">
    <h2 class="popup-first-step__title">Нам важно Ваше мнение!</h2>
    <p class="popup-first-step__question">{{ label }}</p>
    <p class="popup-first-step__description">
      Для оценки используйте 10-балльную шкалу, где 10 – точно готовы рекомендовать,
      1 – точно не готовы рекомендовать.
    </p>
    <div class="popup-first-step__box">
      <div class="popup-first-step__scale" :style="{ width: procent + '%'}"></div>
      <div class="popup-first-step__rating">
        <template v-for="(item, key) in count">
          <input
            type="radio"
            name="rating"
            :key="`input_${key}`"
            :id="`rating${key}`"
            :checked="item === 1"
            @change="changeRating(item, key)"
          >
          <label :for="`rating${key}`" :key="`label_${key}`"><span>{{ count - key }}</span></label>
        </template>

      </div>
    </div>
    <div class="popup-first-step__interaction">
      <button type="button" class="-button" @click="nextStep">Отправить</button>
      <button type="button" class="-button__link" @click="closePopup">Больше не спрашивать</button>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';

export default {
  name: 'FirstStepPopup',

  data() {
    return {
      procent: 100,
      count: 10,
      point: 10,
    };
  },

  computed: {
    ...mapState('popup', {
      label: state => state.rating.server.label,
    }),
  },

  methods: {
    ...mapMutations('popup', {
      setRate: 'SET_RATE',
    }),
    changeRating(item, key) {
      const length = 100 / (this.count - 1);
      const num = this.count - item;
      this.procent = num * length;
      this.point = this.count - key;

      this.setRate(this.point);
    },
    nextStep() {
      this.$emit('next:step', this.count === this.point ? 3 : 2);
    },
    closePopup() {
      this.$emit('close:popup');
    },
  },
};
</script>

<style lang="scss">
@import "../../assets/style/variables.scss";

.popup-first-step {
  max-width: 816px;

  &__title {
    font-size: 32px;
    line-height: 42px;
    margin-bottom: 28px;
    color: $tundora;
  }

  &__question {
    font-family: $font-bold, Arial, Helvetica, sans-serif;
    font-size: 16px;
    color: $tundora;
    margin-bottom: 8px;
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
    margin: 56px auto 80px;

    &::before,
    &::after {
      content: "";
      position: absolute;
      display: block;
    }

    &::before {
      left: -76px;
      top: -20px;
      background: url("../../assets/icon/dislike-3-x.png") no-repeat center center;
      width: 40px;
      height: 40px;
    }

    &::after {
      right: -76px;
      top: -20px;
      background: url("../../assets/icon/like-3-x.png") no-repeat 0 0;
      width: 40px;
      height: 40px;
    }
  }

  &__scale {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    height: 3px;
    background-color: $azure;
    position: absolute;
  }

  &__rating {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row-reverse;
    height: 3px;
    background-color: $alto;

    & input {
      display: none;
    }

    & label {
      cursor: pointer;
      width: 18px;
      height: 18px;
      background-color: $white;
      border: 3px solid $alto;
      display: flex;
      justify-content: center;
      align-items: center;
      transition: .2s;
      border-radius: 50%;
      position: relative;

      & span {
        font-family: $font-bold, Arial, Helvetica, sans-serif;
        color: $tundora;
        font-size: 20px;
        position: relative;
        top: -24px;
      }
    }

    & input[type='radio']:checked ~ label{
      background-color: $azure;
      border-color: $azure;
    }
  }

  &__interaction {
    display: flex;
    justify-content: space-between;
  }
}
</style>
