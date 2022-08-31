<template>
  <!-- mainpage layout -->
  <div class="main">
    <div class="header">
      <span class="headerText">
        Entries - Batch 1<span class="material-symbols-outlined"> arrow_drop_down </span>
      </span>
      <br />

      <span class="subText">Comprises of all that applied for batch 1</span>
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
          v-for="(applicant, index) in pendingApplicants"
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

    <!--  profile -->

    <div class="profileContainer" :class="[isVisibility ? 'profileReview' : 'none']">
      <div class="container">
        <div class="coloredBackground" @click="closeProfile()"></div>

        <div class="form">
          <div><img :src="reviewApplicant.img" alt="" class="formImg" /></div>
          <p class="title">Personal Details</p>
          <hr />
          <div class="formWrap">
            <div class="formLeft">
              <p>Name</p>
              <div class="formContainer">
                {{ reviewApplicant.firstName + " " + reviewApplicant.lastName }}
              </div>

              <p>Address</p>
              <div class="formContainer">{{ reviewApplicant.address }}</div>

              <p for="">Course of study</p>
              <div class="formContainer">{{ reviewApplicant.course }}</div>

              <p for="">CGPA</p>
              <div class="formContainer">{{ reviewApplicant.cgpa }}</div>

              <button @click="approveBtn()">Approve</button>
            </div>

            <div class="formRight">
              <p for="">Email</p>
              <div class="formContainer">{{ reviewApplicant.email }}</div>

              <p for="">University</p>
              <div class="formContainer">{{ reviewApplicant.university }}</div>

              <p for="">Date of birth</p>
              <div class="formContainer">
                {{ reviewApplicant.date }}
              </div>

              <p for="">CV</p>
              <div class="formContainer" id="cv"></div>

              <button @click="declineBtn()">Decline</button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- alertBtn -->
    <div class="alert" :class="[alertdisplay ? 'alertDisplay' : 'none']">
      <div class="home">
        <div class="alertBox">
          <p class="message">
            {{ `Are you sure you want to ${action} this application?` }}
          </p>

          <div class="btns">
            <button class="btn1" @click="yesButton()">Yes</button>
            <button class="btn2" @click="noBtn()">NO</button>
          </div>
        </div>
      </div>
    </div>
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
      applicants: [],
      dateOfBirth: null,
      reviewApplicant: {},
      action: "",
      alertdisplay: false,
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
      this.reviewApplicant["date"] = `${this.reviewApplicant.dateOfBirth.substr(
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

    approveBtn() {
      this.isVisibility = false;
      this.action = "approve";
      this.alertdisplay = true;
    },

    declineBtn() {
      this.isVisibility = false;
      this.action = "decline";
      this.alertdisplay = true;
    },

    async yesButton() {
      if (this.action === "approve") {
        let token = localStorage.getItem("token");
        console.log(token);
        let response = await axios.put(
          `http://localhost:5000/api/v1/auth/user/${this.reviewApplicant._id}/approve`,
          {},
          {
            headers: { token: token },
          }
        );
        console.log(response);
        this.alertdisplay = false;
        this.reviewApplicant.status = "Approved";
      } else if (this.action === "decline") {
        let token = localStorage.getItem("token");
        console.log(token);
        let response = await axios.put(
          `http://localhost:5000/api/v1/auth/user/${this.reviewApplicant._id}/decline`,
          {},
          {
            headers: { token: token },
          }
        );
        console.log(response);
        this.alertdisplay = false;
        this.reviewApplicant.status = "Decline";
      }
    },

    noBtn() {
      this.alertdisplay = false;
    },
  },

  computed: {
    pendingApplicants() {
      let filteredApplicants = this.applicants.filter(
        (applicant) => applicant.status === "Pending"
      );
      return filteredApplicants;
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
  color: #4f4f4f;
}
.active {
  background: #ffffff;
  box-shadow: 0px 5px 15px rgba(33, 31, 38, 0.05);
  border-left-color: #7557d3;
  border-left-style: solid;
  border-left-width: 7px;
}

/* profile */

.profileContainer {
  position: absolute;
  display: none;
  width: 100%;
  height: 100%;
}
.profileReview {
  display: flex;
  position: absolute;
  top: 0;
  left: 0;
}
.container {
  display: flex;
  width: 100%;
  height: 100%;
}

.notVisible {
  display: none;
}
.coloredBackground {
  width: 80%;
  height: 1050px;
  background: rgba(3, 17, 49, 0.2);
  backdrop-filter: blur(8px);
}
.form {
  width: 600px;
  background: #ffffff;
  padding: 95px 58px 145px 48px;
}
.formImg {
  width: 179px;
  height: 179px;
  margin-bottom: 42px;
  background-color: #7557d3;
}
.title {
  font-family: "Lato";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  color: #7d7d7d;
  margin-bottom: 14px;
}
hr {
  width: 498px;
  height: 1px;
  background: #f2f2f2;
  margin-bottom: 32px;
  border: none;
}
.formWrap {
  display: flex;
  gap: 0 32px;
}
.formWrap p {
  font-family: "Lato";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  color: #b1b1b1;
}
.formContainer {
  width: 231px;
  border-radius: 4px;
  margin-bottom: 36px;
  height: 48px;
  border: 1px solid #cdcfd6;
  border-radius: 4px;
  font-family: "Lato";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: #4f4f4f;
  display: flex;
  align-items: center;
  padding-left: 18px;
}
.formWrap button {
  width: 125px;
  height: 48px;
  font-family: "Lato";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  border-radius: 4px;
}
.formRight button {
  color: #4f4f4f;
  border: 1px solid #cecece;
  background: #ffffff;
}
.formLeft button {
  background: #7557d3;
  color: #ffffff;
  border: 1px solid #cdcfd6;
  margin-left: 115px;
}
#cv {
  border: none;
}

/* alertBtn */
.alert {
  position: absolute;
  display: none;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.alertDisplay {
  display: flex;
}
.home {
  width: 100%;
  height: 1050px;
  background: rgba(3, 17, 49, 0.2);
  backdrop-filter: blur(8px);
  opacity: 0.9.1;
}
.alertBox {
  width: 458px;
  height: 300px;
  background: #ffffff;
  border-radius: 4px;
  margin: 362px auto;
  z-index: 2;
}
.message {
  width: 267px;
  height: 54px;
  font-family: "Lato";
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 150%;
  text-align: center;
  margin: 0 auto;
  padding-top: 75px;
}
.alertBox button {
  width: 125px;
  height: 48px;
  border-radius: 4px;
  font-family: "Lato";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  border: none;
  margin-top: 48px;
}
.btns {
  display: flex;
  justify-content: center;
}
.btn1 {
  background: #7557d3;
  color: #ffffff;
}
.btn2 {
  color: #4f4f4f;
  background: #ffffff;
}
</style>
