<template>
  <div class="signin-container">
    <div class="signin-header">
      <figure>
        <router-link :to="{ name: 'home' }"
          ><img src="../../assets/enyataSmallerLogo.svg" alt="Enyata logo"
        /></router-link>
      </figure>
      <h1 class="applicantText">Applicant Log In</h1>
    </div>

    <h4 class="error">{{ error }}</h4>
    <h4 class="success">{{ success }}</h4>

    <form @submit.prevent="loginValidation">
      <div class="form-input">
        <fieldset class="left">
          <label for="Email Address">Email Address</label>
          <input type="email" v-model="email" />
          <label for="Password">Password</label>
          <input :type="inputTypeIcon" class="password" v-model="password" />
          <span
            @click.prevent="toggleInputIcon"
            v-if="inputTypeIcon == 'password'"
            class="material-symbols-outlined"
            >visibility</span
          >
          <span
            v-else
            @click.prevent="toggleInputIcon"
            class="material-symbols-outlined"
            >visibility_off</span
          >
        </fieldset>
      </div>
      <div class="btn-container">
        <app-button class="signin-btn" :text="signInText"></app-button>
        <div class="btn-container-text">
          <span class="signinbtn-text"
            >Don't have an account Yet?
            <router-link :to="{ name: 'signup' }">Sign Up</router-link></span
          >
          <router-link :to="{ name: 'forgot' }" class="signinbtn-text text1"
            >Forgot Password?</router-link
          >
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import buttonComponentVue from '@/components/buttonComponent.vue';
import axios from 'axios';
export default {
  components: {
    'app-button': buttonComponentVue,
  },
  data() {
    return {
      signInText: 'Sign In',
      email: '',
      password: '',
      error: '',
      success: '',
      inputTypeIcon: 'password',
    };
  },
  methods: {
    toggleInputIcon() {
      this.inputTypeIcon =
        this.inputTypeIcon === 'password' ? 'text' : 'password';
    },

    async loginValidation() {
      try {
        // this.email.includes('@') && this.password.length >= 8 && this.password ? this.success = 'Success' : console.log("Success")
        let response = await axios.post(
          'http://localhost:5000/api/v1/auth/login',
          {
            email: this.email.trim(),
            password: this.password,
          }
        );

        localStorage.setItem('token', response.data.data);

        let token = localStorage.getItem('token');
        let applicationResponse = await axios.get(
          'http://localhost:5000/api/v1/auth/user',
          {
            headers: { token: token },
          }
        );

        if (applicationResponse.data.data.user.applied) {
          this.$router.push('/applicantdashboard');
        } else {
          this.$router.push('/applicationform');
        }
      } catch (error) {
        this.error = 'Please enter a correct password and email';
      }
      this.email = '';
      this.password = '';
    },
  },
};
</script>

<style scoped>
.signin-container {
  position: fixed;
  top: 50%;
  left: 50%;
  font-family: 'Lato';
  font-style: normal;
  transform: translate(-50%, -50%);
}

.form-input {
  display: flex;
  justify-content: center;
}

.signin-header {
  text-align: center;
}

.applicantText {
  font-style: italic;
  font-weight: 500;
  font-size: 24px;
  line-height: 29px;
  /* identical to box height */
  color: #2b3c4e;
  margin: 28px 0px 68px 0px;
}

fieldset {
  border: none;
}

label {
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  color: #4f4f4f;
  margin-bottom: 5px;
  display: block;
}

input {
  border: 1.5px solid #bdbdbd;
  border-radius: 4px;
  width: 379px;
  height: 48px;
  margin-bottom: 27px;
}

input:focus {
  outline: none;
}

input[type='password']:focus,
[type='email']:focus,
[type='text']:focus {
  border: 3px solid #7557d3;
}

input[type='text']:focus,
[type='password'],
[type='email'] {
  padding-left: 10px;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  color: #4f4f4f;
}

input[type="text"]{
  padding-left: 10px;
  font-family: 'Lato';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  /* identical to box height */
  color: #4f4f4f;
}

input[type='text'] {
  padding-left: 10px;
}

.btn-container-text {
  display: flex;
}

.signinbtn-text {
  font-style: italic;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  color: #4f4f4f;
  margin-top: 10px;
}

.text1 {
  text-decoration: none;
  margin-left: 80px;
}

.material-symbols-outlined {
  opacity: 0.4;
  width: 15px;
  height: 8.57px;
  position: relative;
  left: -30px;
  top: 5px;
}

.error,
.success {
  text-align: center;
  position: relative;
  top: -30px;
  color: #d90429;
}

/* .success {
  color: #38b000;
  transition: 10s ease;
} */
</style>
