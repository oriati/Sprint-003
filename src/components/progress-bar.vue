<template>
  <div class="progress">
    <div class="progress-bar" role="progressbar" :aria-valuenow="precentage" aria-valuemin="0" aria-valuemax="100" :style="{ width: precentage + '%' }">
      {{precentage}}%
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      
    }
  },
  props: {
    precentage: {
      type: Number
    }
  }
}
</script>

<style scoped>
  /*.email__details {
    padding: 10px;
  }*/
  .progress-bar {
    background-color: white;
    border-radius: 5px;
    /*color: white;*/
  }
</style>
