<template>
  <div class="header">
    <div class="header-text">Административная панель</div>
    <div class="header-icon">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="40"
        height="40"
        viewBox="0 0 24 24"
        style="fill: #3a7a58; transform: ; -ms-filter: "
      >
        <path
          d="M12,2C6.579,2,2,6.579,2,12s4.579,10,10,10s10-4.579,10-10S17.421,2,12,2z M12,7c1.727,0,3,1.272,3,3s-1.273,3-3,3 c-1.726,0-3-1.272-3-3S10.274,7,12,7z M6.894,16.772c0.897-1.32,2.393-2.2,4.106-2.2h2c1.714,0,3.209,0.88,4.106,2.2 C15.828,18.14,14.015,19,12,19S8.172,18.14,6.894,16.772z"
        ></path>
      </svg>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
@import "@/assets/styles/variables.scss";

.header {
  padding-top: 20px;
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;

  &-text {
    color: #ffffff;
    user-select: none;
    padding: 8px 20px;
    background-color: $yellow;
    border-radius: 10px;
    box-shadow: 0 0 10px 10px rgba(109, 109, 109, 0.05);
  }

  &-icon {
    cursor: pointer;
    transition: 200ms ease-in-out;
  }

  &-icon:hover {
    opacity: 0.8;
  }
}
</style>
