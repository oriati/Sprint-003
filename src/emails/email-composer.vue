<template>
    <section>
        <form>
            <!--<div class="form-group">
                <label>Send To</label>
                <input type="email" class="form-control" v-model="newMail.adress" aria-describedby="email-adress" placeholder="Adress">
            </div>-->
            <div class="form-group">
                <label>Subject</label>
                <input type="text" class="form-control" v-model="newMail.subject"  aria-describedby="email-subject" placeholder="">
            </div>
            <div class="form-group">
                <label>Your Massage</label>
                <textarea class="form-control" v-model="newMail.body" rows="3"></textarea>
            </div>
            <!--<div class="form-group">
                <label>Attach A File</label>
                <input type="file" class="form-control-file" v-on:change="newMail.files" aria-describedby="email-attach">
            </div>-->
            <button         
                type="submit"
                @click.prevent="isSubmitted = true; $emit('sendMail', newMail)"
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
