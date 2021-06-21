<template>
<v-app>
<div class="img"></div>
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
    imgUrl: {}
  }
},
created() {
  this.specialtyId = this.$route.params.id;
  axios.get(`http://localhost:5005/vacancies?specialty_id=${this.specialtyId}`)
      .then(res => this.vacancies = res.data);//[ "id", "company_name", "min_salary", "max_salary", "description", "location", "url", "specialty_id"]
  axios.get(`http://localhost:5005/specialties/${this.specialtyId}`)
    .then(res => this.specialtyParams = res.data)
  axios.get(`http://localhost:5005/skillSpecialty?specialty_id=${this.specialtyId}`)
      .then(res => this.skillIds = res.data)
},
mounted() {

},
methods: {

}
}
</script>

<style scoped>

</style>