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
  list-style: none;
}

.email {
  cursor: pointer;
  border-bottom: 1px solid #999;
  background: #fff;
  line-height: 35px;
  font-size: 0.8rem;
  padding: 0 24px;
}

.email:hover {
  background: #cecece;
}

.read {
  background: #d0d8cc;
}

</style>
