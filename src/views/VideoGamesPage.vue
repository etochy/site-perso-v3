<template>
  <div class="subjects-container">
    <title-page
      :title="$t('videogame.title')"
      :text="$t('videogame.text')"
      :subText="$t('videogame.subtext')"
      background="photos/video-games.jpg"
    />
    <div v-for="(game, index) in games" :key="index">
      <router-link
        :to="game.href"
        :active="game.href !== ''"
        class="subject-details hover"
      >
        <div v-if="index % 2 === 0" class="side-detail">
          <div class="side-detail-text side-detail-text-grey">
            <h2>{{ $t(game.title) }}</h2>
            <span>{{ $t(game.text) }}</span>
            <em>{{ $t(game.date) }}</em>
          </div>
        </div>
        <div
          v-if="index % 2 === 0"
          :style="`background-image: url(${game.image})`"
          class="side-detail image-background"
          :alt="game.title"
        />

        <div
          v-if="index % 2 === 1"
          class="side-detail image-background"
          :style="`background-image: url(${game.image})`"
        />
        <div v-if="index % 2 === 1" class="side-detail">
          <div class="side-detail-text side-detail-text-grey">
            <h2>{{ $t(game.title) }}</h2>
            <span>{{ $t(game.text) }}</span>
            <em>{{ $t(game.date) }}</em>
          </div>
        </div>
      </router-link>
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
          title: "videogame.game4.title",
          date: "videogame.game4.subtext",
          text: "videogame.game4.text",
          image: "games/astero/asteroidTexture.jpg",
          href: "/video-games/astero-game",
        },
        {
          title: "videogame.game3.title",
          date: "videogame.game3.subtext",
          text: "videogame.game3.text",
          image: "photos/nord-france.jpg",
          href: "",
        },
        {
          title: "videogame.game2.title",
          date: "videogame.game2.subtext",
          text: "videogame.game2.text",
          image: "photos/nord-france.jpg",
          href: "",
        },
        {
          title: "videogame.game1.title",
          date: "videogame.game1.subtext",
          text: "videogame.game1.text",
          image: "photos/nord-france.jpg",
          href: "",
        },
      ],
    };
  },
  methods: {},
};
</script>

<style scoped>
.image-background {
}

.side-detail-text {
  height: 100%;
  width: 100%;
}
</style>
