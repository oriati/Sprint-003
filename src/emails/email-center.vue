<template>
  <div id="app">
    <email-filter @filterChanged="emailFilter = $event"></email-filter>
    <button @click='isComposing=true; isSelected=false' class="composer">Compose</button>
    <div class="email__wrapper">
      <div class="email__container">
        <email-list :emails="emailsToDisplay" class="email__list" @selectEmail="selectEmail">need to bind 'email to render' instead of emails</email-list>
        <email-details v-if="isSelected" class="email__details" :email="selectedEmail" @deleteEmail="deletedEmailID"></email-details>
        <email-composer v-if="isComposing" class="email__Composer" @sendMail='sendMail'></email-composer>
      </div>
      <email-status :unreadEmailsNum="unreadEmailsNum" :emailsNum="emailsNum"></email-status>
    </div>
  </div>
</template>
v
<script>

import EmailDetails from './email-details.vue';
import EmailList from './email-list.vue';
import EmailStatus from './email-status.vue';
import EmailComposer from './email-composer.vue';
import EmailFilter from '../components/filter.vue';

export default {
  name: 'app',
  data () {
    return {
      emails: [],
      selectedEmail: null,
      isSelected: false,
      isComposing: false,
      emailFilter: {subject: ''}
    }
  },
  computed: {
    emailsNum() {
      return this.emailsNum = this.emails.length;
    },
    unreadEmailsNum() {
      return this.emails.filter(email => email.isRead).length;
    },
    emailsToDisplay() {
        const regex = new RegExp(this.emailFilter.subject, 'i');
        let filteredArr =  this.emails.filter(mail => mail.subject.match(regex) || mail.body.match(regex));
        return this.emails.filter(mail => mail.subject.match(regex) || mail.body.match(regex));
    }
  },
  methods: {
    reloadEmails(){
      this.$http.get('email')
        .then(res=> res.json())
        .then(emails => {
          this.emails = emails;
          this.selectedEmail = this.emails[0];
          this.isSelected = true;
        })
        // .then(this.selectedEmail = this.emails[0])
      

    },
    sendMail(newMail) {
      newMail.isRead = false;
      newMail.id = this.getNextId(newMail);
      console.log('email', newMail); 
      this.$http.post('email', newMail)
      .then(console.log('email sent', newMail)); 
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
    selectEmail(emailId) {
      this.$http.get(`email/${emailId}`);
      this.selectedEmail = this.emails.filter(email => emailId === email.id)[0];
      this.selectedEmail.isRead = true;
      if (this.selectedEmail.id) this.isSelected = true;
    }, 
    deletedEmailID(emailId) {
      this.$http.delete(`email/${emailId}`);
      this.isSelected = false;
      this.emails = this.emails.filter(email => emailId !== email.id);
    },
    filterMails(filteredArr) {

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
  
  .composer {
    left: 0;
  }
</style>