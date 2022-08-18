<template>
  <div class="home">
    <DashBoardNav />
    <Layout />
  </div>
</template>

<script>
import DashBoardNav from "../components/DashboardNav.vue";
import Layout from "../components/HistoryLayout.vue";
export default {
  name: "AssessmentHistory View",
  components: { DashBoardNav, Layout },
};
</script>

<style scoped>
.home {
  display: flex;
}
</style>
