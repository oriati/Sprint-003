<template>
    <section>
        <input type="text" @keyup.enter="emitFilter" v-model.lazy="filter.subject">
    </section>
</template>

<script>
    export default {
        data (){
            return {
                filter: {subject: ''},
            }
        },
        methods: {
            emitFilter() {
                console.log('keypressed');
                this.$emit('filterChanged', this.filter);
            }
        }
    }

</script>

<style>

</style>