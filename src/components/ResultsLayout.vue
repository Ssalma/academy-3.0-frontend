<template>
  <div class="main">
    <div class="header">
      <span class="headerText">
        Results - Batch 2<span class="material-symbols-outlined"> arrow_drop_down </span>
      </span>
      <br />

      <span class="subText">Comprises of all that applied for batch 2</span>
    </div>

    <div class="body">
      <div class="thead">
        <P id="name">Name</P>
        <P id="email">Email</P>
        <div class="text" id="age">
          <P>DOB - Age</P>
          <img src="../assets/arrowUpanddown.svg" />
        </div>
        <P id="address">Address</P>
        <P id="university">University</P>
        <div class="text" id="cgpa">
          <P>CGPA</P>
          <img src="../assets/arrowUpanddown.svg" />
        </div>
        <div class="text">
          <P>Test Scores</P>
          <img src="../assets/arrowUpanddown.svg" alt="" />
        </div>
      </div>

      <div
        class="data"
        :class="{ active: applicant.active === true }"
        @click="toggler(applicant)"
        v-for="applicant in applicants"
        :key="applicant._id"
      >
        <p>{{ applicant.firstName + " " + applicant.lastName }}</p>
        <p id="applicantEmail">{{ applicant.email }}</p>
        <p>
          {{
            `${applicant.dateOfBirth.substr(8, 2)}/${applicant.dateOfBirth.substr(
              5,
              2
            )}/${applicant.dateOfBirth.substr(2, 2)}`
          }}
        </p>
        <p>{{ applicant.address }}</p>
        <p>{{ applicant.university }}</p>
        <p>{{ applicant.cgpa }}</p>
        <p>{{ applicant.score }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Entries View",
  components: {},
  data() {
    return {
      isActive: "false",
      applicants: null,
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
    },
  },
};
</script>

<style scoped>
.main {
  /* background: #e5e5e5; */
  margin: 102px 0 0 42px;
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
  padding: 0 14px 1px 0;
}
.subText {
  font-family: "Lato";
  font-style: italic;
  font-weight: 400;
  font-size: 13px;
  line-height: 16px;
  color: #4f4f4f;
}
.thead {
  width: 1042px;
  height: 46px;
  background: #2b3c4e;
  display: flex;
  align-items: center;
  /* padding: 0 8px 0 42px; */
  margin-bottom: 20px;
  justify-content: space-around;
}
.thead p {
  font-family: "Lato";
  font-size: 14px;
  line-height: 17px;
  color: #ffffff;
  text-align: center;
}
.text {
  display: flex;
  align-items: center;
}
.text img {
  margin-left: 6px;
}
.data {
  display: flex;
  border-radius: 8px;
  width: 1042px;
  height: 66px;
  align-items: center;
  /* padding-left: 20px; */
  gap: 0 30px;
  justify-content: space-around;
}
.active {
  background: #ffffff;
  box-shadow: 0px 5px 15px rgba(33, 31, 38, 0.05);
  border-left-color: #7557d3;
  border-left-style: solid;
  border-left-width: 7px;
}
.data p {
  font-family: "Lato";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: #4f4f4f;
  width: 90%;
}
</style>
