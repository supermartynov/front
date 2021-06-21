<template>
  <v-card>
    <button @click="$router.push({path: `/specialties/${id}`})">
      <div class="card">
        {{ specialtyName }}
        <v-spacer></v-spacer>
        {{ id }}
      </div>
    </button>


  </v-card>
</template>

<script>
export default {
name: "specialtyCard",
props: ['id', 'specialtyName']
}
</script>

<style scoped>
.card {
  width: 300px;
  padding: 10px 20px 10px 20px;
}
</style>