<template>
  <header class="header">
    <img src="../../src/assets/logo/opti-24-logo-top.svg" alt="logo-left-top">
    <img src="../../src/assets/logo/gpn-logo-top.svg" alt="logo-right-top">
  </header>
</template>

<script>
export default {
  name: 'Header',
};
</script>

<style lang="scss">
  .header {
    background-color: #404040;
    display: flex;
    justify-content: space-between;
    padding: 11px 94px;
  }
</style>
