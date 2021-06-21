<template>
  <v-app>
    <div class="headder">
      <h1>Специальности</h1>
    </div>
    <div class="info" >
    </div>
    <div class="container">
      <div class="list" v-for="(specialty, index) in response" :key="index">
        <specialty-card :id="specialty.id" :specialtyName="specialty.name"></specialty-card>
      </div>
    </div>
  </v-app>
</template>

<script>
import {getSpecialtyNames} from "../../services/specialties";
import specialtyCard from "@/components/specialtyCard";
import axios from "axios";

export default {
name: "mainPage",
components: {
  'specialtyCard': specialtyCard
},
data() {
  return {
    response: {}
  }
},
methods: {
  async getResponse() {
    const item = await getSpecialtyNames()
    return item
  }
},
mounted() {
  axios.get('http://localhost:5005/specialties/names')
  .then(res => this.response = res.data)
}

}
</script>

<style scoped>
div.headder {
  text-align: center;
  background: #131715;
  color: whitesmoke;
}
div.list {
  width: 300px;
  margin-top: 20px;
  justify-content: flex-start;
}
.container {
  text-align: center;
  margin-top: 50px;
  justify-content: space-around;
  display: flex;
  flex-wrap: wrap;
}
.info {}
</style>