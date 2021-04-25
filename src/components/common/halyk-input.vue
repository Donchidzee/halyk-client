<template>
  <div class="input-container">
    <div class="title">{{ title }}</div>
    <input
      :type="type"
      class="input"
      :placeholder="placeholder"
      :value="value"
      :maxlength="maxlength"
      :name="name"
      :autocomplete="autocomplete"
      @input="updateValue($event.target.value)"
    />
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
    },
    type: {
      type: String,
      default: "text",
    },
    placeholder: {
      type: String,
    },
    value: {
      type: String,
    },
    maxlength: {
      type: Number,
    },
    name: {
      type: String,
    },
    autocomplete: {
      type: String,
    },
  },

  data() {
    return {
      inputData: null,
    };
  },

  methods: {
    updateValue(value) {
      this.$emit("input", value);
    },
  },
};
</script>

<style scoped lang="scss">
@import "@/assets/styles/variables.scss";

.input-container {
  width: auto;
  width: 100%;
  display: flex;
  flex-direction: column;
}

.title {
  margin-bottom: 5px;
  color: #ffffff;
  font-size: 15px;
  opacity: 0.9;
}

.input {
  padding: 0 15px;
  width: 100%;
  height: 40px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  color: $dark;
  font-size: 15px;
  border: 1px solid #ffffff;
  border-radius: 10px;
  outline: none;
  opacity: 0.7;
  transition: 200ms ease-in-out;

  &:focus {
    padding-left: 18px;
    opacity: 0.9;
  }
}

@media (max-width: 560px) {
  .input {
    height: 35px;
    font-size: 12px;
  }

  .title {
    font-size: 12px;
  }
}
</style>
