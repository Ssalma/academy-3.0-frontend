<template>
  <div class="signin-container">
    <div class="signin-header">
      <figure>
        <router-link :to="{ name: 'home' }"
          ><img src="../assets/enyataSmallerLogo.svg" alt="Enyata logo"
        /></router-link>
      </figure>
      <h1 class="applicantText">Applicant Log In</h1>
    </div>
    <form @submit.prevent="loginValidation">
      <div class="form-input">
        <fieldset class="left">
          <label for="Email Address">Email Address</label>
          <input type="email" v-model="email" />
          <p>{{ Eerror }}</p>
          <label for="Password">Password</label>
          <input type="password" class="password" v-model="password" />
          <span class="material-symbols-outlined">visibility</span>
          <p>{{ Perror }}</p>
        </fieldset>
      </div>
      <div class="btn-container">
        <app-button class="signin-btn" :text="signInText"></app-button>
        <div class="btn-container-text">
          <p class="signinbtn-text">
            Don't have an account Yet?
            <router-link :to="{ name: 'signup' }">Sign Up</router-link>
          </p>
          <span class="signinbtn-text1">Forgot Password?</span>
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
      Eerror: '',
      password: '',
      Perror: '',
    };
  },
  methods: {
    async loginValidation() {
      if (!this.email.includes('@')) {
        this.Eerror = 'The email should be valid';
      }
      if (this.password.length < 8 && !this.password) {
        this.Perror = 'Password should be more than 8 characters';
      }

      let response = await axios.post(
        'http://localhost:8081/api/v1/auth/login',
        {
          email: this.email.trim(),
          password: this.password,
        }
      );
      localStorage.setItem('token', response.data.data);
      console.log(response.data.data);
      let token = localStorage.getItem('token');
      let applicationResponse = await axios.get(
        'http://localhost:8081/api/v1/auth/user',
        {
          headers: { token: token },
        }
      );
      if (applicationResponse.data.data.user.applied) {
        this.$router.push('/applicantdashboard');
      } else {
        this.$router.push('/applicationform');
      }
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
  /* identical to box height */
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
[type='email']:focus {
  border: 3px solid #7557d3;
}

input[type='password'],
[type='email'] {
  padding-left: 10px;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  /* identical to box height */
  color: #4f4f4f;
}

.btn-container-text {
  display: flex;
}

.signinbtn-text {
  font-style: italic;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  /* identical to box height */
  color: #4f4f4f;
  margin-top: 10px;
}

.signinbtn-text1 {
  font-style: italic;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  /* identical to box height */
  color: #4f4f4f;
  margin-top: 10px;
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
</style>
