<template>
  <div class="select" @focusout="handleFocusOut" tabindex="0">
    <div class="select-title">{{ title }}</div>
    <div class="select-inner" @click="handleSelectClick">
      {{ optionValue }}
      <div class="select-down-arrow">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="22"
          height="22"
          viewBox="0 0 24 24"
          style="fill: rgba(0, 0, 0, 1); transform: ; -ms-filter: "
        >
          <path
            d="M16.939 7.939L12 12.879 7.061 7.939 4.939 10.061 12 17.121 19.061 10.061z"
          ></path>
        </svg>
      </div>
    </div>
    <div class="select-options" v-if="isOptionsOpen">
      <div
        class="select-option"
        v-for="(option, index) in options"
        :key="index"
        @click="handleOptionClick(option)"
      >
        {{ option }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    options: {
      type: Array,
    },
    title: {
      type: String,
    },
  },
  data() {
    return {
      isOptionsOpen: false,
      optionValue: "",
    };
  },
  methods: {
    handleSelectClick() {
      if (this.isOptionsOpen) {
        this.isOptionsOpen = false;
      } else {
        this.isOptionsOpen = true;
      }
    },
    handleOptionClick(option) {
      this.optionValue = option;
      this.isOptionsOpen = false;
      this.$emit("option-changed", option);
    },
    handleFocusOut() {
      this.isOptionsOpen = false;
    },
  },
  mounted() {
    this.optionValue = this.options[0];
  },
};
</script>

<style scoped lang="scss">
@import "@/assets/styles/variables.scss";

.select {
  width: 150px;
  height: 40px;
  border-radius: 10px;
  padding: 0 5px;
  box-sizing: border-box;
  outline: none;
  position: relative;

  &-title {
    position: absolute;
    top: -20px;
    left: 0;
    opacity: 0.6;
  }

  &-inner {
    position: absolute;
    left: 0;
    width: 100%;
    height: 100%;
    border: 1px solid $yellow;
    border-radius: 10px;
    background-color: #fdfdfe;
    display: flex;
    align-items: center;
    padding-left: 10px;
    box-sizing: border-box;
    z-index: 2;
    cursor: pointer;
    user-select: none;
    color: $primary;
  }

  &-down-arrow {
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translate(0, -50%);
    opacity: 0.6;
    font-size: 13px;
    z-index: 2;
  }

  &-options {
    position: absolute;
    width: 100%;
    top: 30px;
    left: 0;
    border-top: 0;
    box-sizing: border-box;
    padding-top: 10px;
    border-radius: 0 0 10px 10px;
    background-color: #ffffff;
    z-index: 1;
    opacity: 1;
    box-shadow: 0 10px 10px rgba(0, 0, 0, 0.15);
  }

  &-option {
    width: 100%;
    height: 40px;
    display: flex;
    align-items: center;
    padding-left: 10px;
    cursor: pointer;
    color: $primary;
    box-sizing: border-box;
  }

  &-option:last-child {
    border-radius: 0 0 10px 10px;
  }

  &-option:hover {
    background-color: #f1f0f3;
  }
}
</style>
