<template>
  <div class="main">
    <div class="home">
      <DashBoardNav activeTab="3" />
      <Layout />
    </div>
  </div>
</template>

<script>
import DashBoardNav from "../components/DashboardNav.vue";
import Layout from "../components/EntriesLayout.vue";

export default {
  name: "ApplicationEntries View",
  components: { DashBoardNav, Layout },
  data() {
    return {};
  },
};
</script>

<style scoped>
.home {
  display: flex;
}
</style>
