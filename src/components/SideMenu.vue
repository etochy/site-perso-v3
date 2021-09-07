<template>
    <!-- v-click-outside="closeMenu" -->
  <div
    class="links-container"
    v-for="link in links"
    :key="link.label"
    @click="closeMenu"
  >
    <router-link class="menu-link" :to="link.redirect">{{
      link.label
    }}</router-link>
  </div>
</template>

<script>


// const clickOutside = {
//   mounted: (el, binding) => {
//     event = el.clickOutsideEvent;
//     el.clickOutsideEvent = event => {
//       // here I check that click was outside the el and his children
//       if (!(el == event.target || el.contains(event.target))) {
//         // and if it did, call method provided in attribute value
//         binding.value();
//       }
//     };
//     setTimeout(() => {
//       document.addEventListener("click", el.clickOutsideEvent);
//     }, 500);
//   },
//   unmounted: el => {
//     document.removeEventListener("click", el.clickOutsideEvent);
//   },
// };

export default {
  name: "SideMenu",
  components: {},
  data() {
    return {
      links: [
        { label: "Main menu", redirect: "/" },
        { label: "Video games", redirect: "/video-games" },
        { label: "Travels", redirect: "/travels" },
        { label: "Side projects", redirect: "/side-projects" },
      ],
    };
  },
  props: {
    closeMenu: Function,
  },
  methods: {
  },
  // directives: {
  //   "click-outside": clickOutside,
  // },
};

</script>

<style scoped>
.links-container {
  display: flex;
  flex-direction: column;
  background-color: rgba(0, 0, 0, 0.233);
  padding: 0.5em;
}

.menu-link {
  width: 100%;
  height: 100%;
}

.menu-link:hover {
  opacity: 0.5;
}
</style>
