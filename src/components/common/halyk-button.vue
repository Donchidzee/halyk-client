<template>
  <button
    class="button"
    :disabled="isDisabled"
    :class="{
      unsolid: type == 'unsolid',
      small: size == 'small',
      big: size == 'big',
      bold: isBold,
      disabled: isDisabled,
      'loading-button': isLoading,
    }"
    @click="$emit('click')"
  >
    <transition name="fade" mode="out-in">
      <div class="loader loader-arc" v-if="isLoading"></div>
      <span class="button-text" v-else>{{ text }}</span>
    </transition>
  </button>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
    },
    type: {
      type: String,
      default: "solid",
    },
    size: {
      type: String,
    },
    isBold: {
      type: Boolean,
      default: false,
    },
    isDisabled: {
      type: Boolean,
      default: false,
    },
    isLoading: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/variables.scss";

.button {
  padding: 10px 25px;
  box-sizing: border-box;
  color: $white;
  font-size: 15px;
  font-weight: 500;
  border: 1px solid $primary;
  border-radius: 10px;
  outline: none;
  background-color: $primary;
  cursor: pointer;
  transition: 200ms ease-in-out;

  &:hover {
    opacity: 0.7;
  }
}

.unsolid {
  background-color: transparent;
  color: $primary;
}

.small {
  padding: 6px 17px;
  font-size: 13px;
}

.big {
  font-size: 17px;
}

.bold {
  font-weight: 500;
}

.disabled {
  opacity: 0.6;
  cursor: default;

  &:hover {
    opacity: 0.6;
  }
}

.loading-button {
  position: relative;
  height: 39px;
  cursor: default;

  &:hover {
    opacity: 1;
  }
}

@media (max-width: 375px) {
  .button {
    padding: 8px 20px;
  }
}

.loader {
  position: relative;
  width: 18px;
  height: 18px;
  display: inline-block;
  border-radius: 50%;
}

.loader:after {
  content: "";
  position: absolute;
  left: 3px;
  top: 3px;
  height: 12px;
  width: 12px;
  display: block;
  border-radius: 50%;
  background: $primary;
}

.loader-arc {
  animation-name: spin;
  animation-duration: 1.5s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
  background-image: linear-gradient(270deg, $white 20%, transparent 50%),
    linear-gradient(180deg, $primary 50%, $white 50%);
}

@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s;
}

.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
