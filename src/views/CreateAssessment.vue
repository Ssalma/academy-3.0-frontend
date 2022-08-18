<template>
  <div class="home">
    <DashboardNav />
    <FormLayOut />
  </div>
</template>

<script>
import DashboardNav from "@/components/DashboardNav.vue";
import FormLayOut from "../components/CreateForm.vue";
export default {
  name: "CreateAssessment",
  components: {
    DashboardNav,
    FormLayOut,
  },
};
</script>

<style scoped>
.home {
  display: flex;
}
</style>
