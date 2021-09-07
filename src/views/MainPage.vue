<template>
  <div class="subjects-container">
    <title-page
      title="Hello World"
      text="A Website without anything really important"
      subText="Made by the AMAZING Esteban Launay"
    />
    <router-link
      to="/travels"
      class="subject-details image-background travel-background"
    >
      <div class="side-detail"></div>
      <div class="side-detail side-detail-text">
        <h2>Travels</h2>
        <span>Love to travel</span>
        <em>Click to discover them</em>
      </div>
    </router-link>
    <div class="subject-details image-background video-game-background">
      <div class="side-detail side-detail-text">
        <h2>Video games</h2>
        <span>Couples of video games experimentation</span>
        <em>Click to discover them</em>
      </div>
      <div class="side-detail"></div>
    </div>
    <div class="subject-details image-background code-background">
      <div class="side-detail"></div>
      <div class="side-detail side-detail-text">
        <h2>Side projects</h2>
        <span>Work in progress on several side projects</span>
        <em>Click to discover them</em>
      </div>
    </div>
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
