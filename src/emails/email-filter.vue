<template>
    <section>
        <input type="text" v-model="filterText">
    </section>
</template>

<script>
    export default {
        props : {
            emails: {
            required: true,
            type: Array
            }
        },
        data (){
            return {
                filterText: '',
                

            }
        },
        computed : {
            // test () {
            // return this.filterText},
            filteredMails () { 
                const regex = new RegExp(this.filterText, 'i');
                return this.emails.filter(mail => mail.subject.match(regex) || mail.body.match(regex));
            }
        }
    }

</script>

<style>

</style>