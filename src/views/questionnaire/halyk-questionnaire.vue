<template>
  <div class="questionnaire">
    <halykHeader />
    <div class="questionnaire-container">
      <div class="questionnaire-title">
        Анкеты
        <span class="questionnaire-title-span">{{
          questionnaires.length
        }}</span>
      </div>
      <div class="questionnaire-filters">
        <halykSelect
          :options="searchOptions"
          @option-changed="searchOptionChanged"
          title="Волонтеры"
        />
      </div>
    </div>
    <table class="questionnaire-table" cellspacing="0">
      <tr class="questionnaire-row">
        <th class="questionnaire-cell questionnaire-head">№</th>
        <th class="questionnaire-cell questionnaire-head">ФИ волонтера</th>
        <th class="questionnaire-cell questionnaire-head">ФИ респондента</th>
        <th class="questionnaire-cell questionnaire-head">Номер респондента</th>
      </tr>
      <tr
        class="questionnaire-data"
        v-for="(questionnaire, index) in questionnaires"
        :key="questionnaire.id"
      >
        <td class="questionnaire-cell">{{ index + 1 }}</td>
        <td class="questionnaire-cell">{{ questionnaire.voluteerName }}</td>
        <td class="questionnaire-cell">{{ questionnaire.respondentName }}</td>
        <td class="questionnaire-cell">{{ questionnaire.respondentNumber }}</td>
      </tr>
    </table>
  </div>
</template>

<script>
import halykHeader from "@/components/common/halyk-header";
import halykSelect from "@/components/common/halyk-select";

export default {
  components: {
    halykHeader,
    halykSelect,
  },
  data() {
    return {
      questionnaires: [
        {
          id: 0,
          voluteerName: "Almaz",
          respondentName: "Игорь",
          respondentNumber: "8(747)-123-32-23",
        },
        {
          id: 1,
          voluteerName: "Almaz",
          respondentName: "Жайнар",
          respondentNumber: "8(747)-123-32-23",
        },
        {
          id: 2,
          voluteerName: "Almaz",
          respondentName: "Жайнар",
          respondentNumber: "8(747)-123-32-23",
        },
        {
          id: 3,
          voluteerName: "Almaz",
          respondentName: "Жайнар",
          respondentNumber: "8(747)-123-32-23",
        },
        {
          id: 4,
          voluteerName: "Almaz",
          respondentName: "Жайнар",
          respondentNumber: "8(747)-123-32-23",
        },
        {
          id: 5,
          voluteerName: "Almaz",
          respondentName: "Жайнар",
          respondentNumber: "8(747)-123-32-23",
        },
        {
          id: 6,
          voluteerName: "Almaz",
          respondentName: "Жайнар",
          respondentNumber: "8(747)-123-32-23",
        },
        {
          id: 7,
          voluteerName: "Almaz",
          respondentName: "Жайнар",
          respondentNumber: "8(747)-123-32-23",
        },
        {
          id: 8,
          voluteerName: "Almaz",
          respondentName: "Жайнар",
          respondentNumber: "8(747)-123-32-23",
        },
        {
          id: 9,
          voluteerName: "Almaz",
          respondentName: "Жайнар",
          respondentNumber: "8(747)-123-32-23",
        },
        {
          id: 10,
          voluteerName: "Almaz",
          respondentName: "Жайнар",
          respondentNumber: "8(747)-123-32-23",
        },
        {
          id: 11,
          voluteerName: "Almaz",
          respondentName: "Жайнар",
          respondentNumber: "8(747)-123-32-23",
        },
        {
          id: 12,
          voluteerName: "Almaz",
          respondentName: "Жайнар",
          respondentNumber: "8(747)-123-32-23",
        },
      ],
      searchOptions: ["Алмаз", "Айдар", "Айбек"],
    };
  },
  methods: {
    searchOptionChanged(option) {
      console.log(option);
    },
  },
};
</script>

<style scoped lang="scss">
@import "@/assets/styles/variables.scss";

.questionnaire {
  width: 100%;
  padding: 20px 3%;
  box-sizing: border-box;

  &-container {
    margin-top: 15px;
  }

  &-filters {
    margin-top: 30px;
  }

  &-title {
    font-size: 30px;
    opacity: 0.7;

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

  &-data {
    cursor: pointer;
  }

  &-data:hover {
    background-color: #f5b03320;
  }

  &-cell {
    text-align: left;
    padding: 15px 15px;
    border-bottom: 1px solid #f5b03350;
    box-sizing: border-box;
  }
}
</style>
