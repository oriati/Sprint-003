<template>
    <section>
        <form>
<<<<<<< HEAD
            <!--<div class="form-group" onsubmit="return false">
=======
            <!--<div class="form-group">
>>>>>>> 0bcda62398b78d10864a8a09579154bf282c1a93
                <label>Send To</label>
                <input type="email" class="form-control" v-model="newMail.adress" aria-describedby="email-adress" placeholder="Adress">
            </div>-->
            <div class="form-group">
<<<<<<< HEAD
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
=======
                <label>Subject</label>
                <input type="text" class="form-control" v-model="newMail.subject"  aria-describedby="email-subject" placeholder="">
            </div>
            <div class="form-group">
                <label>Your Massage</label>
                <textarea class="form-control" v-model="newMail.body" rows="3"></textarea>
            </div>
            <div class="form-group">
                <label>Attach A File</label>
                <input type="file" class="form-control-file" v-on:change="newMail.files" aria-describedby="email-attach">
            </div>
            <button         
                type="submit"
                @click.prevent="isSubmitted = true; $emit('sendMail', newMail)"
                class="btn btn-primary">Send</button>

>>>>>>> 0bcda62398b78d10864a8a09579154bf282c1a93
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

    export default {
        data() {
            return {
                newMail :{
                    // adress:'',
                    subject : '',
                    body    : '',
                    files   : []
                },
                isSubmitted: false
            }
        }
    }



</script>

<style>

</style>
