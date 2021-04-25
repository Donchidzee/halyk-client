<template>
  <div class="volunteers">
    <halykHeader />
    <div class="volunteers-container">
      <div class="volunteers-title">
        Волонтеры
        <span class="volunteers-title-span">{{ volunteerss.length }}</span>
      </div>
      <button class="volunteers-button">
        <span class="volunteers-button-text">Добавить</span>
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
    <table class="volunteers-table" cellspacing="0">
      <tr class="volunteers-row">
        <th class="volunteers-cell volunteers-head">№</th>
        <th class="volunteers-cell volunteers-head">ФИ волонтера</th>
        <th class="volunteers-cell volunteers-head">Номер волонтера</th>
        <th class="volunteers-cell volunteers-head">Удалить</th>
      </tr>
      <tr
        class="volunteers-data"
        v-for="(volunteers, index) in volunteerss"
        :key="volunteers.id"
      >
        <td class="volunteers-cell">{{ index + 1 }}</td>
        <td class="volunteers-cell">{{ volunteers.voluteerName }}</td>
        <td class="volunteers-cell">{{ volunteers.respondentNumber }}</td>
        <td class="volunteers-cell">
          <button class="volunteers-button-delete">
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
          </button>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
import halykHeader from "@/components/common/halyk-header";

export default {
  components: {
    halykHeader,
  },
  data() {
    return {
      volunteerss: [
        {
          id: 0,
          voluteerName: "Almaz",
          respondentName: "Игорь",
          respondentNumber: "8(747)-123-32-23",
        },
        {
          id: 1,
          voluteerName: "Айдар",
          respondentName: "Жайнар",
          respondentNumber: "8(747)-123-32-23",
        },
        {
          id: 2,
          voluteerName: "Айбек",
          respondentName: "Жайнар",
          respondentNumber: "8(747)-123-32-23",
        },
      ],
      searchOptions: ["Алмаз", "Айдар", "Айбек"],
    };
  },
};
</script>

<style scoped lang="scss">
@import "@/assets/styles/variables.scss";

.volunteers {
  padding: 20px 3%;
  box-sizing: border-box;
  width: 100%;

  &-container {
    margin-top: 25px;
    display: flex;
    width: 100%;
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

  &-table {
    width: 100%;
    margin-top: 25px;
    opacity: 0.8;
    color: $dark;
  }

  &-head {
    background-color: #f5b03350;
  }

  &-cell {
    text-align: left;
    padding: 15px 15px;
    border-bottom: 1px solid #f5b03350;
    box-sizing: border-box;
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

    &-delete {
      background-color: transparent;
      border: 0;
      cursor: pointer;
      transition: 200ms ease-in-out;
      outline: none;
    }

    &-delete:hover {
      opacity: 0.8;
    }
  }

  &-button:hover {
    opacity: 0.8;
  }
}
</style>
