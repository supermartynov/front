<template>
<div>
hello {{data}}
</div>
</template>

<script>
export default {
name: "CurrentSpecialty",
data() {
  return {
    data: 'высв'
  }
},
created() {
  this.data = this.$route.params.id
}
}
</script>

<style scoped>

</style>