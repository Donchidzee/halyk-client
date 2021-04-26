<template>
  <div class="cover-box">
    <nav class="box__nav nav">
      <div class="nav__item">
        <img src="@/assets/icons/plus.svg" alt="" class="nav__icon" />
        <div class="nav__link">Halyk stars</div>
      </div>
      <div class="nav__item">
        <img src="@/assets/icons/plus.svg" alt="" class="nav__icon" />
        <div class="nav__link">Halyk жаналык</div>
      </div>
      <div class="nav__item">
        <img src="@/assets/icons/plus.svg" alt="" class="nav__icon" />
        <div class="nav__link">Halyk команда</div>
      </div>
      <div class="nav__item">
        <img src="@/assets/icons/plus.svg" alt="" class="nav__icon" />
        <div class="nav__link">Сервисы</div>
      </div>
      <div class="nav__item">
        <img src="@/assets/icons/plus.svg" alt="" class="nav__icon" />
        <div class="nav__link">Обучение</div>
      </div>
      <div class="nav__item">
        <img src="@/assets/icons/plus.svg" alt="" class="nav__icon" />
        <div class="nav__link">Афиша</div>
      </div>
    </nav>
    <div class="phone">
      <img src="@/assets/icons/phone.svg" alt="" class="phone__icon" />
      <div class="phone__content">
        <div class="phone__heading">Телефон доверия</div>
        <div class="phone__value">9-999-99-99</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
@import "@/assets/styles/variables.scss";
.cover-box {
  width: 240px;
  min-height: calc(100vh - 71px);

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: rgba(196, 226, 247, 0.205);
}

.nav {
  display: flex;
  flex-direction: column;
  padding-top: 20px;
  padding-left: 30px;

  &__item {
    display: flex;
    margin: 8px 0;
  }

  &__icon {
    margin-right: 15px;
  }
}

.phone {
  height: 100px;
  display: flex;
  padding-left: 30px;
  align-items: flex-start;

  &__icon {
    width: 20px;
    margin-right: 6px;
  }

  &__content {
  }
}
</style>
