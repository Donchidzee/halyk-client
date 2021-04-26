<template>
  <div>
    <div class="user-profile">
      <div class="user-profile-info">
        <div class="user-profile-image">
          <div class="user-profile-icon-big">
            <img
              src="@/assets/images/bxs-user.svg"
              class="user-profile-icon-big-im"
              alt=""
            />
          </div>
        </div>
        <div class="user-profile-info-container">
          <div class="user-profile-container">
            <div class="user-profile-icon">
              <img src="@/assets/images/bxs-user.svg" alt="" />
            </div>
            <span class="user-profile-text">Данияр Егеубай</span>
          </div>
          <div class="user-profile-container user-profile-container-email">
            <div class="user-profile-icon">
              <img src="@/assets/images/bx-mail-send.svg" alt="" />
            </div>
            <span class="user-profile-text">donchik020202@gmail.com</span>
          </div>
          <div class="user-profile-container">
            <div class="user-profile-icon">
              <img src="@/assets/images/bx-phone.svg" alt="" />
            </div>
            <span class="user-profile-text">8 (747) 617 17 21</span>
          </div>
          <div class="user-profile-buttons">
            <div class="user-profile-button">Редактировать профиль</div>
            <div class="user-profile-button">Изменить пароль</div>
            <div class="user-profile-button">
              <span class="user-profile-button">Выйти</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <h1>Вакансии</h1>
    <div class="vacancy-wrapper">
      <div class="vacancy-single">
        <div class="vacancy-text">
          <div class="vacancy-heading">Инженер-разработчик, 250000-300000</div>
          <div class="vacancy-content">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero,
            quis laborum iste fugiat corporis sequi illum quam magnam non magni,
            nesciunt facere, quo culpa consectetur cumque exercitationem atque
            voluptatem! Sit, quisquam libero nisi repellat temporibus facere
            doloremque a? Expedita dolorem minus nobis accusantium illo
            inventore pariatur harum quam tempore aperiam?
          </div>
        </div>
        <div class="vacancy-button-delete" @click="deleteClicked">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            style="fill: #e74c3c; transform: ; -ms-filter: "
          >
            <path
              d="M15,2H9C7.897,2,7,2.897,7,4v2H3v2h2v12c0,1.103,0.897,2,2,2h10c1.103,0,2-0.897,2-2V8h2V6h-4V4C17,2.897,16.103,2,15,2z M9,4h6v2H9V4z M17,20H7V8h1h8h1V20z"
            ></path>
          </svg>
        </div>
      </div>
      <div class="vacancy-single">
        <div class="vacancy-text">
          <div class="vacancy-heading">Летчик, 150000-200000</div>
          <div class="vacancy-content">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero,
            quis laborum iste fugiat corporis sequi illum quam magnam non magni,
            nesciunt facere, quo culpa consectetur cumque exercitationem atque
            voluptatem! Sit, quisquam libero nisi repellat temporibus facere
            doloremque a? Expedita dolorem minus nobis accusantium illo
            inventore pariatur harum quam tempore aperiam?
          </div>
        </div>
        <div class="vacancy-button-delete" @click="deleteClicked">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            style="fill: #e74c3c; transform: ; -ms-filter: "
          >
            <path
              d="M15,2H9C7.897,2,7,2.897,7,4v2H3v2h2v12c0,1.103,0.897,2,2,2h10c1.103,0,2-0.897,2-2V8h2V6h-4V4C17,2.897,16.103,2,15,2z M9,4h6v2H9V4z M17,20H7V8h1h8h1V20z"
            ></path>
          </svg>
        </div>
      </div>
      <div class="vacancy-single">
        <div class="vacancy-text">
          <div class="vacancy-heading">Менеджер, 120000-180000</div>
          <div class="vacancy-content">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero,
            quis laborum iste fugiat corporis sequi illum quam magnam non magni,
            nesciunt facere, quo culpa consectetur cumque exercitationem atque
            voluptatem! Sit, quisquam libero nisi repellat temporibus facere
            doloremque a? Expedita dolorem minus nobis accusantium illo
            inventore pariatur harum quam tempore aperiam?
          </div>
        </div>
        <div class="vacancy-button-delete" @click="deleteClicked">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            style="fill: #e74c3c; transform: ; -ms-filter: "
          >
            <path
              d="M15,2H9C7.897,2,7,2.897,7,4v2H3v2h2v12c0,1.103,0.897,2,2,2h10c1.103,0,2-0.897,2-2V8h2V6h-4V4C17,2.897,16.103,2,15,2z M9,4h6v2H9V4z M17,20H7V8h1h8h1V20z"
            ></path>
          </svg>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
@import "@/assets/styles/variables.scss";

.user-profile {
  display: flex;
  justify-content: space-between;
  width: 900px;
  padding: 70px 0px;
  box-sizing: border-box;

  &-info {
    width: 100%;
    box-sizing: border-box;
    display: flex;
    flex-direction: row;

    &-container {
      margin-top: 30px;
      margin-left: 50px;
    }
  }

  &-image {
    width: 300px;
    height: 300px;
    background-color: #34495e;
    border-radius: 10px;
    position: relative;
    box-shadow: 50px 50px 100px rgba(0, 0, 0, 0.02);
    display: flex;
    justify-content: space-around;
    align-items: center;
    overflow: hidden;
  }

  &-container:first-child {
    margin-top: 0;
  }

  &-container {
    display: flex;
    width: 100%;
    color: $dark;
    opacity: 0.6;
    margin-top: 10px;
  }

  &-icon {
    font-size: 22px;
    margin-right: 7px;
    margin-bottom: 3px;

    &-big {
      height: 100px;
      width: 100px;

      &-im {
        width: 100%;
        color: $white;
      }
    }
  }

  &-text {
    margin-top: 8px;
    font-size: 16px;
    font-weight: 500;
    line-height: 22px;
  }

  &-buttons {
    margin-top: 20px;
  }

  &-button {
    color: $primary;
    font-size: 15px;
    margin-top: 10px;
    cursor: pointer;
  }

  &-button:hover {
    opacity: 0.8;
  }

  &-button:last-child {
    display: none;
    color: #e74c3c;
    opacity: 0.9;
  }

  &-subscription {
    margin: 40px 0 15px 0;
    padding: 12px 20px;
    box-sizing: border-box;
    color: $primary;
    font-weight: 700;
    font-size: 15px;
    text-align: center;
    border: 1px solid $primary;
    border-radius: 8px;

    &-active {
      color: $white;
      background-color: $primary;
    }
  }

  &-link {
    color: $primary;
    font-size: 15px;
    font-weight: 500;
    text-decoration: none;
    cursor: pointer;
    transition: 200ms ease-in-out;

    &:hover {
      opacity: 0.7;
    }
  }

  &-expired {
    color: $dark;
    font-size: 15px;
    font-weight: 500;
    opacity: 0.5;
  }

  &-courses {
    &-heading {
      font-weight: 400;
    }

    &-container {
      margin-top: 30px;
    }

    &-card:last-child {
      margin-top: 60px;
    }
  }
}

.vacancy {
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

    &-dark {
      color: #000000;
      margin-bottom: 30px;
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

    &-submit {
      margin-top: 10px;
    }

    &-delete-submit {
      margin-top: 20px;
    }
  }

  &-button:hover {
    opacity: 0.8;
  }

  &-wrapper {
    margin-top: 30px;
  }

  &-single {
    width: 100%;
    margin-bottom: 20px;
    display: flex;
    border: 1px solid #939393;
    padding: 20px;
    box-sizing: border-box;
    border-radius: 7px;
  }

  &-text {
    width: 95%;
  }

  &-heading {
    color: #000000;
    font-size: 26px;
  }

  &-content {
    margin-top: 15px;
  }

  &-button {
    &-delete {
      margin-left: 10px;
      cursor: pointer;
    }
  }

  &-input {
    margin-top: 20px;
  }
}

.skeleton {
  width: 400px;
  margin-top: 60px;

  &-image {
    margin-right: 10px;
  }

  &-container {
    width: 100%;
    display: flex;
  }

  &-wrapper {
    width: 100%;
  }

  &-title {
    margin-bottom: 5px;
  }

  &-description {
    margin-bottom: 10px;
  }

  &-progression {
    margin-top: 20px;
  }
}
</style>
