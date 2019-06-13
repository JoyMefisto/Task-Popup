<template>
  <div>
    <main>
      <block-header />
      <slot />
    </main>
    <block-footer/>
  </div>
</template>

<script>
import BlockHeader from '../blocks/header.vue';
import BlockFooter from '../blocks/footer.vue';

export default {
  name: 'app',

  components: {
    BlockHeader,
    BlockFooter,
  },
};
</script>

<style lang="scss">
  main {
    min-height: 100vh;
    padding-bottom: 70px;
  }
</style>
