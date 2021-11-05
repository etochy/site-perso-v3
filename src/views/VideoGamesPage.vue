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
        exact-path
        v-if="game.intern"
      >
        <tuile
          :title="$t(game.title)"
          :text="$t(game.text)"
          :subText="$t(game.date)"
          :image="game.image"
          :index="index"
        />
      </router-link>
      <a
        :href="game.href"
        class="subject-details hover"
        v-else
      >
        <tuile
          :title="$t(game.title)"
          :text="$t(game.text)"
          :subText="$t(game.date)"
          :image="game.image"
          :index="index"
        />
      </a>
    </div>
  </div>
</template>

<script>
import TitlePage from "../components/TitlePage.vue";
import Tuile from "../components/Tuile.vue";

export default {
  components: { TitlePage, Tuile },
  name: "VideoGamesPage",
  data() {
    return {
      games: [
        {
          title: "videogame.game5.title",
          date: "videogame.game5.subtext",
          text: "videogame.game5.text",
          image: "games/bombe-escape/bombe-escape.png",
          href:
            "https://etochy.github.io/games-js/bombeEscape/bombeEscape.html",
          intern: false,
        },
        {
          title: "videogame.game4.title",
          date: "videogame.game4.subtext",
          text: "videogame.game4.text",
          image: "games/astero/asteroidTexture.jpg",
          href: "/video-games/astero-game",
          intern: true,
        },
        {
          title: "videogame.game3.title",
          date: "videogame.game3.subtext",
          text: "videogame.game3.text",
          image: "photos/nord-france.jpg",
          href: "",
          intern: false,
        },
        {
          title: "videogame.game2.title",
          date: "videogame.game2.subtext",
          text: "videogame.game2.text",
          image: "photos/nord-france.jpg",
          href: "",
          intern: false,
        },
        {
          title: "videogame.game1.title",
          date: "videogame.game1.subtext",
          text: "videogame.game1.text",
          image: "photos/nord-france.jpg",
          href: "",
          intern: false,
        },
      ],
    };
  },
  methods: {},
};
</script>

<style scoped></style>
