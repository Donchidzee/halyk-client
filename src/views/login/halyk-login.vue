<template>
  <div class="register">
    <logo class="register-logo" />
    <form action="" @submit.prevent="login" class="register-form">
      <p class="register-title">Добро пожаловать</p>
      <h3 class="register-subtitle">Войдите в аккаунт</h3>
      <halyk-input
        class="register-input"
        type="email"
        title="Почта"
        placeholder="Введите почту"
      />
      <halyk-input
        class="register-input"
        type="password"
        title="Пароль"
        placeholder="Введите пароль"
      />
      <button class="register-button" type="submit">Войти</button>
    </form>
  </div>
</template>

<script>
import halykInput from "@/components/common/halyk-input.vue";
import logo from "@/components/common/halyk-logo.vue";

export default {
  components: {
    "halyk-input": halykInput,
    logo,
  },
  methods: {
    login() {
      this.$router.push("/app/questionnaire");
    },
  },
};
</script>

<style scoped lang="scss">
@import "@/assets/styles/variables.scss";
@import "@/assets/styles/global.scss";

.register {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  background-color: $background;

  &-logo {
    width: 300px;
    margin-top: 100px;
    margin-right: 20px;
  }

  &-form {
    margin-top: 20px;
    width: 400px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: $primary;
    border-radius: 20px;
    box-sizing: border-box;
    padding: 40px 40px;
    box-shadow: 0 0 100px rgba(0, 0, 0, 0.05);
  }

  &-title {
    font-size: 20px;
    opacity: 0.9;
    color: #ffffff;
  }

  &-subtitle {
    font-size: 30px;
    margin-top: 10px;
    color: $yellow;
  }

  &-input {
    margin-top: 20px;
  }

  &-button {
    padding: 10px 10px;
    border-radius: 10px;
    background-color: $yellow;
    border: 0;
    color: #ffffff;
    width: 100%;
    font-size: 17px;
    margin-top: 30px;
    cursor: pointer;
    transition: 200ms ease-in-out;
    outline: none;
  }

  &-button:hover {
    opacity: 0.8;
  }
}
</style>
