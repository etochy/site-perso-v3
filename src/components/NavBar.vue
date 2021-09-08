<template>
  <div class="nav-bar">
    <router-link to="/">
      <h4 class="title-nav-bar">Launay-Esteban</h4>
    </router-link>
    <change-lang />
  </div>
</template>

<script>
import ChangeLang from "./ChangeLang.vue";

export default {
  name: "NavBar",
  components: {
    ChangeLang,
  },
  data() {
    return {
    };
  },
  methods: {
  },
};
</script>

<style scoped>
.nav-bar {
  background-color: var(--primary-color);
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 5px;
  color: white;
}

.title-nav-bar {
  margin: 0;
}
</style>
