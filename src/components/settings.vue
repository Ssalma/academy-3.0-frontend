<template>
  <div class="main">
    <p class="header">Profiles and Settings</p>
    <p class="subText">Helps you set admin profile and give other users permissions</p>

    <div class="btns">
      <button
        @click="clicked(false)"
        class="btnBtns"
        :class="[!displayTab ? 'activeBtn' : 'none']"
      >
        Admin Profile
      </button>

      <button
        class="btnBtns"
        @click="clicked(true)"
        :class="[displayTab ? 'activeBtn' : 'none']"
      >
        Timer Settings
      </button>
    </div>

    <div class="adminSet" :class="{ displayTab: displayTab == false }">
      <div class="adminP">
        <p>Profiles Setting</p>
        <button @click="editProfile">Edit</button>
      </div>
      <hr class="hr" />

      <form
        action="/application"
        class="form"
        method="post"
        enctype="multipart/form-data"
        @submit.prevent="updateProfile"
        :class="[editData ? 'formBlock' : 'none']"
      >
        <div class="profileImage">
          <img :src="img" alt="" class="image" />

          <div>
            <label for="file" class="upload">Upload new image</label>
            <input
              type="file"
              id="file"
              accept="image/*"
              name="img"
              v-on:change="selectedImg($event)"
            />
          </div>

          <p class="remove">
            <span class="material-symbols-outlined"> close </span>Remove
          </p>
        </div>

        <p class="error">{{ error }}</p>

        <div class="input1">
          <div>
            <label class="label">Name</label>
            <input v-model="adminName" type="text" class="inputFields" />
          </div>

          <div>
            <label class="label">Email</label>
            <input v-model="adminEmail" type="text" class="inputFields" />
          </div>

          <div>
            <label class="label">Phone number</label>
            <input v-model="phoneNumber" type="text" class="inputFields" />
          </div>
        </div>

        <div class="bottom">
          <div>
            <label class="label">Country</label>
            <input class="country" v-model="country" type="text" />
          </div>

          <div class="address">
            <label class="label">Address</label>
            <input class="addressInput" v-model="address" type="text" />
          </div>
        </div>

        <button class="submit">Save</button>
      </form>
    </div>

    <div class="timerSet" :class="{ displayTab: displayTab == true }">
      <div>
        <p>Timer Setting</p>
        <hr class="hr" />
      </div>

      <p class="timerP">Set Time</p>

      <div class="timer">
        <div class="min">
          <span class="min1">{{ setMin }}</span>
          <span class="min2">min</span>
          <span class="material-symbols-outlined">
            arrow_drop_down
            <select name="" id="" v-model="setMin">
              <option value="15">15</option>
              <option value="20">20</option>
              <option value="25">25</option>
              <option value="30">30</option>
              <option value="35">35</option>
              <option value="40">40</option>
              <option value="45">45</option>
              <option value="50">50</option>
              <option value="55">55</option>
              <option value="60">60</option>
            </select>
          </span>
        </div>

        <div class="min">
          <span class="min1">{{ setSec }}</span>
          <span class="min2">sec</span>
          <span class="material-symbols-outlined" id="downIcon">
            arrow_drop_down

            <select name="" id="" v-model="setSec">
              <option value="000">00</option>
              <option value="10">10</option>
              <option value="20">20</option>
              <option value="30">30</option>
              <option value="40">40</option>
              <option value="50">50</option>
              <option value="60">60</option>
            </select>
          </span>
        </div>
      </div>

      <button class="timeSave" @click="setTimer">Save</button>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Profile",
  data() {
    return {
      active: "",
      setMin: "00",
      setSec: "000",
      displayTab: "",
      adminName: "",
      adminEmail: "",
      phoneNumber: "",
      address: "",
      country: "",
      img: null,
      firstName: "",
      lastName: "",
      fullName: null,
      error: "",
      editData: false,
    };
  },

  methods: {
    clicked(data) {
      this.displayTab = data;
    },

    selectedImg(event) {
      this.img = event.target.files[0];
    },

    async editProfile() {
      this.editData = !this.editData;
      let token = localStorage.getItem("token");
      let response = await axios.get("http://localhost:5000/api/v1/auth/user", {
        headers: { token: token },
      });
      let adminProfile = response.data.data.user;
      console.log(adminProfile);
      this.adminName = adminProfile.firstName + " " + adminProfile.lastName;
      this.adminEmail = adminProfile.email;
      this.phoneNumber = adminProfile.phoneNumber;
      this.img = adminProfile.img;
    },

    async updateProfile() {
      try {
        this.fullName = this.adminName.split(" ");
        if (this.fullName.length > 1) {
          this.firstName = this.fullName[0];
          this.lastName = this.fullName[1];
        } else {
          this.firstName = "";
          this.lastname = "";
        }
        const formData = new FormData();
        if (typeof this.img === "object") {
          formData.append("img", this.img, this.img.name);
          console.log(typeof this.img);
        }
        if (this.firstName.length > 1) {
          formData.append("firstName", this.firstName);
          console.log(this.firstName);
        }
        if (this.lastName.length > 1) {
          formData.append("lastName", this.lastName);
          console.log(this.lastName);
        }
        if (this.adminEmail.length > 4 && this.adminEmail.includes("@")) {
          formData.append("email", this.adminEmail);
          console.log(this.adminEmail);
        }
        if (this.country.length > 1) {
          formData.append("country", this.country);
          console.log(this.country);
        }
        if (this.address.length > 1) {
          formData.append("address", this.address);
          console.log(this.address);
        }
        if (this.phoneNumber.length > 1) {
          formData.append("phoneNumber", this.phoneNumber);
          console.log(this.phoneNumber);
        }

        console.log(formData.entries());

        let token = localStorage.getItem("token");
        let res = await axios.put(
          "http://localhost:5000/api/v1/auth/admin/update",
          formData,
          {
            headers: { token: token },
          }
        );
        console.log(res);
        this.error = "Profile Updated successfully, Login again to view Updates";
      } catch (err) {
        console.log(err);
        this.error = "profile update error";
      }
    },

    async setTimer() {
      let token = localStorage.getItem("token");
      let res = await axios.put(
        "http://localhost:5000/api/v1/auth/timer/update",
        { minutes: this.setMin, seconds: this.setSec },
        {
          headers: { token: token },
        }
      );
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
.btnBtns {
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
.activeBtn {
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
.timerSet {
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
#file {
  display: none;
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
.inputFields,
.country {
  width: 216px;
  height: 54px;
  background: rgba(117, 87, 211, 0.1);
  outline: none;
  border: none;
  padding-left: 18px;
  font-family: "Lato";
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 23px;
  letter-spacing: -0.117188px;
  color: #333758;
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
  background: rgba(117, 87, 211, 0.1);
  outline: none;
  border: none;
  font-family: "Lato";
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 23px;
  letter-spacing: -0.117188px;
  color: #333758;
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
select {
  border: none;
  background: transparent;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  padding: 4px;
  background-size: 20px;
  color: #ffffff;
  font-size: 20px;
  position: absolute;
  left: 4px;
}
select option {
  color: #4f4f4f;
  background: #ffffff;
}
.material-symbols-outlined {
  position: relative;
}
.displayTab {
  display: block;
}

input[type="text"] {
  color: black;
}
.error {
  font-family: "Lato";
  font-style: italic;
  font-weight: 700;
  font-size: 12px;
  line-height: 19px;
  letter-spacing: -0.4px;
  color: #7557d3;
}
.form {
  display: none;
}
.formBlock {
  display: block;
}
</style>
