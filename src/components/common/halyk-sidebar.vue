<template>
  <div class="sidebar">
    <div class="content-half">
      <logo class="sidebar-logo" />
      <div class="dividing-line"></div>
      <div class="navigation-links">
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
        <router-link class="link link-active" to="/app/baners">
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
          <span class="link-text">Банеры</span>
        </router-link>
        <router-link class="link link-active" to="/app/news">
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
          <span class="link-text">Новости</span>
        </router-link>
        <router-link class="link link-active" to="/app/vacancy">
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
          <span class="link-text">Вакансии</span>
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
