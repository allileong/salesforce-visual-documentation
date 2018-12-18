<template>
  <div id="app">
    <div id="sidebar">
      <SideBarItem v-bind:store="store" itemName="CLI"/>
      <SideBarItem v-bind:store="store" itemName="Replay Debugger"/>
      <SideBarItem v-bind:store="store" itemName="Apex LSP"/>
    </div>
    <div id="content">
      <div>{{store.name}}</div>
      <img alt="Vue logo" src="./assets/logo.png">
      <HelloWorld v-bind:store="store" msg="Welcome to Your Vue.js App"/>
    </div>
    
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import SideBarItem from './components/SideBarItem.vue'

export default {
  name: 'app',
  components: {
    HelloWorld,
    SideBarItem
  },
  data: function() {
    return {
      store: {
        name: 'foo'
      }
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
