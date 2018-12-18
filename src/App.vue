<template>
  <div id="app">
    <div id="side-bar">
      <SideBar v-bind:store="store" v-bind:sideBarItems="sideBarItems"/>
    </div>
    <div id="content">
      <ContentSection v-bind:store="store"/>
    </div>
    
  </div>
</template>

<script>
import ContentSection from './components/ContentSection.vue'
import SideBar from './components/SideBar.vue'

export default {
  name: 'app',
  components: {
    ContentSection,
    SideBar
  },
  data: function() {
    return {
      store: {
        name: 'foo'
      },
      sideBarItems: ['CLI', 'Replay Debugger', 'Apex']
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  display: flex;
  justify-content: center;
  border: red 1px solid;
}

#sidebar {
  height:100%;
  width: 160px;
  border: black solid 1px;
}
</style>
