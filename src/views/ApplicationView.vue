<template>
  <div class="application-container">
    <div class="application-header">
      <figure>
        <router-link :to="{ name: 'home' }"
          ><img src="../assets/enyataSmallerLogo.svg" alt="Enyata logo"
        /></router-link>
      </figure>
      <h1 class="applicant-text">Applicant Log In</h1>
    </div>
    <form
      action="/application"
      method="post"
      enctype="multipart/form-data"
      @submit.prevent="applicationFormSubmit"
    >
      <div class="container-form">
        <fieldset class="input-file-photo">
          <input
            type="file"
            accept="file_extension"
            id="file"
            name="cv"
            v-on:change="selectedFile($event)"
          />
          <label for="file" class="upload-file"
            ><span class="material-symbols-outlined">add</span> Upload CV</label
          >
          <h6>{{ error.cvErr }}</h6>
          <input
            type="file"
            accept="image/*"
            id="upload-photo"
            name="img"
            v-on:change="selectedImg($event)"
          />
          <label for="upload-photo" class="upload-file"
            ><span class="material-symbols-outlined">add</span> Upload
            Photo</label
          >
          <h6>{{ error.imgErr }}</h6>
        </fieldset>
        <div class="form-input">
          <fieldset>
            <label for="fName">First Name</label>
            <input
              type="text"
              id="fName"
              name="fName"
              v-model="form.firstName"
            />
            <h6>{{ error.firstNameErr }}</h6>
            <label for="email">Email</label>
            <input type="email" id="email" name="email" v-model="form.email" />
            <h6>{{ error.emailErr }}</h6>
            <label for="address">Address</label>
            <input
              type="text"
              id="address"
              name="address"
              v-model="form.address"
            />
            <h6>{{ error.addressErr }}</h6>
            <label for="course">Course of Study</label>
            <input
              type="text"
              id="course"
              name="course"
              v-model="form.course"
            />
            <h6>{{ error.courseErr }}</h6>
          </fieldset>
          <fieldset>
            <label for="lName">Last Name</label>
            <input
              type="text"
              id="lName"
              name="lastName"
              v-model="form.lastName"
            />
            <h6>{{ error.lastNameErr }}</h6>
            <label for="date">Date of Birth</label>
            <input
              type="date"
              id="date"
              max="31-12-1979"
              name="dateOfBirth"
              v-model="form.dateOfBirth"
            />
            <h6>{{ error.dateOfBirthErr }}</h6>
            <label for="university">University</label>
            <input
              type="text"
              id="university"
              name="university"
              v-model="form.university"
            />
            <h6>{{ error.universityErr }}</h6>
            <label for="number">CGPA</label>
            <input
              type="number"
              id="number"
              min="1"
              max="4"
              step="0.01"
              name="cgpa"
              v-model="form.cgpa"
            />
            <h6>{{ error.cgpaErr }}</h6>
          </fieldset>
        </div>
        <div class="btn-container">
          <app-button class="signup-btn" :text="submitText"></app-button>
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
      submitText: 'Submit',
      form: {
        firstName: '',
        lastName: '',
        email: '',
        dateOfBirth: null,
        address: '',
        university: '',
        course: '',
        cgpa: null,
        cv: null,
        img: null,
      },
      error: {
        firstNameErr: '',
        lastNameErr: '',
        emailErr: '',
        dateOfBirthErr: '',
        addressErr: '',
        universityErr: '',
        courseErr: '',
        cgpaErr: '',
        cvErr: '',
        imgErr: '',
      },
    };
  },
  methods: {
    selectedFile(event) {
      this.form.cv = event.target.files[0];
    },
    selectedImg(event) {
      this.form.img = event.target.files[0];
    },
    async applicationFormSubmit() {
      !this.form.cv
        ? (this.error.cvErr = 'Please upload a cv')
        : console.log(this.form.cv.name);
      !this.form.img
        ? (this.error.imgErr = 'Please upload a photo')
        : console.log(this.form.img);
      this.form.firstName.trim().length < 2
        ? (this.error.firstNameErr =
            'This field should be more than one character')
        : console.log(this.form.firstName);
      this.form.lastName.trim().length < 2
        ? (this.error.lastNameErr =
            'This field should be more than one character')
        : console.log(this.form.lastName);
      this.form.email.trim().includes('@')
        ? console.log(this.form.email)
        : (this.error.emailErr =
            'This field should contain a valid email address');
      !this.form.dateOfBirth
        ? (this.error.dateOfBirthErr = 'The format should follow dd/mm/yyyy')
        : console.log(this.form.dateOfBirth);
      this.form.address.trim()
        ? console.log(this.form.address)
        : (this.error.addressErr = 'This field should be an address');
      this.form.university.trim()
        ? console.log(this.form.university)
        : (this.error.universityErr =
            'This field should be more than one character');
      this.form.course.trim()
        ? console.log(this.form.course)
        : (this.error.courseErr =
            'This field should be more than one character');
      this.form.cgpa
        ? console.log(this.form.cgpa)
        : (this.error.cgpaErr = 'This field should be a number');

      const formData = new FormData();
      formData.append('cv', this.form.cv, this.form.cv.name);
      formData.append('img', this.form.img, this.form.img.name);
      formData.append('firstName', this.form.firstName);
      formData.append('lastName', this.form.lastName);
      formData.append('email', this.form.email);
      formData.append('dateOfBirth', this.form.dateOfBirth);
      formData.append('address', this.form.address);
      formData.append('course', this.form.course);
      formData.append('cgpa', this.form.cgpa);
      formData.append('university', this.form.university);

      let token = localStorage.getItem('token');
      let response = await axios.post(
        'http://localhost:8081/api/v1/auth/application',
        formData,
        {
          headers: { token: token },
        }
      );
      console.log(response);
      this.$router.push('/applicantdashboard');
    },
  },
};
</script>

<style scoped>
.application-container {
  margin-left: auto;
  margin-right: auto;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-content: space-around;
  height: 100vh;
  padding: 20px 0px 10px 0px;
}

.application-header,
.applicant-text,
.btn-container {
  text-align: center;
}

.applicant-text {
  font-family: 'Lato';
  font-style: italic;
  font-weight: 500;
  font-size: 24px;
  line-height: 29px;
  /* identical to box height */
  color: #2b3c4e;
}

input[type='file'] {
  display: none;
}

.input-file-photo {
  display: flex;
  gap: 32px;
  justify-content: center;
}

.upload-file {
  font-family: 'Nunito', sans-serif;
  font-size: 16px;
  line-height: 22px;
  /* identical to box height */
  display: flex;
  align-items: center;
  color: #2b3c4e;
  border: 1.5px dashed #2b3c4e;
  border-radius: 2.87205px;
  padding: 15px 12px;
  width: 100%;
  max-width: 211px;
  display: flex;
  justify-content: center;
}

input[type='date']::-webkit-inner-spin-button,
input[type='date']::-webkit-calendar-picker-indicator {
  display: none;
  -webkit-appearance: none;
}

form {
  overflow-x: hidden;
}

.form-input {
  display: flex;
  justify-content: center;
  gap: 62px;
  margin-top: 32px;
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
[type='date']:focus,
[type='number']:focus,
[type='text']:focus,
[type='tel']:focus,
[type='email']:focus {
  border: 3px solid #7557d3;
}

input[type='password'],
[type='text'],
[type='date'],
[type='number'],
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

::-webkit-scrollbar {
  width: 6px;
}

::-webkit-scrollbar-track {
  background: #cdcfd6;
}

::-webkit-scrollbar-thumb {
  background: #031131;
  opacity: 0.7;
  border-radius: 17px;
  background-clip: padding-box;
}

::-webkit-scrollbar-thumb:hover {
  background: #031131;
  opacity: 0.7;
  border-radius: 17px;
}

.container-form {
  background: #ffffff;
  box-shadow: 0px 5px 15px rgba(33, 31, 38, 0.05);
  border-radius: 8px;
  max-width: 963px;
  width: 100%;
  margin: 0 auto 10px auto;
  padding: 53px 0px 39px 0px;
}
</style>
