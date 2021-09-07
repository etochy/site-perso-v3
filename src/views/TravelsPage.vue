<template>
  <div class="subjects-container">
    <title-page
      title="Travels"
      text="A quick view of my travels"
      background="photos/solo_travel_germany.jpeg"
    />
    <div v-for="(travel, index) in travels" :key="index">
      <div
        class="subject-details image-background "
        :style="`background-image: url(${travel.image})`"
      >
        <div v-if="index % 2 === 0" class="side-detail side-detail-text">
          <h2>{{ travel.place }}</h2>
          <span>{{ travel.text }}</span>
          <em>{{ travel.date }}</em>
        </div>
        <div v-if="index % 2 === 0" class="side-detail" :alt="travel.place" />

        <div v-if="index % 2 === 1" class="side-detail" />
        <div v-if="index % 2 === 1" class="side-detail side-detail-text">
          <h2>{{ travel.place }}</h2>
          <span>{{ travel.text }}</span>
          <em>{{ travel.date }}</em>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TitlePage from "../components/TitlePage.vue";

const LOREM =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

export default {
  components: { TitlePage },
  name: "TravelsPage",
  data() {
    return {
      travels: [
        {
          place: "Nord France",
          date: "Juillet 2021",
          text: "Tour du nord de la france, 3000km en 5 jours",
          image: "photos/nord-france.jpg",
        },
        {
          place: "Sud France",
          date: "Juillet 2020",
          text: "Tour du sud de la france, 5500km en 3 semaines",
          image: "photos/sud-france.jpg",
        },
        {
          place: "Indonésie",
          date: "Juillet 2019",
          text: LOREM,
          image: "photos/indonesie.jpg",
        },
        {
          place: "Malaisie",
          date: "Juin 2019",
          text: LOREM,
          image: "photos/malaisie.jpg",
        },
        {
          place: "Thailande",
          date: "Mai 2019",
          text: LOREM,
          image: "photos/thailande.jpg",
        },
        {
          place: "Laos",
          date: "Avril 2019",
          text: LOREM,
          image: "photos/laos.jpg",
        },
        {
          place: "Cambodge",
          date: "Mars 2019",
          text: LOREM,
          image: "photos/cambodge.jpg",
        },
        {
          place: "Vietnam",
          date: "Janvier - Fevrier 2019",
          text: LOREM,
          image: "photos/vietnam.jpg",
        },
        {
          place: "Nepal",
          date: "Novembre 2018",
          text: LOREM,
          image: "photos/nepal.jpg",
        },
        {
          place: "Inde",
          date: "Novembre - Decembre 2019",
          text: LOREM,
          image: "photos/inde.jpg",
        },
      ],
    };
  },
  methods: {},
};
</script>

<style scoped></style>
