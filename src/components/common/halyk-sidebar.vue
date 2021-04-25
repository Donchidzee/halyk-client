<template>
  <div class="sidebar">
    <div class="content-half">
      <logo class="sidebar-logo" />
      <div class="dividing-line"></div>
      <div class="navigation-links">
        <router-link class="link" to="/app/questionnaire">
          <div class="link-icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              style="fill: #3a7a58; transform: ; -ms-filter: "
            >
              <path
                d="M19.903,8.586c-0.049-0.106-0.11-0.207-0.196-0.293l-6-6c-0.086-0.086-0.187-0.147-0.293-0.196 c-0.03-0.014-0.062-0.022-0.094-0.033c-0.084-0.028-0.17-0.046-0.259-0.051C13.04,2.011,13.021,2,13,2H6C4.897,2,4,2.897,4,4v16 c0,1.103,0.897,2,2,2h12c1.103,0,2-0.897,2-2V9c0-0.021-0.011-0.04-0.013-0.062c-0.005-0.089-0.022-0.175-0.051-0.259 C19.926,8.647,19.917,8.616,19.903,8.586z M16.586,8H14V5.414L16.586,8z M6,20V4h6v5c0,0.553,0.447,1,1,1h5l0.002,10H6z"
              ></path>
              <path d="M8 12H16V14H8zM8 16H16V18H8zM8 8H10V10H8z"></path>
            </svg>
          </div>
          <span class="link-text">Анкеты</span>
        </router-link>
        <router-link class="link link-active" to="/app/employees">
          <div class="link-icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              style="fill: #3a7a58; transform: ; -ms-filter: "
            >
              <path
                d="M9.715,12c1.151,0,2-0.849,2-2s-0.849-2-2-2s-2,0.849-2,2S8.563,12,9.715,12z"
              ></path>
              <path
                d="M20,4H4C2.897,4,2,4.841,2,5.875v12.25C2,19.159,2.897,20,4,20h16c1.103,0,2-0.841,2-1.875V5.875C22,4.841,21.103,4,20,4z M20,18L4,17.989V6l16,0.011V18z"
              ></path>
              <path
                d="M14 9H18V11H14zM15 13H18V15H15zM13.43 15.536c0-1.374-1.676-2.786-3.715-2.786S6 14.162 6 15.536V16h7.43V15.536z"
              ></path>
            </svg>
          </div>
          <span class="link-text">Сотрудники</span>
        </router-link>
      </div>
    </div>
    <div class="content-half">
      <div class="navigation-links-extra">
        <div class="link link-exit">
          <span class="link-text">Выход</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import logo from "@/components/common/halyk-logo";

export default {
  components: {
    logo,
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/variables.scss";

.sidebar {
  position: fixed;
  left: 0;
  top: 0;
  padding: 45px 50px;
  padding-right: 0;
  width: 300px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-sizing: border-box;
  background-color: #ffffff;
  z-index: 3;

  &-logo {
    margin-bottom: 40px;
    width: 130px;
  }
}

.content-half {
  width: 100%;
  display: flex;
  flex-direction: column;
}

.dividing-line {
  margin-bottom: 40px;
  height: 2px;
  width: 200px;
  background-color: #f3f3f3;
}

.navigation-links {
  width: 100%;
  display: flex;
  flex-direction: column;

  &-extra {
    position: relative;
  }
}

.link {
  margin-bottom: 30px;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  color: $primary;
  text-decoration: none;
  opacity: 1;
  cursor: pointer;
  transition: 200ms ease-in-out;

  &:hover {
    opacity: 0.8;
  }

  &.router-link-exact-active {
    color: $primary;
    opacity: 0.9;
  }

  &-help {
    position: relative;
  }

  &-exit:hover {
    color: #e74c3c;
  }

  &-icon {
    margin-right: 8px;
  }

  &-text {
    font-size: 15px;
    font-weight: 500;
    margin-bottom: 6px;
  }
}

@media (max-width: 1024px) {
  .sidebar {
    justify-content: center;
    bottom: 0;
    left: 0;
    top: auto;
    height: 50px;
    width: 100%;
    left: 50%;
    transform: translateX(-50%);
    padding: 0;
    border-radius: 25px 25px 0 0;
    box-shadow: 0px 0px 100px rgba(0, 0, 0, 0.25);
    background-color: #ffffff;

    &-logo {
      display: none;
    }
  }

  .dividing-line {
    display: none;
  }

  .navigation-links-extra {
    display: none;
  }

  .subscription {
    display: none;
  }

  .navigation-links {
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    width: 100%;
    height: fit-content;
  }

  .link {
    width: auto;
    margin-bottom: 0;
    color: $dark;

    &.router-link-exact-active {
      color: $primary;
      opacity: 1;
    }
  }
}

@media (max-width: 750px) {
  .sidebar {
    width: 100%;
  }
}
</style>
