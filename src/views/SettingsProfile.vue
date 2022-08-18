<template>
  <div class="home">
    <DashBoardNav activeTab="7" />
    <Layout />
  </div>
</template>

<script>
import DashBoardNav from "../components/DashboardNav.vue";
import Layout from "../components/ProfilesLayout.vue";
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
