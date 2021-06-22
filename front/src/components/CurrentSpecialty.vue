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
    <div class="container">
      <div class="row">
        <div class="content">
          <div class="description">
            <h2 class="headder">Чем занимается специалист?</h2>
            {{ description }}
          </div>
        </div>
        <div class="sidebar"> {{ description }}</div>
      </div>
    </div>
    <div class="footer">{{ description }}</div>


  </v-app>
</template>

<script>
import axios from "axios";

export default {
  name: "CurrentSpecialty",
  data() {
    return {
      specialtyId: '',
      vacancies: {},
      specialtyParams: {},
      skillIds: {},
      imgUrl: '',
      specialtyName: '',
      description: ''
    }
  },
  created() {
    this.specialtyId = this.$route.params.id;
    axios.get(`http://localhost:5005/vacancies?specialty_id=${this.specialtyId}`)
        .then(res => this.vacancies = res.data);//[ "id", "company_name", "min_salary", "max_salary", "description", "location", "url", "specialty_id"]
    axios.get(`http://localhost:5005/specialties/${this.specialtyId}`)
        .then(res => {
          this.imgUrl = res.data["imgUrl"];
          this.specialtyName = res.data["name"];
          this.description = res.data["description"]
        })
    axios.get(`http://localhost:5005/skillSpecialty?specialty_id=${this.specialtyId}`)
        .then(res => this.skillIds = res.data)

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
  margin-bottom: 10px;
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
  font-family: Bookman, serif;
  font-size: 14px;
  text-align: center;

}

.description {
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  text-align: left;
  width: 70%;
}

.content {
  width: 70%;
  float: left;
  min-height: 500px;
}

.sidebar {
  width: 30%;
  float: left;
  background: red;
  min-height: 200px;
}

.headder {
  text-align: center;
}

</style>