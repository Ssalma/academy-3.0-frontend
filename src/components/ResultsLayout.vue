<template>
  <div class="main">
    <div class="header">
      <span class="headerText">
        Results - Batch 1<span class="material-symbols-outlined"> arrow_drop_down </span>
      </span>
      <br />

      <span class="subText">Comprises of all that applied for batch 1</span>
    </div>

    <table>
      <thead>
        <th width="10%" id="headName">Name</th>
        <th width="5%">Email</th>
        <th>
          DOB - Age
          <img src="../assets/arrowUpanddown.svg" />
        </th>
        <th>Address</th>
        <th>University</th>
        <th width="10%">
          CGPA
          <img src="../assets/arrowUpanddown.svg" />
        </th>
        <th width="15%">Test Scores <img src="../assets/arrowUpanddown.svg" alt="" /></th>
      </thead>

      <tbody>
        <tr
          class="data"
          :class="{ active: applicant.active === true }"
          @click="toggler(applicant)"
          v-for="applicant in applicants"
          :key="applicant._id"
        >
          <td width="20%" id="name">
            {{ applicant.firstName + " " + applicant.lastName }}
          </td>
          <td width="20%">{{ applicant.email }}</td>
          <td width="10%">
            {{
              `${applicant.dateOfBirth.substr(8, 2)}/${applicant.dateOfBirth.substr(
                5,
                2
              )}/${applicant.dateOfBirth.substr(2, 2)}`
            }}
          </td>
          <td width="15%">{{ applicant.address }}</td>
          <td width="15%">{{ applicant.university }}</td>
          <td>{{ applicant.cgpa }}</td>
          <td>{{ applicant.score }}</td>
        </tr>
      </tbody>
    </table>
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
table {
  width: 1042px;
  border-collapse: collapse;
}
thead {
  width: 100%;
  height: 46px;
  background: #2b3c4e;
  font-family: "Lato";
  font-size: 14px;
  line-height: 17px;
  color: #ffffff;
  margin-bottom: 20px;
  text-align: center;
}

#name {
  padding-left: 20px;
}

tr {
  width: 100%;
  height: 66px;
  font-family: "Lato";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: #4f4f4f;
  border-radius: 8px;
  margin-left: 20px;
  /* text-align: center; */
  text-align: center;
}
td {
  border-radius: 8px;
}
.active {
  background: #ffffff;
  box-shadow: 0px 5px 15px rgba(33, 31, 38, 0.05);
  border-left-color: #7557d3;
  border-left-style: solid;
  border-left-width: 7px;
}
</style>
