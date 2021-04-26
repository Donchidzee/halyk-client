<template>
  <div class="news">
    <halykHeader />
    <div class="news-container">
      <div class="news-title">
        Новости
        <span class="news-title-span">4</span>
      </div>
      <button class="news-button" @click="addBaner">
        <span class="news-button-text">Добавить</span>
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
    <div class="news-wrapper">
      <div class="news-single">
        <div class="news-image">
          <img
            class="news-image-inner"
            src="@/assets/images/halyk-news-1.svg"
            alt=""
          />
        </div>
        <div class="news-text">
          <div class="news-heading">Lorem ipsum dolor sit.</div>
          <div class="news-content">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero,
            quis laborum iste fugiat corporis sequi illum quam magnam non magni,
            nesciunt facere, quo culpa consectetur cumque exercitationem atque
            voluptatem! Sit, quisquam libero nisi repellat temporibus facere
            doloremque a? Expedita dolorem minus nobis accusantium illo
            inventore pariatur harum quam tempore aperiam?
          </div>
        </div>
        <div class="news-button-delete" @click="deleteClicked">
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
      <div class="news-single">
        <div class="news-image">
          <img
            class="news-image-inner"
            src="@/assets/images/halyk-news-2.svg"
            alt=""
          />
        </div>
        <div class="news-text">
          <div class="news-heading">Lorem ipsum dolor sit.</div>
          <div class="news-content">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero,
            quis laborum iste fugiat corporis sequi illum quam magnam non magni,
            nesciunt facere, quo culpa consectetur cumque exercitationem atque
            voluptatem! Sit, quisquam libero nisi repellat temporibus facere
            doloremque a? Expedita dolorem minus nobis accusantium illo
            inventore pariatur harum quam tempore aperiam?
          </div>
        </div>
        <div class="news-button-delete" @click="deleteClicked">
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
      <div class="news-single">
        <div class="news-image">
          <img
            class="news-image-inner"
            src="@/assets/images/halyk-news-3.svg"
            alt=""
          />
        </div>
        <div class="news-text">
          <div class="news-heading">Lorem ipsum dolor sit.</div>
          <div class="news-content">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero,
            quis laborum iste fugiat corporis sequi illum quam magnam non magni,
            nesciunt facere, quo culpa consectetur cumque exercitationem atque
            voluptatem! Sit, quisquam libero nisi repellat temporibus facere
            doloremque a? Expedita dolorem minus nobis accusantium illo
            inventore pariatur harum quam tempore aperiam?
          </div>
        </div>
        <div class="news-button-delete" @click="deleteClicked">
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
    <modal :isModalOpen="isModalOpen" @modal-closed="isModalOpen = false">
      <div class="news-title news-title-dark">Добавление новости</div>
      <a-upload-dragger
        name="file"
        :multiple="true"
        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
        @change="handleChange"
        class="news-input-upload"
      >
        <p class="ant-upload-drag-icon">
          <a-icon type="inbox" />
        </p>
        <p class="ant-upload-text">Click or drag file to this area to upload</p>
        <p class="ant-upload-hint">
          Support for a single or bulk upload. Strictly prohibit from uploading
          company data or other band files
        </p>
      </a-upload-dragger>
      <halykInput
        class="news-input"
        title="Заголовок"
        placeholder="Введите заголовок"
      />
      <div class="input-container">
        <div class="title">Содержание</div>
        <textarea type="text" class="input" placeholder="Введите заголовок" />
      </div>
      <halykButton class="news-button-submit" text="Добавить" />
    </modal>
    <modal
      :isModalOpen="isModalDeleteOpen"
      @modal-closed="isModalDeleteOpen = false"
    >
      <div class="news-title news-title-dark">
        Вы уверены что хотите удалить?
      </div>
      <halykButton class="news-button-delete-submit" text="Да" />
      <halykButton
        class="news-button-delete-submit"
        type="unsolid"
        text="Нет"
      />
    </modal>
  </div>
</template>

<script>
import halykHeader from "@/components/common/halyk-header";
import modal from "@/components/common/halyk-modal";
import halykInput from "@/components/common/halyk-input";
import halykButton from "@/components/common/halyk-button";

export default {
  components: {
    halykHeader,
    modal,
    halykInput,
    halykButton,
  },
  data() {
    return {
      isModalOpen: false,
      isModalDeleteOpen: false,
    };
  },
  methods: {
    onChange(e) {
      console.log(`checked = ${e.target.checked}`);
    },
    addBaner() {
      this.isModalOpen = true;
    },
    handleChange(info) {
      const status = info.file.status;
      if (status !== "uploading") {
        console.log(info.file, info.fileList);
      }
      if (status === "done") {
        this.$message.success(`${info.file.name} file uploaded successfully.`);
      } else if (status === "error") {
        this.$message.error(`${info.file.name} file upload failed.`);
      }
    },
    deleteClicked() {
      this.isModalDeleteOpen = true;
    },
  },
};
</script>

<style scoped lang="scss">
@import "@/assets/styles/variables.scss";

.news {
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

  &-image {
    height: 150px;
    width: 25%;

    &-inner {
      height: 100%;
      border-radius: 7px;
    }
  }

  &-text {
    width: 70%;
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

.input-container {
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 20px;
}

.title {
  margin-bottom: 5px;
  color: #41a8fb;
  font-size: 15px;
  opacity: 0.9;
}

.input {
  padding: 10px 15px;
  height: 150px;
  width: 100%;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  color: $dark;
  font-size: 15px;
  border: 1px solid #41a8fb;
  border-radius: 10px;
  outline: none;
  opacity: 0.7;
  transition: 200ms ease-in-out;

  &:focus {
    padding-left: 18px;
    opacity: 0.9;
  }
}
</style>

<style lang="scss">
.ant-checkbox-wrapper {
  display: flex !important;
  align-items: center !important;
  justify-content: space-between !important;
  flex-direction: row-reverse;
}
</style>
