<template>
  <div id="app">
    <email-filter :emails="emails"></email-filter>
    <button @click='isComposing=true; isSelected=false' class="composer">Compose</button>
    <div class="email__wrapper">
      <div class="email__container">
        <email-list :emails="emails" class="email__list" @selectEmail="selectedEmailId">need to bind 'email to render' instead of emails</email-list>
        <email-details v-if="isSelected" class="email__details" :email="selectedEmail" @deleteEmail="deletedEmailID"></email-details>
        <email-composer v-if="isComposing" class="email__Composer" @sendMail='sendMail'></email-composer>
      </div>
      <email-status :unreadEmailsNum="unreadEmailsNum" :emailsNum="emailsNum"></email-status>
    </div>
  </div>
</template>

<script>

import EmailDetails from './email-details.vue';
import EmailList from './email-list.vue';
import EmailStatus from './email-status.vue';
import EmailComposer from './email-composer.vue';
import EmailFilter from './email-filter.vue';

export default {
  name: 'app',
  data () {
    return {
      emails: [], 
      //   {id: 1, subject: 'mail1', body: 'uuheh vtehethns.kdjvnldvl/in ldvinoidnv lndvn', isRead: false},
      //   {id: 2, subject: 'mail2', body: 'heheht vns.kdjvnthehheethethoidnv lndvn', isRead: false},
      //   {id: 3, subject: 'mail3', body: '88jjjrjvns.ehttehjvnldvl/inehtethnoidnv lndvn', isRead: false},
      //   {id: 4, subject: 'mail4', body: 'aqhhjrjjvns.kdjvnehehvl/in ldvinoidnv lndvn', isRead: false},
      //   {id: 5, subject: 'mail5', body: 'jjj ns.khteethldvl/in ldvinoidnv lndvn', isRead: false},
      //   {id: 6, subject: 'mail6', body: 'rjyrjj vns.ktehl/in ldvinoidnv lnehtdvn', isRead: false}
      // ],
      selectedEmail: null,
      isSelected: false,
      isComposing: false
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
    reloadEmails(){
      this.$http.get('email')
        .then(res=> res.json())
        .then(emails => this.emails = emails)
        .then(this.selectedEmail = this.emails[0]);

    },
    sendMail(newMail) {
      newMail.id = this.getNextId(newMail);
      console.log('email sent', newMail); 
      newMail.isRead = false;
      this.emails.push(newMail);
      this.isComposing = false;
    },
    getNextId(mail){
      let maxId = 0;
      this.emails.forEach(mail => {
        maxId = (mail.id > maxId)?  mail.id : maxId;
      });
      return maxId+1;
    },
    selectedEmailId(selectedEmailId) {
      this.selectedEmail = this.emails.filter(email => selectedEmailId === email.id)[0];
      this.selectedEmail.isRead = true;
      if (this.selectedEmail.id) this.isSelected = true;
    }, 
    deletedEmailID(deletedEmailID) {
      this.isSelected = false;
      this.emails = this.emails.filter(email => deletedEmailID !== email.id);
    }
  },
  components: {
    EmailDetails,
    EmailList,
    EmailStatus,
    EmailComposer,
    EmailFilter
  },
  created() {
    this.reloadEmails();
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
  .composer{
    left: 0;
  }
</style>