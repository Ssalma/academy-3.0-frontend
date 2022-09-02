<template>
  <div class="main">
    <DashBoardNav activeTab="1" />
    <DashBoardLayout />
  </div>
</template>

<script>
import DashBoardNav from "@/components/DashboardNav.vue";
import DashBoardLayout from "@/components/DashBoardLayout.vue";
export default {
  name: "Dashboard",
  components: { DashBoardNav, DashBoardLayout },
};
</script>

<style scoped>
.main {
  display: flex;
}
</style>
