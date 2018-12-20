<template>
  <div class="side-bar-item">
    <div v-on:click="setStoreName">{{ itemName }}</div>
  </div>
</template>

<script>
export default {
  name: 'SideBarItem',
  props: {
    itemName: String,
    store: Object
  },
  methods: {
    setStoreName: function() {
      // eslint-disable-next-line no-console
      console.log('store is: ', this.store);
      // eslint-disable-next-line no-console
      console.log('itemName is: ' + this.itemName);
      this.store.name = this.itemName;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.side-bar-item {
  border: green solid 1px;
}
</style>
