<template>
  <header class="header">
    <img src="@/assets/icons/logo.svg" alt="" class="header__logo" />
    <input type="text" class="header__input" placeholder="Поиск" />
    <div class="header__controls">
      <img src="@/assets/icons/calendar.svg" alt="" class="header__icon-link" />
      <img src="@/assets/icons/bell.svg" alt="" class="header__icon-link" />
      <div class="header__profile">
        <img src="@/assets/img/avatar.jpg" alt="" class="header__avatar" />
        <div class="header__name">Daniyer Egeubay</div>
      </div>
    </div>
  </header>
</template>

<script>
export default {};
</script>

<style lang="scss">
@import "@/assets/styles/variables.scss";

.header {
  height: 70px;
  width: 100%;

  display: flex;
  align-items: center;
  border-bottom: 1px solid #ccc;

  &__logo {
    width: 100px;
    height: 60%;
  }

  &__input {
    height: 60%;
    padding-left: 10px;
    text-align: left;
    flex: 1;

    border: 1px solid $primary;
    border-radius: 5px;
  }

  &__controls {
    display: flex;
    margin: 0 30px;
    align-items: center;
  }

  &__icon-link {
    margin: 0 10px;
  }

  &__avatar {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin-right: 20px;
  }

  &__profile {
    display: flex;
    align-items: center;
  }

  &__name {
    color: rgb(78, 78, 78);
  }
}
</style>
