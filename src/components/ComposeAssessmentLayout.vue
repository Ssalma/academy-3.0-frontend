<template>
  <div class="main">
    <p class="headText">Compose Assessment</p>
    <p class="num">15/30</p>

    <form action="">
      <div class="fileWrap">
        <label for="file" class="chooseFile"
          ><span class="material-symbols-outlined" id="icon"> add </span> choose
          file</label
        >
        <input type="file" id="file" />
      </div>

      <label for="Questions">Questions</label><br />
      <textarea name="" id="questions" cols="" rows=""></textarea>

      <div class="miniwrap">
        <div class="left">
          <label for="">Option A</label>
          <input type="text" class="input" />

          <label for="">Option C</label>
          <input type="text" class="input" />

          <button id="pBtn">Previous</button>
        </div>

        <div class="right">
          <label for="">Option B</label>
          <input type="text" class="input" id="inputB" />

          <label for="">Option D</label>
          <input type="text" class="input" />

          <button id="nBtn">Next</button>
        </div>
      </div>

      <button id="submitBtn">Finish</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "ComposeAssessment layout",
  components: {},
  methods: {},
  computed: {},
};
</script>
<style scoped>
.main {
  margin-left: 80px;
}
.headText {
  font-family: "Lato";
  font-style: normal;
  font-weight: 300;
  font-size: 43.5555px;
  line-height: 52px;
  letter-spacing: -0.02em;
  color: #2b3c4e;
}
.num {
  font-family: "Lato";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  color: #2b3c4e;
  margin: 62px 0 22px 0;
}
#file {
  display: none;
}
.chooseFile {
  font-family: "Avenir";
  font-size: 16px;
  line-height: 22px;
  color: #2b3c4e;
  border: 1.6px dashed #2b3c4e;
  border-radius: 6px;
  align-items: center;
  display: flex;
  width: 456px;
  height: 108px;
  justify-content: center;
}
#icon {
  margin-right: 13px;
}
.fileWrap {
  padding-bottom: 25px;
}
label {
  font-family: "Lato";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  color: #2b3c4e;
  margin-bottom: 5px;
}
#questions {
  border: 1.5px solid #2b3c4e;
  border-radius: 4px;
  width: 976px;
  height: 144px;
  margin-bottom: 25px;
}
.miniwrap {
  display: flex;
  gap: 0 64px;
}
.input {
  border: 1.5px solid #2b3c4e;
  border-radius: 4px;
  width: 456px;
  height: 41px;
  margin-bottom: 25px;
}
.left,
.right {
  display: flex;
  flex-direction: column;
}
.left button,
.right button {
  background: #2b3c4e;
  border-radius: 4px;
  width: 125px;
  height: 41px;
  border: none;
  font-family: "Lato";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  color: #ffffff;
  margin-top: 28px;
}
#pBtn {
  margin-left: 84px;
}
#nBtn {
  margin-left: 242px;
}
#inputB {
  background: #31d283;
  border: none;
}
#submitBtn {
  background: #cecece;
  border-radius: 4px;
  width: 205px;
  height: 41px;
  border: none;
  font-family: "Lato";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  color: #ffffff;
  margin: 55px 0 0 374px;
}
</style>
