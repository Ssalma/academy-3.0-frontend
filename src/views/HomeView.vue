<template>
  <div class="background">
    <div class="formWrap">
      <div>
        <img src="../assets/enyataIcon.svg" alt="" class="icon" />
        <p class="admin">Admin Log In</p>
      </div>

      <form action="" @submit.prevent="login()">
        <label for="Email Address">Email Address</label>
        <input type="email" class="inputEmail" v-model="email" />
        <p class="error">{{ error }}</p>

        <label for="Password">Password</label>
        <div class="input">
          <input type="password" v-model="password" /><img
            src="../assets/Vector.svg"
            alt=""
            class="eyeIcon"
          />
        </div>
        <p class="error">{{ errorP }}</p>

        <button class="submitBtn">Sign In</button>
      </form>
    </div>

    <div>
      <img src="../assets/Group.svg" alt="" class="bigImage" />
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "HomeView",
  components: {},
  data() {
    return {
      email: "",
      password: "",
      error: "",
      errorP: "",
    };
  },
  methods: {
    async login() {
      if (this.email.trim() === "" || this.email.length < 5) {
        this.error = "Please insert a valid email";
      }
      if (this.password.trim().includes("@") === "" || this.password.length < 5) {
        this.errorP = "Please insert a valid password";
      } else {
        this.error = "";
        this.errorP = "";
        let response = await axios.post("http://localhost:5000/api/v1/auth/admin/login", {
          email: this.email,
          password: this.password,
        });
        console.log(response);
        let token = response.data.data;
        localStorage.setItem("token", token);
        if (token) {
          this.$router.push({ name: "DashBoard" });
        }
      }
    },
  },
};
</script>

<style scoped>
.background {
  background: #7557d3;
  width: 100%;
  display: flex;
  align-items: center;
  padding: 240px 0 304px 0;
}
label {
  font-family: "Lato";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  color: #ffffff;
  text-align: left;
  margin-bottom: 5px;
}
input {
  outline: none;
  background-color: #7557d3;
  border: 1.5px solid #ffffff;
  border-radius: 4px;
  height: 48px;
  margin-bottom: 22px;
  width: 379px;
  color:#ffffff
}
.input {
  position: relative;
}
.eyeIcon {
  position: absolute;
  right: 22px;
  top: 18px;
}
.submitBtn {
  background: #ffffff;
  border-radius: 4px;
  width: 379px;
  height: 50px;
  border: none;
  font-family: "Lato";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  color: #7557d3;
  margin-top: 18px;
}
.admin {
  font-family: "Lato";
  font-style: italic;
  font-weight: 500;
  font-size: 24px;
  line-height: 29px;
  color: #ffffff;
  text-align: center;
  margin: 28px 0 58px 0;
}
form {
  display: grid;
  z-index: 4;
}
.formWrap {
  margin: 0 auto;
  text-align: center;
}
.bigImage {
  position: absolute;
  right: 0;
  top: 106px;
  z-index: 0;
}
.error {
  color: red;
  font-family: "Lato";
  font-style: italic;
  font-weight: 500;
  font-size: 12px;
  line-height: 29px;
}
</style>
