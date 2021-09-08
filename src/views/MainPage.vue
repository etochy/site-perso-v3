<template>
  <div class="subjects-container">
    <title-page
      :title="$t('welcome.title')"
      :text="$t('welcome.text')"
      :subText="$t('welcome.subtext')"
    />
    <router-link
      to="/travels"
      class="subject-details image-background travel-background"
    >
      <div class="side-detail"></div>
      <div class="side-detail side-detail-text">
        <h2>{{ $t("travels.title") }}</h2>
        <span>{{ $t("travels.desc") }}</span>
        <em>{{ $t("common.discover") }}</em>
      </div>
    </router-link>
    <router-link
      to="/video-games"
      class="subject-details image-background video-game-background"
    >
      <div class="side-detail side-detail-text">
        <h2>{{ $t("videogame.title") }}</h2>
        <span>{{ $t("videogame.desc") }}</span>
        <em>{{ $t("common.discover") }}</em>
      </div>
      <div class="side-detail"></div>
    </router-link>
    <router-link
      to="/side-projects"
      class="subject-details image-background code-background"
    >
      <div class="side-detail"></div>
      <div class="side-detail side-detail-text">
        <h2>Side projects</h2>
        <span>Work in progress on several side projects</span>
        <em>{{ $t("common.discover") }}</em>
      </div>
    </router-link>
  </div>
</template>

<script>
import TitlePage from "../components/TitlePage.vue";
export default {
  components: { TitlePage },
  name: "MainPage",
  title: "Welcome",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.subject-details {
  background-blend-mode: luminosity;
}

.subject-details:hover {
  background-blend-mode: unset;
}

.travel-background {
  background-image: url("/photos/solo_travel_germany.jpeg");
}
.video-game-background {
  background-image: url("/photos/video-games.jpg");
}
.code-background {
  background-image: url("/photos/code.jpg");
}
</style>
