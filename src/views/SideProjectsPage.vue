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
        <div v-if="index % 2 === 0" class="side-detail side-detail-text side-detail-text-grey">
          <h2>{{ $t(project.title) }}</h2>
          <span>{{ $t(project.text) }}</span>
          <em>{{ $t(project.date) }}</em>
        </div>
        <div
          v-if="index % 2 === 0"
          class="side-detail image-background "
          :style="`background-image: url(${project.image})`"
          :alt="project.title"
        />

        <div
          v-if="index % 2 === 1"
          class="side-detail image-background "
          :style="`background-image: url(${project.image})`"
        />
        <div v-if="index % 2 === 1" class="side-detail side-detail-text side-detail-text-grey">
          <h2>{{ $t(project.title) }}</h2>
          <span>{{ $t(project.text) }}</span>
          <em>{{ $t(project.date) }}</em>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TitlePage from "../components/TitlePage.vue";

export default {
  components: { TitlePage },
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
