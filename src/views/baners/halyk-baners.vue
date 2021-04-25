<template>
  <div class="baners">
    <halykHeader />
    <div class="baners-container">
      <div class="baners-title">
        Банеры
        <span class="baners-title-span">7</span>
      </div>
      <button class="baners-button">
        <span class="baners-button-text">Добавить</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          style="fill: #ffffff; transform: ; -ms-filter: "
        >
          <path
            d="M13 7L11 7 11 11 7 11 7 13 11 13 11 17 13 17 13 13 17 13 17 11 13 11z"
          ></path>
          <path
            d="M12,2C6.486,2,2,6.486,2,12s4.486,10,10,10c5.514,0,10-4.486,10-10S17.514,2,12,2z M12,20c-4.411,0-8-3.589-8-8 s3.589-8,8-8s8,3.589,8,8S16.411,20,12,20z"
          ></path>
        </svg>
      </button>
    </div>
    <div class="banners-wrapper">
      <div class="banners-baner"></div>
    </div>
  </div>
</template>

<script>
import halykHeader from "@/components/common/halyk-header";

export default {
  components: {
    halykHeader,
  },
};
</script>

<style scoped lang="scss">
@import "@/assets/styles/variables.scss";

.baners {
  &-container {
    margin-top: 15px;
    display: flex;
    align-items: flex-end;
  }

  &-title {
    font-size: 30px;
    opacity: 0.7;
    margin-right: 30px;

    &-span {
      font-size: 18px;
      opacity: 0.6;
    }
  }

  &-button {
    padding: 5px 10px;
    border: 1px solid $primary;
    color: #ffffff;
    background-color: $primary;
    display: flex;
    align-items: center;
    text-align: center;
    font-size: 13px;
    border-radius: 5px;
    cursor: pointer;
    transition: 200ms ease-in-out;
    outline: none;

    &-text {
      margin-right: 10px;
      margin-bottom: 2px;
    }
  }

  &-button:hover {
    opacity: 0.8;
  }
}
</style>
