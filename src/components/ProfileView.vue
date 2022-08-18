<template>
  <div class="container">
    <div class="coloredBackground"></div>

    <div class="form">
      <div class="formImg"><img src="" alt="" /></div>
      <p class="title">Personal Details</p>
      <hr />
      <div class="formWrap">
        <div class="formLeft">
          <label for="">Name</label>
          <input type="text" />

          <label for="">Address</label>
          <input type="text" />

          <label for="">Course of study</label>
          <input type="text" />

          <label for="">CGPA</label>
          <input type="text" />

          <button>Approve</button>
        </div>

        <div class="formRight">
          <label for="">Email</label>
          <input type="text" />

          <label for="">University</label>
          <input type="text" />

          <label for="">Date of birth</label>
          <input type="text" />

          <label for="">CV</label>
          <input type="text" />

          <button>Decline</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script></script>

<style scoped>
.container {
  display: flex;
  width: 100%;
  height: 100%;
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
.formWrap label {
  font-family: "Lato";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  color: #b1b1b1;
}
.formWrap input {
  width: 231px;
  height: 48px;
  border-radius: 4px;
  margin-bottom: 36px;
  border: 1px solid #cdcfd6;
  border-radius: 4px;
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
</style>
