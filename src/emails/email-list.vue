<template>
  <ul class="emails">
    <li v-for="email in emails" class="email" :class="{read: email.isRead}" @click="$emit('selectEmail', email.id)">
      <email-preview :email="email"></email-preview>
    </li>
  </ul>
</template>

<script>

import EmailPreview from './email-preview.vue';

export default {
  props: {
    emails: {
      required: true,
      type: Array
    }
  },
  data () {
    return {      
    }
  },
  components: {
    EmailPreview
  }
}
</script>

<style scoped>

.emails {
  margin: 0;
  padding: 0;
  list-style: none;
}

.email {
  padding: 10px;
  cursor: pointer;
  border-bottom: 1px solid #999;
  font-weight: bold;
}

.email:last-child {
  border: none;
}

.email:hover {
  background: #cecece;
}

.read {
  font-weight: normal;
}

</style>
