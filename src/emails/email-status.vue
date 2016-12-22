<template>
  <div class="emails__status">
    {{unreadEmailsNum}} / {{emailsNum}} Emails read
    <progress-bar :precentage = "precentage"></progress-bar>
  </div>
</template>

<script>

import ProgressBar from '../components/progress-bar.vue';

export default {
  props: ['unreadEmailsNum', 'emailsNum'],
  data () {
    return {
    }
  },
  computed: {
    precentage: function () {
      return this.precentage = parseInt((this.unreadEmailsNum / this.emailsNum) * 100)
    }
  },
  components: {
    ProgressBar
  }
}
</script>

<style scope>
.emails__status {
  background: green;
  text-align: center;
  padding: 10px;
}
</style>
