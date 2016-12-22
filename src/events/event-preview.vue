<template>
  <article>
    <time datetime="2012-12-08">{{event.time | fullDate}}</time>
    <h2 class="event__title"> {{event.name}} </h2>
    <div class="event__description">{{trimedHtml}}
    </div>
  </article>
</template>

<script>
import moment from "moment";
export default {
  props: {
    event: {
      required: true,
      type: Object
    }
  },
  data () {
    return {
      trimedHtml : this.strip(this.event.description)
    }
  },
  methods: {
    strip(html) {
      var tmp = document.createElement("DIV");
      tmp.innerHTML = html;
      var plainText = tmp.textContent || tmp.innerText || "";
      return (plainText.length > 180) ? plainText.substr(0,180-1)+'...' : plainText;
    }
  },
  filters: {
    fullDate: function (date) {
      return moment(date).format('DD/MM YYYY');
    }
  }
}
</script>

<style scoped>

</style>