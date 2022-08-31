<template>
  <div class="main">
    <p class="headText">Compose Assessment</p>
    <p class="error">{{ errorMessage }}</p>
    <p class="num">{{ count }}/30</p>

    <form action="" @submit.prevent="">
      <div class="fileWrap">
        <label for="file" class="chooseFile"
          ><span class="material-symbols-outlined" id="icon"> add </span> choose
          file</label
        >
        <input type="file" id="file" />
      </div>

      <label for="Questions">Questions</label><br />
      <textarea name="" id="questions" cols="" rows="" v-model="question"></textarea>

      <div class="miniwrap">
        <div class="left">
          <label for="">Option A</label>
          <input
            type="text"
            class="input"
            v-model="optionA"
            @dblclick="setCorrectAnswer('a')"
            :class="[correctAnswer == 'a' ? 'correctOption' : 'none']"
          />

          <label for="">Option C</label>
          <input
            type="text"
            class="input"
            v-model="optionC"
            @dblclick="setCorrectAnswer('c')"
            :class="[correctAnswer == 'c' ? 'correctOption' : 'none']"
          />

          <button id="pBtn" @click="previousQuestion()">Previous</button>
        </div>

        <div class="right">
          <label for="">Option B</label>
          <input
            type="text"
            class="input"
            id="inputB"
            v-model="optionB"
            @dblclick="setCorrectAnswer('b')"
            :class="[correctAnswer == 'b' ? 'correctOption' : 'none']"
          />

          <label for="">Option D</label>
          <input
            type="text"
            class="input"
            v-model="optionD"
            @dblclick="setCorrectAnswer('d')"
            :class="[correctAnswer == 'd' ? 'correctOption' : 'none']"
          />

          <button id="nBtn" @click="nextQuestion()">Next</button>
        </div>
      </div>

      <button id="submitBtn">Finish</button>
    </form>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "ComposeAssessment layout",
  components: {},
  data() {
    return {
      question: "",
      optionA: "",
      optionB: "",
      optionC: "",
      optionD: "",
      assessments: [],
      correctAnswer: "",
      count: 1,
      errorMessage: "",
    };
  },
  methods: {
    async nextQuestion() {
      try {
        this.errorMessage = "";
        let token = localStorage.getItem("token");
        if (this.assessments[this.count - 1]) {
          var id = this.assessments[this.count - 1];
          if (this.assessments[this.count]) {
            let response = await axios.put(
              `http://localhost:5000/api/v1/auth/assessment/${id}/update`,
              {
                question: this.question,
                a: this.optionA,
                b: this.optionB,
                c: this.optionC,
                d: this.optionD,
                correctAnswer: this.correctAnswer,
              },
              { headers: { token: token } }
            );
            let next = this.assessments[this.count];

            let res = await axios.get(
              `http://localhost:5000/api/v1/auth/assessment/${next}`,
              {
                headers: { token: token },
              }
            );
            this.count += 1;
            let currentAssessment = res.data.data;
            this.question = currentAssessment.question;
            this.optionA = currentAssessment.a;
            this.optionB = currentAssessment.b;
            this.optionC = currentAssessment.c;
            this.optionD = currentAssessment.d;
            this.correctAnswer = currentAssessment.correctAnswer;
          } else {
            let response = await axios.put(
              `http://localhost:5000/api/v1/auth/assessment/${id}/update`,
              {
                question: this.question,
                a: this.optionA,
                b: this.optionB,
                c: this.optionC,
                d: this.optionD,
                correctAnswer: this.correctAnswer,
              },
              { headers: { token: token } }
            );

            this.count += 1;
            this.question = "";
            this.optionA = "";
            this.optionB = "";
            this.optionC = "";
            this.optionD = "";
            this.correctAnswer = "";
          }
        } else {
          let res = await axios.post(
            "http://localhost:5000/api/v1/auth/assessment/create",
            {
              question: this.question,
              a: this.optionA,
              b: this.optionB,
              c: this.optionC,
              d: this.optionD,
              correctAnswer: this.correctAnswer,
            },
            {
              headers: { token: token },
            }
          );
          let currentAssessmentId = res.data.data._id;
          this.assessments.push(currentAssessmentId);
          this.count += 1;
          this.question = "";
          this.optionA = "";
          this.optionB = "";
          this.optionC = "";
          this.optionD = "";
          this.correctAnswer = "";
        }
      } catch (err) {
        console.log(err);
        if (err.response.data.message.includes("correctAnswer")) {
          this.errorMessage = "Please select the correct answer";
        }
      }
    },

    setCorrectAnswer(option) {
      this.correctAnswer = option;
    },

    async previousQuestion() {
      let token = localStorage.getItem("token");
      if (this.count > 1) {
        try {
          let id = this.assessments[this.count - 2];
          this.count -= 1;
          let res = await axios.get(
            `http://localhost:5000/api/v1/auth/assessment/${id}`,
            {
              headers: { token: token },
            }
          );

          let assessment = res.data.data;
          this.question = assessment.question;
          this.optionA = assessment.a;
          this.optionB = assessment.b;
          this.optionC = assessment.c;
          this.optionD = assessment.d;
          this.correctAnswer = assessment.correctAnswer;
        } catch (error) {
          console.log(error);
        }
      } else {
        console.log("No previous available");
      }
    },
  },
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
.correctOption {
  background: #31d283;
  border: none;
  outline: none;
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
.error {
  font-family: "Lato";
  font-style: italic;
  font-weight: 700;
  font-size: 14px;
  line-height: 19px;
  color: tomato;
}
</style>
