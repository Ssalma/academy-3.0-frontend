<template>
  <div class="main">
    <p class="headerText">Create Application</p>

    <form>
      <div class="top">
        <div class="file">
          <label for="file" class="chooseFile"
            ><span class="material-symbols-outlined" id="icon"> add </span> choose
            file</label
          >
          <input type="file" id="file" />
        </div>

        <div>
          <label for="" class="label">Link</label>
          <input type="text" id="link" />
        </div>
      </div>

      <div class="midSect">
        <div class="applicationWrap">
          <label class="label">Application closure date</label>
          <input type="text" placeholder="dd/mm/yyyy" />
        </div>

        <div class="batchWrap">
          <label for="" class="label">Batch ID</label>
          <input type="text" />
        </div>
      </div>

      <div>
        <label for="" class="label">Instructions</label>
        <textarea name="" id="instructions" cols="" rows=""></textarea>
      </div>

      <button class="formbtn">Submit</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "CreateAssessment View",
};
</script>

<style scoped>
.main {
  padding-left: 75px;
}
.headerText {
  font-family: "Lato";
  font-style: normal;
  font-weight: 300;
  font-size: 43.5555px;
  line-height: 52px;
  letter-spacing: -0.02em;
  color: #2b3c4e;
  margin: 137px 0 62px 0;
}
.label {
  font-family: "Lato";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  color: #2b3c4e;
  margin-bottom: 5px;
  display: block;
}
input {
  border: 1.5px solid #2b3c4e;
  border-radius: 4px;
  width: 456px;
  height: 41px;
  margin-bottom: 36px;
}
input ::placeholder {
  font-family: "Lato";
  font-style: italic;
  font-weight: 400;
  font-size: 10px;
  line-height: 12px;
  color: #cecece;
  opacity: 0.5;
}
.top {
  display: flex;
  gap: 0 64px;
  align-items: center;
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
  border-radius: 6.2069px;
  margin-bottom: 30px;
  padding: 45px 178px;
  align-items: center;
  display: flex;
}
#icon {
  margin-right: 13px;
}
.midSect {
  display: flex;
  gap: 0 64px;
}

#instructions {
  border: 1.5px solid #2b3c4e;
  border-radius: 4px;
  width: 967px;
  height: 144px;
  margin-bottom: 44px;
}
.formbtn {
  background: #7557d3;
  border-radius: 4px;
  width: 379px;
  height: 50px;
  font-family: "Lato";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  color: #ffffff;
  border: none;
  margin-left: 298px;
}
</style>
