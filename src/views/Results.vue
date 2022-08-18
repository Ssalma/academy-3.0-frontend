<template>
  <div class="home">
    <DashBoardNav />
    <Layout />
  </div>
</template>

<script>
import DashBoardNav from "../components/DashboardNav.vue";
import Layout from "../components/ResultsLayout.vue";
export default {
  name: "HomeView",
  components: { DashBoardNav, Layout },
};
</script>

<style scoped>
.home {
  display: flex;
}
</style>
