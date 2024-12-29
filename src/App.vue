<template>
  <router-view />
</template>

<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
} */
:root {
  --gradient-logincontainer-primary: linear-gradient(
    to top left,
    #d1d1d1,
    #dddddd
  );
  --gradient-right-cont-primary: linear-gradient(to top left, #6b7bd8, #a674ce);
}
nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
