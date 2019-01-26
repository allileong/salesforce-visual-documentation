<template>
  <div id="app">
    <div id="left" class="column">
      <div class="top-left"><h3>Salesforce Extensions</h3></div>
      <div class="bottom">
        <div id="side-bar">
          <SideBar v-bind:store="store" v-bind:sideBarItems="sideBarItems" />
        </div>
      </div>
    </div>
    <div id="right" class="column">
      <div class="top-right"></div>
      <div class="bottom">
        <div id="content"><ContentSection v-bind:store="store" /></div>
      </div>
    </div>
  </div>
</template>

<script>
import ContentSection from './components/ContentSection.vue';
import SideBar from './components/SideBar.vue';
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
    };
  }
};
</script>

<style>
html {
  height: 100%;
}

body {
  height: 100%;
  overflow: hidden; /*makes the body non-scrollable (we will add scrolling to the sidebar and main content containers)*/
  margin: 0px; /*removes default style*/
  display: flex; /*enables flex content for its children*/
  box-sizing: border-box;
  border: blue solid 10px;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
  display: flex;
  justify-content: center;
}

.column {
  height: 100%; /*allows both columns to span the full height of the browser window*/
  display: flex;
  flex-direction: column; /*places the left and right headers above the bottom content*/
  border: orange solid 2px;
}

#left {
  flex-shrink: 0; /*makes sure that content is not cut off in a smaller browser window*/
}

#right {
  border: green dotted 3px;
}

.top-left {
  flex-shrink: 0;
  border: green solid 3px;
}

.top-right {
  flex-shrink: 0;
  display: inline-flex;
}

ul {
  display: inline-flex;
  list-style: none;
}

.bottom {
  flex-grow: 1; /*ensures that the container will take up the full height of the parent container*/
  overflow-y: auto; /*adds scroll to this container*/
}
</style>
