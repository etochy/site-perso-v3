<template>
  <div class="subjects-container">
    <title-page
      title="Video Games"
      text="A quick view of my video games projects"
      subText="The goal of this projects is to experiment with Unreal engine and video games creation"
      background="photos/video-games.jpg"
    />
    <div v-for="(game, index) in games" :key="index">
      <div
        class="subject-details image-background "
        :style="`background-image: url(${game.image})`"
      >
        <div v-if="index % 2 === 0" class="side-detail side-detail-text">
          <h2>{{ game.title }}</h2>
          <span>{{ game.text }}</span>
          <em>{{ game.date }}</em>
        </div>
        <div v-if="index % 2 === 0" class="side-detail" :alt="game.title" />

        <div v-if="index % 2 === 1" class="side-detail" />
        <div v-if="index % 2 === 1" class="side-detail side-detail-text">
          <h2>{{ game.title }}</h2>
          <span>{{ game.text }}</span>
          <em>{{ game.date }}</em>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TitlePage from "../components/TitlePage.vue";

export default {
  components: { TitlePage },
  name: "VideoGamesPage",
  data() {
    return {
      games: [
        {
          title: "Game 3",
          date: "2019",
          text: "A third person shooter with simple IA and simple map",
          image: "photos/nord-france.jpg",
        },
        {
          title: "Game 2",
          date: "2019",
          text: "A first person shooter with simple IA and very basic map, the goal is to reach a point in the map without dying",
          image: "photos/nord-france.jpg",
        },
        {
          title: "Game 1",
          date: "2019",
          text: "A third person action game playable from 1 to 4 in split screen with configurable difficulty, the goal is to survive",
          image: "photos/nord-france.jpg",
        },
      ],
    };
  },
  methods: {},
};
</script>

<style scoped></style>
