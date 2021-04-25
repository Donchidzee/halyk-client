<template>
  <div class="baners">
    <halykHeader />
    <div class="baners-container">
      <div class="baners-title">
        Банеры
        <span class="baners-title-span">4</span>
      </div>
      <button class="baners-button" @click="addBaner">
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
    <div class="baners-wrapper">
      <div class="baners-baner">
        <a-checkbox @change="onChange">
          <div class="baners-baner-inner">
            <img
              class="baners-baner-image"
              src="@/assets/images/halyk-baner-1.svg"
              alt=""
            />
          </div>
        </a-checkbox>
        <div class="baners-button-delete">
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
      <div class="baners-baner">
        <a-checkbox @change="onChange">
          <div class="baners-baner-inner">
            <img
              class="baners-baner-image"
              src="@/assets/images/halyk-baner-2.svg"
              alt=""
            />
          </div>
        </a-checkbox>
        <div class="baners-button-delete">
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
      <div class="baners-baner">
        <a-checkbox @change="onChange">
          <div class="baners-baner-inner">
            <img
              class="baners-baner-image"
              src="@/assets/images/halyk-baner-3.svg"
              alt=""
            />
          </div>
        </a-checkbox>
        <div class="baners-button-delete">
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
      <div class="baners-baner">
        <a-checkbox @change="onChange">
          <div class="baners-baner-inner">
            <img
              class="baners-baner-image"
              src="@/assets/images/halyk-baner-4.svg"
              alt=""
            />
          </div>
        </a-checkbox>
        <div class="baners-button-delete">
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
      <div class="baners-title baners-title-dark">Добавление банера</div>
      <a-upload-dragger
        name="file"
        :multiple="true"
        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
        @change="handleChange"
        class="baners-input-upload"
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
    </modal>
  </div>
</template>

<script>
import halykHeader from "@/components/common/halyk-header";
import modal from "@/components/common/halyk-modal";

export default {
  components: {
    halykHeader,
    modal,
  },
  data() {
    return {
      isModalOpen: false,
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
  }

  &-button:hover {
    opacity: 0.8;
  }

  &-wrapper {
    margin-top: 30px;
  }

  &-baner {
    margin-bottom: 20px;
    width: 100%;
    display: flex;
    align-items: center;

    &-inner {
      width: 100%;
      border-radius: 10px;
    }

    &-image {
      width: 100%;
      border-radius: 10px;
    }
  }

  &-button {
    &-delete {
      margin-left: 10px;
      cursor: pointer;
    }
  }

  &-input {
    &-upload {
      height: 300px;
    }
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
