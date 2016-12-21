<template>
  <div id="app">
    <div class="email__wrapper">
      <div class="email__container">
        <email-list :emails="emails" class="email__list" @selectEmail="selectedEmailId"></email-list>
        <email-details v-if="emailPicked" class="email__details" :email="seletedEmail" @deleteEmail="deletedEmailID"></email-details>
      </div>
      <email-status :unreadEmailsNum="unreadEmailsNum" :emailsNum="emailsNum"></email-status>
    </div>
  </div>
</template>

<script>

import EmailDetails from './email/email-details.vue';
import EmailList from './email/email-list.vue';
import EmailStatus from './email/email-status.vue';

export default {
  name: 'app',
  data () {
    return {
      emails: [
        {id: 1, subject: 'mail1', body: 'uuheh vtehethns.kdjvnldvl/in ldvinoidnv lndvn', isRead: false},
        {id: 2, subject: 'mail2', body: 'heheht vns.kdjvnthehheethethoidnv lndvn', isRead: false},
        {id: 3, subject: 'mail3', body: '88jjjrjvns.ehttehjvnldvl/inehtethnoidnv lndvn', isRead: false},
        {id: 4, subject: 'mail4', body: 'aqhhjrjjvns.kdjvnehehvl/in ldvinoidnv lndvn', isRead: false},
        {id: 5, subject: 'mail5', body: 'jjj ns.khteethldvl/in ldvinoidnv lndvn', isRead: false},
        {id: 6, subject: 'mail6', body: 'rjyrjj vns.ktehl/in ldvinoidnv lnehtdvn', isRead: false}
      ],
      seletedEmail: null,
      emailPicked: true
    }
  },
  computed: {
    emailsNum: function() {
      return this.emailsNum = this.emails.length;
    },
    unreadEmailsNum: function() {
      return this.emails.filter(email => email.isRead).length;
    }
  },
  methods: {
    selectedEmailId(selectedEmailId) {
      this.seletedEmail = this.emails.filter(email => selectedEmailId === email.id)[0];
      this.seletedEmail.isRead = true;
      if (this.seletedEmail.id) this.emailPicked = true;
    }, 
    deletedEmailID(deletedEmailID) {
      this.emailPicked = false;
      this.emails = this.emails.filter(email => deletedEmailID !== email.id);
    }
  },
  components: {
    EmailDetails,
    EmailList,
    EmailStatus
  },
  created() {
    this.seletedEmail = this.emails[0];
  }
}
</script>


<style>
  .email__wrapper {
    max-width: 960px;
    margin: 0 auto;
    border: solid 1px #999;
  }
  
  .email__container {
    display: flex;
  }
  
  .email__list {
    width: 150px;
    background: pink;
  }
  
  .email__details {
    width: calc(100% - 150px);
    background: red;
  }
  
  * {
    box-sizing: border-box;
  }

  button {
    cursor: pointer;
  }
</style>