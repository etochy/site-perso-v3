<template>
  <nav-bar></nav-bar>
  <router-view />
</template>

<script>
import NavBar from "./components/NavBar.vue";
export default {
  components: { NavBar },
};
</script>

<style >

body {
  margin: 0px;
}

@import "./assets/customStyles.css";

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

a {
  color: inherit;
}

.subjects-container {
  display: flex;
  flex-direction: column;
}
.subject-details {
  display: flex;
  flex-direction: row;
  flex: 1;
  min-height: 20em;
}

.side-detail {
  flex: 1;
}

.side-detail-text {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #0000006b;
  color: white;
}

.title-background {
  min-height: 15em;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.image-background {
  background-color: white;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}
</style>
