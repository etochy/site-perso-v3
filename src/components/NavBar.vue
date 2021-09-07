<template>
  <div class="nav-bar">
    <router-link to="/">
      <h4 class="title-nav-bar">Launay-Esteban</h4>
    </router-link>
    <!-- <button
      class="button button-outline button-round color-primary "
      @click="toggleMenu"
    >
      <menu-logo class="basic-icon" />
    </button> -->
  </div>
  <!-- <div v-if="openMenu" class="menu-container">
    <side-menu :closeMenu="closeMenu" />
  </div> -->
</template>

<script>
// import MenuLogo from "@/assets/menu-logo.svg?inline";
// import SideMenu from "./SideMenu.vue";

export default {
  name: "NavBar",
  components: {
    // MenuLogo,
    // SideMenu,
  },
  data() {
    return {
      // openMenu: false,
    };
  },
  methods: {
    // toggleMenu() {
    //   this.openMenu = !this.openMenu;
    // },
    // closeMenu() {
    //   this.openMenu = false;
    // },
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

/* .menu-container {
  position: absolute;
  right: 0px;
  top: 3em;
} */
</style>
