<template>
  <v-app>
    <div class="containerImg">
      <v-img
          :lazy-src=imgUrl
          max-height="300"
          max-width="100%"
          :src=imgUrl
      ></v-img>
      <div class="centered">{{ specialtyName }}</div>
    </div>
    <div>
      <div class="sidebar"></div>
      <div class="content">
        <div class="description">
          <h3 class="headder"> Краткое описание </h3>
          {{description}}
          <br>
          <div class="salary">
            <h4 class="subheadder">Средняя зарплата в Великобритании:</h4>
            <div class="wrappLeft">{{ salary }} £ в год</div>
          </div>
        </div>
        <div class="skills">
          <h3 class="headder">Необходимые навыки для успешной работы</h3>
          <div class="skillsInfo">
            <h4 class="subheadder">Важные личные качества: </h4>
            <ul>
              <li v-for="key in softSkills" :key="key">
                {{ key }}
              </li>
            </ul>
          </div>
          <div class="skillsInfo">
            <h4 class="subheadder">Важные профессиональные качества: </h4>
            <ul>
              <li v-for="key in hardSkills" :key="key">
                {{ key }}
              </li>
            </ul>
          </div>
        </div>

        <div class="vacancies">
          <h3 class="headder">Вакансии в Великобритании: </h3>
          <div class="vacanciesContainer">
            <div class="list" v-for="(vacancy, index) in vacancies" :key="index">
              <VacancyCard
                  :company_name="vacancy['company_name']"
                  :min_salary="vacancy['min_salary']"
                  :max_salary="vacancy['max_salary']"
                  :location="vacancy['location']"
                  :vacancyDescription="vacancy['description']"
                  :vacancyUrl="vacancy['url']"
                  :specialty_name="specialtyName"
              />
          </div>
          </div>
        </div>
      </div>
      <div class="sidebar"></div>
    </div>
    <div class="footer">
    </div>

  </v-app>
</template>

<script>
import axios from "axios";
import VacancyCard from "@/components/vacancyCard";

export default {
  name: "CurrentSpecialty",
  components: {
    VacancyCard,
  },
  data() {
    return {
      specialtyId: '',
      vacancies: {},
      specialtyParams: {},
      skillIds: [],
      imgUrl: '',
      specialtyName: '',
      description: '',
      hardSkills: [],
      softSkills: [],
      salary: '',
      company_name: '',
      min_salary: '',
      max_salary: '',
      location: '',
      vacancyDescription: '',
      vacancyUrl: '',
    }
  },
  created() {
    this.specialtyId = this.$route.params.id;
    axios.get(`http://localhost:5005/vacancies?specialty_id=${this.specialtyId}`)
        .then(res => {
          this.vacancies = res["data"];
          /*this.company_name = res.data["company_name"]
          this.min_salary = res.data["min_salary"]
          this.max_salary = res.data["max_salary"]
          this.vacancyDescription = res.data["vacancyDescription"]
          this.vacancyUrl = res.data["vacancyUrl"]*/
        });//[ "id", "company_name", "min_salary", "max_salary", "description", "location", "url", "specialty_id"]
    axios.get(`http://localhost:5005/specialties/${this.specialtyId}`)
        .then(res => {
          this.imgUrl = res.data["imgUrl"];
          this.specialtyName = res.data["name"];
          this.description = res.data["description"]
          this.salary = Math.round(res.data["overageSalary"])
        })
    axios.get(`http://localhost:5005/skillSpecialty?specialty_id=${this.specialtyId}`)
        .then(res => {
          for (const key of res.data){
            axios.get(`http://localhost:5005/skills/${key["skill_id"]}`)
            .then(res => {
              if (res["data"]["type"] === 1) {
                this.softSkills.push(res["data"]["skill_name"])
              } else if(res["data"]["type"] === 2) {
                this.hardSkills.push(res["data"]["skill_name"])
              }
            })
          }
        })
  },
  mounted() {
  },
  methods: {
    method1() {
      this.imgUrl = this.specialtyParams
    }
  }
}
</script>

<style scoped>
* {
  box-sizing: border-box;
}

.img img {
  width: 100%;
  height: 500px;
}

.containerImg {
  position: relative;
  text-align: center;
  color: white;
}

.centered {
  font-family: Impact, fantasy;
  font-size: 30px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.description {
  text-align: left;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  margin-left: 10px;
  margin-right: 10px;

}

.content {
  width: 80%;
  float: left;
  min-height: 400px;
  text-align: left;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}

.sidebar {
  width: 10%;
  float: left;
  height: 100%;
  background: #e3e3e3 ;
}

.headder {
  text-align: center;
  margin-top: 20px;
  margin-bottom: 10px;
}
.subheadder {
  text-align: left;
  margin-top: 20px;
  margin-bottom: 10px;
  margin-left: 7px;
}

.footer {
  min-height: 20px;
  margin-top: 10px;
  background: #808080;
  height: 100%;
  width: 100%;
  text-align: left;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
}

.skillsInfo {
  text-align: left;
}

.wrappLeft {
  margin-left: 15px;
  display: block;
}

.vacanciesContainer {
  text-align: center;
  margin-top: 30px;
  justify-content: left;
}


</style>