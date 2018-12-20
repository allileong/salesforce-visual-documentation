<template>
  <ul id="side-bar">
    <li v-for="item in sideBarItems" v-bind:key="item">
      <SideBarItem v-bind:store="store" v-bind:itemName="item" />
    </li>
  </ul>
</template>

<script>
import SideBarItem from './SideBarItem.vue';
export default {
  name: 'SideBar',
  components: {
    SideBarItem
  },
  props: {
    sideBarItems: Array,
    store: Object
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
ul {
  list-style-type: none;
}
</style>
