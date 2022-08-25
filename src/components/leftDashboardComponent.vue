<template>
  <div class="applicant-dashboard" v-cloak>
    <div class="bguser-image">
      <figure class="user-info">
        <img :src="imgURL" alt="Image of the user" />
        <figcaption class="user-name">{{ fullName }}</figcaption>
        <figcaption class="user-email">{{ email }}</figcaption>
      </figure>
    </div>

    <div class="dashboard-links">
      <div>
        <router-link :to="{ name: 'applicantdashboard' }" class="dashboard-text"
          ><span
            ><img
              class="dashboard-image"
              src="../assets/timer.svg"
              alt="timer image"
          /></span>
          Dashboard</router-link
        >
      </div>
      <div>
        <router-link
          :to="{ name: 'assessmentdashboard' }"
          class="dashboard-text"
          ><span
            ><img
              class="dashboard-image"
              src="../assets/assessment.svg"
              alt="assessment image"
          /></span>
          Assessment</router-link
        >
      </div>
      <a href="#" class="dashboard-text logout" @click="logout"
        ><span
          ><img
            class="dashboard-image"
            src="../assets/logout.svg"
            alt="logout image"
        /></span>
        Log Out</a
      >
    </div>
  </div>
</template>

<script>
export default {
  props: {
    fullName: {
      type: String,
    },
    email: {
      type: String,
    },
    imgURL: {
      type: String,
    },
  },
  data() {
    return {};
  },

  methods: {
    logout() {
      localStorage.clear();
      this.$router.push('/');
    },
  },
};
</script>

<style scoped>
[v-cloak] {
  display: none;
}

.applicant-dashboard {
  max-width: 292px;
  width: 100%;
}

.bguser-image {
  background: #7557d3;
  height: 255px;
  max-height: 255px;
}

.user-info {
  text-align: center;
  padding: 75px 0px 38px 0px;
}

.user-name {
  font-family: 'Lato';
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  /* identical to box height */
  letter-spacing: -0.02em;
  color: #ffffff;
  margin: 7px 0px 5px 0px;
}

.user-email {
  font-family: 'Lato';
  font-style: italic;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  /* identical to box height */
  letter-spacing: -0.02em;
  color: #ffffff;
}

.dashboard-links {
  display: flex;
  flex-direction: column;
  gap: 28px;
  margin-top: 42px;
}

.dashboard-text {
  font-family: 'Lato';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: #2b3c4e;
}

.dashboard-text:focus {
  border-left: 4px solid #7557d3;
  font-weight: 700;
}

.dashboard-text:active {
  border-left: 4px solid #7557d3;
  font-weight: 700;
}

a {
  text-decoration: none;
}

.dashboard-image {
  margin: 0 16px 0 43px;
}

.logout {
  margin-top: 29px;
}
</style>
