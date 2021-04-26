<template>
  <div
    class="modal"
    :class="{
      'modal-open': isModalOpen,
    }"
  >
    <div class="modal-close" @click="$emit('modal-closed')">
      <img src="@/assets/images/bx-x.svg" alt="" />
    </div>
    <div class="content-full">
      <div class="content"><slot></slot></div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    isModalOpen: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/variables.scss";

.modal {
  position: fixed;
  bottom: -79.5vh;
  left: 0;
  right: 0;
  margin: auto;
  width: 70%;
  height: 79.5vh;
  display: flex;
  justify-content: center;
  border-radius: 10px 10px 0 0;
  background-color: $white;
  z-index: 5;
  transition: transform 400ms ease-in-out;
  will-change: transform;

  &-open {
    -moz-transform: translateY(-79.5vh);
    -ms-transform: translateY(-79.5vh);
    -webkit-transform: translateY(-79.5vh);
    -o-transform: translateY(-79.5vh);
    transform: translateY(-79.5vh);
    box-shadow: 0 0 60px rgba(0, 0, 0, 0.2);
  }

  &-close {
    position: absolute;
    top: 4%;
    right: 3%;
    opacity: 0.6;
    cursor: pointer;
    z-index: 3;

    &:hover {
      opacity: 0.9;
    }
  }
}

.content {
  padding: 40px 0;
  margin: auto;
  width: 750px;
  height: auto;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;

  &-full {
    width: 100%;
    height: 100%;
    box-sizing: border-box;
  }
}
</style>
