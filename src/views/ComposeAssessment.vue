<template>
  <div class="home">
    <DashBoardNav activeTab="4" />
    <Layout />
  </div>
</template>

<script>
import DashBoardNav from "../components/DashboardNav.vue";
import Layout from "../components/ComposeAssessmentLayout.vue";
export default {
  name: "Compose Assessment View",
  components: { DashBoardNav, Layout },
};
</script>

<style scoped>
.home {
  display: flex;
}
</style>
