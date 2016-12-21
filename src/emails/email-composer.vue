<template>
    <section>
        <form>
            <div class="form-group">
                <label for="adress">Send To</label>
                <input type="email" class="form-control" id="adress" aria-describedby="email-adress" placeholder="Adress">
            </div>
            <div class="form-group">
                <label for="subject">Subject</label>
                <input type="text" class="form-control" id="subject" aria-describedby="email-subject" placeholder="">
            </div>
            <div class="form-group">
                <label for="body">Your Massage</label>
                <textarea class="form-control" id="body" rows="3"></textarea>
            </div>
            <div class="form-group">
                <label for="Attachments">Attach A File</label>
                <input type="file" class="form-control-file" id="Attachments" aria-describedby="email-attach">
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
        </form>
    </section>

</template>

<script>

</script>

<style>

</style>
