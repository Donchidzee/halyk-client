<template>
  <div class="page">
    <halyk-header />
    <div class="page__content">
      <halyk-home-navbar />
      <router-view />
    </div>
  </div>
</template>

<script>
import halykHeader from "@/components/common/halykHeader";
import halykHomeNavbar from "@/components/home/halykHomeNavbar/halykHomeNavbar";

export default {
  components: {
    "halyk-header": halykHeader,
    "halyk-home-navbar": halykHomeNavbar,
  },
};
</script>

<style lang="scss" scoped>
.page {
  display: flex;
  flex-direction: column;

  &__content {
    display: flex;
  }
}
</style>
