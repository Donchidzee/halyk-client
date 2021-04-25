<template>
  <div class="app-page">
    <sidebar />
    <div class="app-page-content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import sidebar from "@/components/common/halyk-sidebar";
export default {
  components: {
    sidebar,
  },
};
</script>

<style scoped lang="scss">
@import "@/assets/styles/variables.scss";

.app-page {
  background-color: $background;
  height: 100vh;
  width: 100%;

  &-content {
    margin-left: 300px;
    width: calc(100% - 300px);
  }
}
</style>
