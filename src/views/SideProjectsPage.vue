<template>
  <div class="subjects-container">
    <title-page
      title="Side Projects"
      text="A quick view of my side projects"
      subText="https://github.com/etochy"
      background="photos/code.jpg"
    />
    <div v-for="(project, index) in projects" :key="index">
      <div
        class="subject-details image-background "
        :style="`background-image: url(${project.image})`"
      >
        <div v-if="index % 2 === 0" class="side-detail side-detail-text">
          <h2>{{ project.title }}</h2>
          <span>{{ project.text }}</span>
          <em>{{ project.date }}</em>
        </div>
        <div v-if="index % 2 === 0" class="side-detail" :alt="project.title" />

        <div v-if="index % 2 === 1" class="side-detail" />
        <div v-if="index % 2 === 1" class="side-detail side-detail-text">
          <h2>{{ project.title }}</h2>
          <span>{{ project.text }}</span>
          <em>{{ project.date }}</em>
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
          title: "Website",
          date: "2018 - 2021",
          text: "This Website is in constant evolution, from VueJs2 in 2018 then Angular in 2019 and now VueJs3",
          image: "photos/website.jpg",
        },
        {
          title: "Personnal VPS",
          date: "2021",
          text: "Hosting my Website and some others projects on a VPS provided by OVH, keeps me in touch with systems administration",
          image: "photos/vps.jpg",
        },
      ],
    };
  },
  methods: {},
};
</script>

<style scoped></style>
