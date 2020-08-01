<template>
  <q-page padding>
      Index page
  </q-page>
</template>

<script>
export default {
  data(){
    return {

    }
  },

  created(){
    this.$socket.emit('getPackages');
  }
}
</script>

<style>

</style>