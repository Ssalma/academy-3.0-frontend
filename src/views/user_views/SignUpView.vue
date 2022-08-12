<template>
  <div class="main">
    <div class="container">
      <div class="logo-image">
        <img src="@/assets/enyata-logo.svg" alt="" srcset="" />
      </div>
      <div class="signup-text">
        <h1>Applicant Sign Up</h1>
      </div>
      <div class="mainform">
        <form>
          <div class="inputs-wrapper">
            <div>
              <label>First Name</label>
              <input />
            </div>
            <div>
              <label>Last Name</label>
              <input />
            </div>

            <div>
              <label>Email Address</label>
              <input />
            </div>
            <div>
              <label>Phone Number</label>
              <input />
            </div>
            <div class="password-wrap">
              <label>Password</label>
              <input :type="inputTypeIcon" placeholder="" />
              <div class="icon" @click.prevent="toggleInputIcon">
                <span v-if="inputTypeIcon == 'password'"
                  ><div class="eye-logo2">
                    <img
                      src="@/assets/password-eye-logo.svg"
                      alt=""
                      srcset=""
                    />
                  </div>
                </span>
                <span v-else
                  ><div class="eye-logo2">
                    <img
                      src="@/assets/password-eye-logo.svg"
                      alt=""
                      srcset=""
                    /></div
                ></span>
              </div>
            </div>

            <div class="password-wrap1">
              <label>Confirm Password</label>
              <input :type="inputTypeIcon" placeholder="" />
              <div class="icon" @click.prevent="toggleInputIcon">
                <span v-if="inputTypeIcon == 'password'"
                  ><div class="eye-logo1">
                    <img
                      src="@/assets/password-eye-logo.svg"
                      alt=""
                      srcset=""
                    />
                  </div>
                </span>
                <span v-else
                  ><div class="eye-logo1">
                    <img
                      src="@/assets/password-eye-logo.svg"
                      alt=""
                      srcset=""
                    /></div
                ></span>
              </div>
            </div>
          </div>
          <button>Sign Up</button>
        </form>

        <h2>
          Already have an account?<router-link to="/login"
            ><span>Sign In</span></router-link
          >
        </h2>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "SignUpView",
  components: {},
  data() {
    return {
      inputType: "password",
      inputTypeIcon: "password",
    };
  },
  methods: {
    toggleInputIcon() {
      this.inputTypeIcon =
        this.inputTypeIcon === "password" ? "text" : "password";
    },
  },
};
</script>
<style scoped>
img {
  margin-top: 100px;
  margin-bottom: 26px;
}
button {
  bottom: 0%;
  height: 50px;
  width: 520px;
  border: none;
  border-radius: 4px;
  margin-top: 40px;
  background: #7557d3;

  border-radius: 4px;
  color: #ffffff;
  text-align: center;
}
h1 {
  font-family: "Lato";
  font-style: italic;
  font-weight: 500;
  font-size: 24px;
  line-height: 29px;
  margin-bottom: 70px;
  text-align: center;
  color: #2b3c4e;
}
/* .img {
  text-align: center;
} */
.logo-image {
  text-align: center;
}
input {
  width: 379px;
  height: 48px;
  left: 767px;
  top: 394px;
  margin-top: 3px;
  border: 1.5px solid #bdbdbd;
  border-radius: 4px;
  padding-left: 10px;
}
label {
  font-family: "Lato";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  /* identical to box height */
  margin-top: 20px;
  color: #4f4f4f;
}
.main {
  /* margin: 220px 310px 276px 276px; */
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.mainform {
  gap: 62px;
  justify-content: center;
}

.eye-logo1 {
  position: absolute;
  bottom: -14px;
  right: 14px;
  cursor: pointer;
}
.password-wrap1 {
  position: relative;
}

.password-wrap {
  position: relative;
}
.eye-logo2 {
  top: -40px;
  left: 350px;
  position: absolute;
  cursor: pointer;
}

label {
  display: block;
  text-align: start;
}
h2 {
  font-family: "Lato";
  font-style: italic;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  color: #4f4f4f;
  margin-top: 12px;
  text-align: center;
}
form {
  text-align: center;
}
.inputs-wrapper {
  display: grid;
  grid-template-columns: max-content max-content;
  gap: 22px 62px;
  justify-content: center;
}
</style>
