<template>
  <div class="subjects-container">
    <title-page
      :title="$t('sideproject.title')"
      :text="$t('sideproject.text')"
      :subText="$t('sideproject.subtext')"
      background="photos/code.jpg"
    />
    <div v-for="(project, index) in projects" :key="index">
      <div class="subject-details">
        <tuile
          :title="$t(project.title)"
          :text="$t(project.text)"
          :subText="$t(project.date)"
          :image="project.image"
          :index="index"
        />
      </div> 
    </div>
  </div>
</template>

<script>
import TitlePage from "../components/TitlePage.vue";
import Tuile from "../components/Tuile.vue";

export default {
  components: { TitlePage, Tuile },
  name: "SideProjectsPage",
  data() {
    return {
      projects: [
        {
          title: "sideproject.website.title",
          date: "sideproject.website.subtext",
          text: "sideproject.website.text",
          image: "photos/website.jpg",
        },
        {
          title: "sideproject.vps.title",
          date: "sideproject.vps.subtext",
          text: "sideproject.vps.text",
          image: "photos/vps.jpg",
        },
      ],
    };
  },
  methods: {},
};
</script>

<style scoped></style>
