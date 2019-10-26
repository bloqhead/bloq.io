<template>
  <div>
    <fa :icon="[ 'fa', 'clock' ]" />&nbsp;
    <time :datetime="date" v-html="readableDate(date)" />
  </div>
</template>

<script>
export default {
  props: {
    date: {
      type: String,
      required: true
    }
  },
  methods: {
    readableDate(value) {
      let newDate = new Date(value).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric"
      });

      return newDate;
    }
  }
};
</script>

