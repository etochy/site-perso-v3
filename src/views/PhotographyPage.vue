<template>
  <div class="subjects-container">
    <title-page
      :title="$t('photography.title')"
      :text="$t('photography.text')"
      background="photos/photography.jpg"
    />
    <div v-for="(theme, index) in themes" :key="index">
      <router-link
        :to="'/photography/pictures?folder=' + theme.folder"
        class="subject-details hover"
        exact-path
      >
        <tuile
          :title="$t(theme.title)"
          :text="$t(theme.text)"
          :subText="$t(theme.subtext)"
          :image="theme.image"
          :index="index"
        />
      </router-link>
    </div>
  </div>
</template>

<script>
import TitlePage from "../components/TitlePage.vue";
import Tuile from "../components/Tuile.vue";

export default {
  components: { TitlePage, Tuile },
  name: "PhotographyPage",
  data() {
    return {
      folder: "",
      themes: [
        {
          title: "themes.landscape.title",
          subtext: "themes.landscape.subtext",
          text: "themes.landscape.text",
          image: "photos/landscape.jpg",
          folder: "landscapes",
        },
        {
          title: "themes.macro.title",
          subtext: "themes.macro.subtext",
          text: "themes.macro.text",
          image: "photos/photography.jpg",
          folder: "macro",
        },
        {
          title: "themes.animals.title",
          subtext: "themes.animals.subtext",
          text: "themes.animals.text",
          image: "photos/animal.jpg",
          folder: "animals",
        },
        {
          title: "themes.others.title",
          subtext: "themes.others.subtext",
          text: "themes.others.text",
          image: "photos/other.jpg",
          folder: "others",
        },
      ],
    };
  },
  methods: {},
};
</script>

<style scoped></style>
