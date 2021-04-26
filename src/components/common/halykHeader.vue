<template>
  <header class="header">
    <img src="@/assets/icons/logo.svg" alt="" class="header__logo" />
    <input type="text" class="header__input" />
    <div class="header__controls">
      <img src="@/assets/icons/calendar.svg" alt="" class="header__icon-link" />
      <img src="@/assets/icons/bell.svg" alt="" class="header__icon-link" />
      <div class="header__profile">
        <img src="" alt="" class="header__avatar" />
        <div class="header__name">Daniyer Egeubay</div>
      </div>
    </div>
  </header>
</template>

<script>
export default {};
</script>

<style lang="scss">
.header {
  height: 70px;
  width: 100%;

  display: flex;

  &__logo {
    width: 15%;
  }

  &__input {
    width: 60%;
  }

  &__controls {
    width: 25%;

    display: flex;
  }
}
</style>
