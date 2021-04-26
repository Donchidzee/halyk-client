<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
@import "@/assets/styles/global.scss";
@font-face {
  font-family: "San-Francisco";
  src: local("Geometria Thin"), local("Geometria-Thin"),
    url("~@/assets/fonts/san-francisco/sf_ui_display_regular.woff")
      format("woff"),
    url("~@/assets/fonts/san-francisco/sf_ui_display_regular.woff2")
      format("woff2");
  font-weight: normal;
  font-style: normal;
}

#app {
  font-family: San-Francisco;
  box-sizing: border-box;
}
</style>
