<template>
  <div class="hello">
    <h1>{{ store.name }}</h1>
  </div>
</template>

<script>
export default {
  name: 'ContentSection',
  props: {
    store: Object
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
