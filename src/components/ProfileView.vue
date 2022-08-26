<template>
  <div class="container">
    <div class="coloredBackground"></div>

    <div class="form">
      <div><img :src="applicant.img" alt="" class="formImg" /></div>
      <p class="title">Personal Details</p>
      <hr />
      <div class="formWrap">
        <div class="formLeft">
          <p>Name</p>
          <div class="formContainer">
            {{ applicant.firstName + " " + applicant.lastName }}
          </div>

          <p>Address</p>
          <div class="formContainer">{{ applicant.address }}</div>

          <p for="">Course of study</p>
          <div class="formContainer">{{ applicant.course }}</div>

          <p for="">CGPA</p>
          <div class="formContainer">{{ applicant.cgpa }}</div>

          <button>Approve</button>
        </div>

        <div class="formRight">
          <p for="">Email</p>
          <div class="formContainer">{{ applicant.email }}</div>

          <p for="">University</p>
          <div class="formContainer">{{ applicant.university }}</div>

          <p for="">Date of birth</p>
          <div class="formContainer">
            {{ applicant.dateOfBirth }}
          </div>

          <p for="">CV</p>
          <div class="formContainer" id="cv">{{ applicant.cv }}</div>

          <button>Decline</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: { applicant: { type: Object } },
  data() {
    return {};
  },
  methods: {},
};
</script>

<style scoped>
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
</style>
