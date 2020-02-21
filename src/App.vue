<template>
  <div id="app"> 
  <md-toolbar class="md-accent" md-elevation="1">
    <h3 class="md-title" style="flex: 1">Lord of the Ring Mercato</h3>
    <md-button to="equipe">Mon Equipe</md-button>
    <md-button to="/" class="md-icon-button">
        <md-icon>home</md-icon>
    </md-button>
  </md-toolbar>
  <router-view/>
  </div>
</template>

<script>
  export default {
    name: 'App'
  }
</script>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
</style>
