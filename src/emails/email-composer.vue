<template>
    <section>
        <form>
            <!--<div class="form-group" onsubmit="return false">
                <label>Send To</label>
                <input type="email" class="form-control" v-model="newMail.adress" aria-describedby="email-adress" placeholder="Adress">
            </div>-->
            <div class="form-group">
                <label for="subject">Subject</label>
                <input type="text" class="form-control" v-model="newMail.subject" aria-describedby="email-subject" placeholder="">
            </div>
            <div class="form-group">
                <label for="body">Your Message</label>
                <textarea class="form-control"  v-model="newMail.body" rows="6"></textarea>
            </div>
            <div class="form-group">
                <label for="Attachments">Attach A File</label>
                <input type="file" class="form-control-file" aria-describedby="email-attach">
            </div>
             <button
                type="submit"
                @click.prevent="$emit('sendMail', newMail)"
                class="btn btn-primary">Send</button>
        </form>
        <!--adress : {{newMail.adress}}
        subject : {{newMail.subject}}
        body : {{newMail.body}}-->
    </section>

</template>

<script>
     export default {
        data() {
            return {
                newMail: {
                    // adress : '',
                    subject: '',
                    body: '',
                    files: []
                },
                submitted: false
            }
        }
    }

</script>

<style>

</style>
