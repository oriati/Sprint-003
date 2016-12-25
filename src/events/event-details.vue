<template>
    <section v-if="event">
        <div class="event__title">
            <h1>{{event.name}}</h1>
            <div class="details">{{event.status}} | {{event.time | fullDate}}</div>
        </div>
        <div class="event__desc" v-html="event.description">
            
        </div>
    </section>
</template>

<script>
    import moment from "moment";
    export default {
        data() {
            return {
                event: null
            }
        },
        methods: {
            loadEvent(eventId) {
                this.$http.get(`event/${eventId}`)
                    .then(res => res.json())
                    .then(event => this.event = event);
            }
        },
        filters: {
            fullDate: function (date) {
                return moment(date).format('MMMM Do YYYY, h:mm a');
            }
        },
        created() {    
             const eventId = this.$route.params.id
             this.loadEvent(eventId);          
        }
    }

</script>

<style scoped>

</style>