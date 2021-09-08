<template>
  <div class="subjects-container">
    <title-page
      :title="$t('videogame.title')"
      :text="$t('videogame.text')"
      :subText="$t('videogame.subtext')"
      background="photos/video-games.jpg"
    />
    <div v-for="(game, index) in games" :key="index">
      <div
        class="subject-details image-background "
        :style="`background-image: url(${game.image})`"
      >
        <div v-if="index % 2 === 0" class="side-detail side-detail-text">
          <h2>{{ $t(game.title) }}</h2>
          <span>{{ $t(game.text) }}</span>
          <em>{{ $t(game.date) }}</em>
        </div>
        <div v-if="index % 2 === 0" class="side-detail" :alt="game.title" />

        <div v-if="index % 2 === 1" class="side-detail" />
        <div v-if="index % 2 === 1" class="side-detail side-detail-text">
          <h2>{{ $t(game.title) }}</h2>
          <span>{{ $t(game.text) }}</span>
          <em>{{ $t(game.date) }}</em>
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
          title: "videogame.game3.title",
          date: "videogame.game3.subtext",
          text: "videogame.game3.text",
          image: "photos/nord-france.jpg",
        },
        {
          title: "videogame.game2.title",
          date: "videogame.game2.subtext",
          text: "videogame.game2.text",
          image: "photos/nord-france.jpg",
        },
        {
          title: "videogame.game1.title",
          date: "videogame.game1.subtext",
          text: "videogame.game1.text",
          image: "photos/nord-france.jpg",
        },
      ],
    };
  },
  methods: {},
};
</script>

<style scoped></style>
