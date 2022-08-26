<template>
  <ProfileView
    class="profile"
    :applicant="reviewApplicant"
    :class="[isVisibility ? 'profileReview' : 'none']"
    @click="closeProfile()"
  />
  <AlertBox class="alert" />
  <div class="main">
    <div class="header">
      <span class="headerText">
        Entries - Batch 2<span class="material-symbols-outlined"> arrow_drop_down </span>
      </span>
      <br />

      <span class="subText">Comprises of all that applied for batch 2</span>
    </div>

    <table class="tWrap">
      <thead class="head">
        <th>Name</th>
        <th>Email</th>
        <th>
          DOB - Age
          <img src="../assets/arrowUpanddown.svg" alt="" class="arrow" />
        </th>
        <th>Address</th>
        <th>University</th>
        <th>CGPA<img src="../assets/arrowUpanddown.svg" class="arrow" /></th>
      </thead>

      <tbody class="body">
        <tr
          class="data"
          :class="{ active: applicant.active === true }"
          @click="toggler(applicant)"
          v-for="(applicant, index) in applicants"
          :key="index"
        >
          <td>{{ applicant.firstName + " " + applicant.lastName }}</td>
          <td>{{ applicant.email }}</td>
          <td>
            {{
              `${applicant.dateOfBirth.substr(8, 2)}/${applicant.dateOfBirth.substr(
                5,
                2
              )}/${applicant.dateOfBirth.substr(2, 2)}`
            }}
          </td>
          <td>{{ applicant.address }}</td>
          <td>{{ applicant.university }}</td>
          <td>{{ applicant.cgpa }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from "axios";
import ProfileView from "../components/ProfileView.vue";
import AlertBox from "../components/alertBtn.vue";

export default {
  name: "Entries View",
  components: { ProfileView, AlertBox },
  data() {
    return {
      isActive: "false",
      isVisibility: false,
      applicants: null,
      dateOfBirth: null,
      reviewApplicant: {},
    };
  },
  async created() {
    await this.getAllApplicants();
  },
  methods: {
    async getAllApplicants() {
      let token = localStorage.getItem("token");
      try {
        let res = await axios.get("http://localhost:5000/api/v1/auth/applicants", {
          headers: { token: token },
        });
        this.applicants = res.data.data;
        console.log(res.data.data);
      } catch (e) {
        console.log(e);
      }
    },

    toggler(applicant) {
      applicant["active"] = !applicant["active"];
      this.reviewApplicant = applicant;
      this.isVisibility = true;
      this.reviewApplicant.dateOfBirth = `${this.reviewApplicant.dateOfBirth.substr(
        8,
        2
      )}/${this.reviewApplicant.dateOfBirth.substr(
        5,
        2
      )}/${this.reviewApplicant.dateOfBirth.substr(2, 2)}`;
    },

    closeProfile() {
      this.isVisibility = false;
    },
  },
};
</script>

<style scoped>
.main {
  /* background: #e5e5e5; */
  margin: 102px 0 0 42px;
}

.profile {
  position: absolute;
  display: none;
}
.profileReview {
  display: flex;
}

.alert {
  position: absolute;
  display: none;
}

.header {
  padding-bottom: 38px;
}
.headerText {
  font-family: "Lato";
  font-style: normal;
  font-weight: 300;
  font-size: 44px;
  line-height: 52px;
  letter-spacing: -0.02em;
  color: #2b3c4e;
  padding: 0 16px 1px 0;
}
.subText {
  font-family: "Lato";
  font-style: italic;
  font-weight: 400;
  font-size: 13px;
  line-height: 16px;
  color: #4f4f4f;
}
.tWrap {
  width: 100%;
}
.head {
  width: 1042px;
  height: 46px;
  background: #2b3c4e;
  /* padding: 0 42px; */
  margin-bottom: 20px;
  font-family: "Lato";
  font-size: 14px;
  line-height: 17px;
  text-align: left;
  color: #ffffff;
  align-items: center;
  display: flex;
  justify-content: space-around;
}

.arrow {
  margin-left: 2px;
}
.data {
  width: 1042px;
  height: 66px;
  border-radius: 8px;
  align-items: center;
  display: flex;
  justify-content: space-around;
  font-family: "Lato";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  text-align: left;
  color: #4f4f4f;
}
.active {
  background: #ffffff;
  box-shadow: 0px 5px 15px rgba(33, 31, 38, 0.05);
  border-left-color: #7557d3;
  border-left-style: solid;
  border-left-width: 7px;
}
</style>
