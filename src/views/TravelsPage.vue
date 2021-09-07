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

export default {
  components: { TitlePage },
  name: "TravelsPage",
  data() {
    return {
      travels: [
        {
          place: "North of France",
          date: "July 2021",
          text: "Northern France tour, 3000km in 6 days",
          image: "photos/nord-france.jpg",
        },
        {
          place: "South of France",
          date: "July 2020",
          text: "Southern France tour, 5500km in 3 weeks",
          image: "photos/sud-france.jpg",
        },
        {
          place: "Indonesia",
          date: "July 2019",
          text: "End of an 1 year trip around Asia, Bali and Java",
          image: "photos/indonesie.jpg",
        },
        {
          place: "Malaisia",
          date: "June 2019",
          text: "1 month in malaisia with a week-end trip in Singapor",
          image: "photos/malaisie.jpg",
        },
        {
          place: "Thailand",
          date: "May 2019",
          text: "1 month in Thailand, from North to South with some island visit",
          image: "photos/thailande.jpg",
        },
        {
          place: "Laos",
          date: "April 2019",
          text: "One of my favorites places during this trip, 1 month from South to North",
          image: "photos/laos.jpg",
        },
        {
          place: "Cambodge",
          date: "March 2019",
          text: "One month from East to South then North, a flat but lovely country",
          image: "photos/cambodge.jpg",
        },
        {
          place: "Vietnam",
          date: "January - February 2019",
          text: "3 months to enjoy this awesome country, a backpack, a motor bike and it's a dream come true",
          image: "photos/vietnam.jpg",
        },
        {
          place: "Nepal",
          date: "November 2018",
          text: "Country in between of India and China, lots of mountains and hiking",
          image: "photos/nepal.jpg",
        },
        {
          place: "India",
          date: "November - December 2019",
          text: "First country of this one year trip, a cultural shock",
          image: "photos/inde.jpg",
        },
      ],
    };
  },
  methods: {},
};
</script>

<style scoped></style>
