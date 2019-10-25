<template>
  <div id="app">
  
    <router-view/>
  </div>
</template>

<style lang="scss">
#app {
  font-size: 1.2em;
	font-family: spinnaker,'Varela Round', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  
}
*{
    margin: 0;
    padding: 0;
    border: 0;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #000000;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
