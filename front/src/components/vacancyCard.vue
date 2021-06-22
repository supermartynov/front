<template>
<v-app>
  <v-card class="mx-auto" max-width="400">
    <v-card-text>
      <p>{{ specialty_name  }}</p>
      <div class="companyName"><p>Название компании :  {{company_name}}</p></div>
      <p>Зарплата :  {{Math.round(max_salary)}} £ в год</p>
      <p>Местонахождение: {{ location }}</p>
    </v-card-text>
    <v-card-actions>
      <a :href="vacancyUrl" target="_blank">
        <v-btn text color="black accent-4">Подробнее</v-btn>
      </a>
    </v-card-actions>
  </v-card>
</v-app>
</template>

<script>
export default {
name: "vacancyCard",
props: ['min_salary', 'max_salary', 'location', 'vacancyDescription', 'vacancyUrl', 'company_name', 'specialty_name']

}

</script>

<style scoped>

.companyName {
  font-size: 14px;
}

.card {
  margin-top: -200px;
  width: 300px;
  padding: 10px 20px 10px 20px;
}

</style>