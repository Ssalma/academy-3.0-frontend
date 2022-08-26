<template>
  <div class="home">
    <div class="alertBox">
      <p>{{ `Are you sure you want to ${action} this application?` }}</p>

      <div class="btns">
        <button class="btn1" @click="yesButton()">Yes</button>
        <button class="btn2" @click="">NO</button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "alert",
  components: {},
  props: { action: { type: String }, applicant: { type: Object } },
  methods: {
    async yesButton() {
      var token = localStorage.getItem("token");
      if (this.action === "approve") {
        let response = await axios.put(
          `http://localhost:5000/api/v1/auth/user/${this.applicant}/approve`,
          {
            headers: { token: token },
          }
        );
        console.log(response);
      } else {
        let response = await axios.put(
          `http://localhost:5000/api/v1/auth/user/${this.applicant}/decline`,
          {
            headers: { token: token },
          }
        );
        console.log(response);
      }
    },
  },
};
</script>

<style scoped>
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
p {
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
