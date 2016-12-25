<template>
    <section>
        <form>
            <div class="form-group">
                <label>Name</label>
                <input type="text" name="name" v-model="event.name"  aria-describedby="email subject" placeholder="Event Name">
            </div>
            <div class="form-group">
                <label>Status</label>
                <select name="status" id="" v-model="event.status"  aria-describedby="event status">
                    <option value="Pending">Pending</option>
                    <option value="Upcoming">Upcoming</option>
                    <option value="Past Event">Past Event</option>
                </select>
            </div>
            <!--<div class="form-group">
                <label>Date</label>
                <input type="date" class="form-control" v-model="event.date"  aria-describedby="email-subject" placeholder="">
            </div>-->
            <div class="form-group">
                <label>Description</label>
                <textarea class="form-control" v-model="event.desc" rows="3"></textarea>
            </div>
            <button type="submit" @click.prevent="save">Send</button>

        </form>
    </section>

</template>

<script>
    export default {
        data() {
            return {
                event: {name: '', status: '', time: 1482336000000, desc: []},
                dataSaved: false
            }
        },
        computed:{
            eventToEdit() {
                let obj = Object.assign({}, this.event);
                return obj;
            }
        },
        methods: {

            save() {              
                if (this.event.id) {
                    this.$http.put('event', this.eventToEdit)
                    .then(res => {
                        console.log('res update = ', res);
                        return res.json()
                        // res.text();
                    })
                    .then((event) => {
                        this.dataSaved = true;
                        console.log('saved update!' , this.dataSaved);
                        this.$router.push('/event');
                    })
                } else {
                    console.log('trying to save');
                    this.$http.post('event', this.eventToEdit)
                    .then(res => {
                        console.log('res = ', res);
                        return res.json()
                        // res.text();
                    })
                    .then((event) => {
                        this.dataSaved = true;
                        console.log('saved!' , this.dataSaved);
                        this.$router.push('/event');
                    })
                }

            },
            loadEvent(eventId) {
                this.$http.get(`event/${eventId}`)
                    .then(res => res.json())
                    .then(event => this.event = event);
            }
        },
        created() {
             const eventId = this.$route.params.id
             if (eventId)    this.loadEvent(eventId);
        }
    }



</script>

<style>

</style>
