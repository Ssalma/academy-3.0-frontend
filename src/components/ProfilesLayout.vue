<template>
  <div class="main">
    <p class="header">Profiles and Settings</p>
    <p class="subText">Helps you set admin profile and give other users permissions</p>

    <div class="btns">
      <button @click="clicked()" :class="{ active: active === true }">
        Admin Profile
      </button>

      <button>Timer Settings</button>
    </div>

    <div class="adminSet">
      <div class="adminP">
        <p>Profiles Setting</p>
        <button>Edit</button>
      </div>
      <hr class="hr" />

      <form>
        <div class="profileImage">
          <img src="" alt="" class="image" />
          <p class="upload">Upload new image</p>
          <p class="remove">
            <span class="material-symbols-outlined"> close </span>Remove
          </p>
        </div>

        <div class="input1">
          <div>
            <label class="label">Name</label>
            <input />
          </div>

          <div>
            <label class="label">Email</label>
            <input />
          </div>

          <div>
            <label class="label">Phone number</label>
            <input />
          </div>
        </div>

        <div class="bottom">
          <div>
            <label class="label">Country</label>
            <input class="country" />
          </div>

          <div class="address">
            <label class="label">Address</label>
            <input class="addressInput" />
          </div>
        </div>

        <button class="submit">Save</button>
      </form>
    </div>

    <div class="timerSet">
      <div>
        <p>Timer Setting</p>
        <hr class="hr" />
      </div>

      <p class="timerP">Set Time</p>

      <div class="timer">
        <div class="min">
          <span class="min1">00</span>
          <span class="min2">min</span>
          <span class="material-symbols-outlined"> arrow_drop_down </span>
        </div>

        <div class="min">
          <span class="min1">000</span>
          <span class="min2">sec</span>
          <span class="material-symbols-outlined"> arrow_drop_down </span>
        </div>
      </div>

      <button class="timeSave">Save</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Profile",
  data() {
    return {
      active: "",
    };
  },
  methods: {
    clicked() {
      return (this.active = !this.active);
    },
  },
};
</script>

<style scoped>
.main {
  margin-left: 42px;
}
.header {
  font-family: "Lato";
  font-style: normal;
  font-weight: 300;
  font-size: 43.5555px;
  line-height: 52px;
  letter-spacing: -0.02em;
  color: #2b3c4e;
  margin: 102px 0 15px 0px;
}
.subText {
  font-family: "Lato";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
  color: #202f44;
  mix-blend-mode: normal;
  opacity: 0.5;
  margin-bottom: 86px;
}
.btns {
  display: flex;
}
.btns button {
  width: 188px;
  height: 64px;
  font-family: "Lato";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  color: #333758;
  mix-blend-mode: normal;
  border: none;
  background-color: #fefcfc;
  margin-bottom: 44px;
}
.active {
  background: rgba(117, 87, 211, 0.1);
}
.adminP {
  display: flex;
  align-items: center;
}
.adminSet {
  margin-left: 6px;
  display: none;
}
.adminP p,
.timerSet p {
  font-family: "Lato";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  letter-spacing: -0.4px;
  color: #4a4a4a;
  margin-right: 494px;
}
.adminP button {
  border: 1px solid #7557d3;
  border-radius: 3px;
  width: 127px;
  height: 38px;
  font-family: "Karla";
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 18px;
  letter-spacing: -0.5px;
  color: #7557d3;
}
.hr {
  width: 724px;
  height: 1px;
  background: #ffffff;
  border: 1px solid #f2f2f2;
  margin: 12px 0 56px 0;
}
.profileImage {
  display: flex;
  align-items: center;
}
.image {
  background: #66a9df;
  width: 54px;
  height: 54px;
  border-radius: 30px;
}
.upload {
  font-family: "Lato";
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 18px;
  letter-spacing: -0.117188px;
  text-decoration-line: underline;
  color: #333758;
  opacity: 0.5;
  margin: 0 46px 0 32px;
}
.remove {
  font-family: "Lato";
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 18px;
  letter-spacing: -0.117188px;
  color: #ff5722;
  display: flex;
  align-items: center;
}
.input1,
.bottom {
  display: flex;
  gap: 0 40px;
}
.label {
  font-family: "Lato";
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 18px;
  letter-spacing: -0.117188px;
  color: #333758;
  opacity: 0.5;
  display: block;
}
.input1 input,
.country {
  width: 216px;
  height: 54px;
  background: #7557d3;
  opacity: 0.04;
  outline: none;
  border: none;
  padding-left: 18px;
}
.bottom {
  margin-top: 40px;
}
.input1 {
  padding-top: 44px;
}
.submit,
.timeSave {
  background: #7557d3;
  border-radius: 3px;
  border: none;
  width: 127px;
  height: 38px;
  font-family: "Karla";
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 18px;
  letter-spacing: -0.5px;
  color: #ffffff;
  margin: 40px 0 0 300px;
}
.timeSave {
  margin: 0 0 0 6px;
}
.addressInput {
  width: 469px;
  height: 54px;
  background: #7557d3;
  opacity: 0.04;
}
.timer {
  display: flex;
  gap: 0 40px;
  margin-bottom: 34px;
}
.timerP {
  font-family: "Lato";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  color: #2b3c4e;
}
.min1 {
  font-family: "Lato";
  font-style: normal;
  font-weight: 300;
  font-size: 48px;
  line-height: 58px;
  color: #2b3c4e;
}
.min2 {
  font-family: "Lato";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  color: #4f4f4f;
}
</style>
