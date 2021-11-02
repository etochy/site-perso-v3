<template>
  <div class="subjects-container">
    <title-page
      :title="$t('welcome.title')"
      :text="$t('welcome.text')"
      :subText="$t('welcome.subtext')"
    />
    <router-link
      to="/travels"
      class="subject-details hover"
    >
      <div class="side-detail image-background travel-background"></div>
      <div class="side-detail side-detail-text side-detail-text-grey">
        <h2>{{ $t("travels.title") }}</h2>
        <span>{{ $t("travels.desc") }}</span>
        <em>{{ $t("common.discover") }}</em>
      </div>
    </router-link>
    <router-link
      to="/video-games"
      class="subject-details hover"
    >
      <div class="side-detail side-detail-text side-detail-text-grey">
        <h2>{{ $t("videogame.title") }}</h2>
        <span>{{ $t("videogame.desc") }}</span>
        <em>{{ $t("common.discover") }}</em>
      </div>
      <div class="side-detail image-background video-game-background"></div>
    </router-link>
    <router-link
      to="/side-projects"
      class="subject-details hover"
    >
      <div class="side-detail image-background code-background"></div>
      <div class="side-detail side-detail-text side-detail-text-grey">
        <h2>{{ $t("sideproject.title") }}</h2>
        <span>{{ $t("sideproject.desc") }}</span>
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
