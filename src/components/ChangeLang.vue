<template>
  <div class="lang-container">
    <a class="lang-link" @click="changeLanguage('fr')">FR</a>
    <a class="lang-link" @click="changeLanguage('en')">EN</a>
  </div>
</template>

<script>
export default {
  name: "ChangeLang",
  components: {},
  data() {
    return {};
  },
  methods: {
    changeLanguage(locale) {
      this.$i18n.locale = locale;
      this.selectedLanguage = locale;
      this.isDropdownOpened = false;
    },
  },
};
</script>

<style scoped>
.lang-container {
  display: flex;
  flex-direction: row;
}
.lang-link {
  margin-right: .25em;
  margin-left: .25em;
}

.lang-link:hover {
  cursor: pointer;
}
</style>
