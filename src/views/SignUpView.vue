<template>
  <div class="signup-container">
    <div class="signup-header">
      <figure>
        <router-link :to="{ name: 'home' }"
          ><img src="../assets/enyataSmallerLogo.svg" alt="Enyata logo"
        /></router-link>
      </figure>
      <h1 class="applicantText">Applicant Sign Up</h1>
    </div>
        <p>{{success}}</p>
    <form @submit.prevent="submitForm">
      <div class="form-input">
        <fieldset>
          <label for="first Name">First Name</label>
          <input type="text" v-model="firstName" />
          <h6 class="error">{{ form.firstNameErr }}</h6>
          <label for="Email Address">Email Address</label>
          <input type="email" v-model="emailAddress" />
          <h6 class="error">{{ form.emailAddressErr }}</h6>
          <label for="Password">Password</label>
          <input :type="inputTypeIcon" v-model="password.password" />
          <span @click.prevent="toggleInputIcon" v-if="inputTypeIcon == 'password'" class="material-symbols-outlined">visibility</span>
          <span v-else @click.prevent="toggleInputIcon" class="material-symbols-outlined">visibility_off</span>
          <h6 class="error">{{ form.passwordErr }}</h6>
        </fieldset>
        <fieldset>
          <label for="last Name">Last Name</label>
          <input type="text" v-model="lastName" />
          <h6 class="error">{{ form.lastNameErr }}</h6>
          <label for="phone Number">Phone Number</label>
          <input
            type="tel"
            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
            v-model="phoneNumber"
            placeholder="000-000-0000"
          />
          <h6 class="error">{{ form.phoneNumberErr }}</h6>
          <label for="confirm Password">Confirm Password</label>
          <input :type="inputType" v-model="password.confirmPassword" />
          <span @click.prevent="toggleInput" v-if="inputType == 'password'" class="material-symbols-outlined">visibility</span>
          <span v-else @click.prevent="toggleInput" class="material-symbols-outlined">visibility_off</span>
          <h6 class="error">{{ form.confirmPasswordErr }}</h6>
        </fieldset>
      </div>
      <div class="btnContainer">
        <app-button class="signup-btn" :text="signUpText"></app-button>
        <p class="signupbtn-text">
          Already have an account?
          <router-link :to="{ name: 'signin' }">Sign In</router-link>
        </p>
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
      signUpText: 'Sign Up',
      firstName: '',
      inputType: "password",
      inputTypeIcon: "password",
      lastName: '',
      emailAddress: '',
      phoneNumber: '',
      password: {
        password: '',
        confirmPassword: '',
      },
      success: "",
      form: {
        firstNameErr: '',
        lastNameErr: '',
        emailAddressErr: '',
        phoneNumberErr: '',
        passwordErr: '',
        confirmPasswordErr: '',
      },
    };
  },
  methods: {
    toggleInputIcon() {
      this.inputTypeIcon =
      this.inputTypeIcon === "password" ? "text" : "password";
    },
    toggleInput() {
      this.inputType =
      this.inputType === "password" ? "text" : "password";
    },
    async submitForm() {
      this.firstName.trim().length < 2
        ? (this.form.firstNameErr =
            'This field should be more than one character')
        : console.log("success");
      this.lastName.trim().length < 2
        ? (this.form.lastNameErr =
            'This field should be more than one character')
        : console.log("success");
      !this.emailAddress.trim().includes('@')
        ? (this.form.emailAddressErr =
            'Please include a valid email address')
        : console.log("success");
      !this.phoneNumber.trim()
        ? (this.form.phoneNumberErr =
            'Phone number should follow this format (000-000-0000)')
        : console.log("success");
      this.password.password.length < 8 && this.password.password === ""
        ? (this.form.passwordErr  =
            'Your password should be eight characters long')
        : console.log("success");
      this.password.password.length > 20 
        ? (this.form.passwordErr =
            'Your password should be not be more than 20 characters long')
        : console.log("success");
      this.password.password.trim() != this.password.confirmPassword
        ? (this.form.confirmPasswordErr = 'Your passwords do not match') 
        : console.log("success")
        
      let response = await axios
        .post('http://localhost:8081/api/v1/users/signUp', {
          firstName: this.firstName.trim(),
          lastName: this.lastName.trim(),
          email: this.emailAddress.trim(),
          phoneNumber: this.phoneNumber,
          password: this.password.password.trim(),
        })
        if(!response){
          console.log("failed")
        }
      console.log(response + `working`);
      this.$router.push('/signin');
      
    },
  },
};
</script>

<style scoped>
.signup-container {
  height: 100vh;
  max-width: 1440px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-content: space-around;
}

.signup-header {
  text-align: center;
}

.applicantText {
  font-family: 'Lato';
  font-style: italic;
  font-weight: 500;
  font-size: 24px;
  line-height: 29px;
  /* identical to box height */
  color: #2b3c4e;
  margin: 28px 0px 68px 0px;
}

.form-input {
  display: flex;
  justify-content: center;
  gap: 62px;
}

fieldset {
  border: none;
}

label {
  font-family: 'Lato';
  font-style: normal;
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
[type='text']:focus,
[type='tel']:focus,
[type='email']:focus {
  border: 3px solid #7557d3;
}

input[type='password'],
[type='text'],
[type='tel'],
[type='email'] {
  padding-left: 10px;
  font-family: 'Lato';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  /* identical to box height */
  color: #4f4f4f;
}

.btnContainer {
  text-align: center;
}

.signupbtn-text {
  font-family: 'Lato';
  font-style: italic;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  /* identical to box height */
  color: #4f4f4f;
  margin-top: 10px;
}

.material-symbols-outlined {
  opacity: 0.4;
  width: 15px;
  height: 8.57px;
  position: relative;
  left: -30px;
  top: 5px;
}

.error{
  position: relative;
  top: -20px;
  color: #d90429;
}
</style>
