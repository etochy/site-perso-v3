<template>
  <div class="subjects-container">
    <title-page
      :title="$t('travels.title')"
      :text="$t('travels.text')"
      background="photos/solo_travel_germany.jpeg"
    />
    <div v-for="(travel, index) in travels" :key="index">
      <router-link
        :to="'/travels/pictures?folder=' + travel.folder"
        class="subject-details hover"
        exact-path
      >
        <tuile
          :title="$t(travel.place)"
          :text="$t(travel.text)"
          :subText="$t(travel.date)"
          :image="travel.image"
          :index="index"
        />
      </router-link>
    </div>
  </div>
</template>

<script>
import TitlePage from "../components/TitlePage.vue";
import Tuile from "../components/Tuile.vue";

export default {
  components: { TitlePage, Tuile },
  name: "TravelsPage",
  data() {
    return {
      folder: "",
      travels: [
        {
          place: "travels.northfrance.title",
          date: "travels.northfrance.subtext",
          text: "travels.northfrance.text",
          image: "photos/nord-france.jpg",
          folder: "north_france",
        },
        {
          place: "travels.southfrance.title",
          date: "travels.southfrance.subtext",
          text: "travels.southfrance.text",
          image: "photos/sud-france.jpg",
          folder: "south_france",
        },
        {
          place: "travels.indonesia.title",
          date: "travels.indonesia.subtext",
          text: "travels.indonesia.text",
          image: "photos/indonesie.jpg",
          folder: "indonesia",
        },
        {
          place: "travels.malaysia.title",
          date: "travels.malaysia.subtext",
          text: "travels.malaysia.text",
          image: "photos/malaisie.jpg",
          folder: "malaysia",
        },
        {
          place: "travels.thailand.title",
          date: "travels.thailand.subtext",
          text: "travels.thailand.text",
          image: "photos/thailande.jpg",
          folder: "thailand",
        },
        {
          place: "travels.laos.title",
          date: "travels.laos.subtext",
          text: "travels.laos.text",
          image: "photos/laos.jpg",
          folder: "laos",
        },
        {
          place: "travels.cambodia.title",
          date: "travels.cambodia.subtext",
          text: "travels.cambodia.text",
          image: "photos/cambodge.jpg",
          folder: "cambodia",
        },
        {
          place: "travels.vietnam.title",
          date: "travels.vietnam.subtext",
          text: "travels.vietnam.text",
          image: "photos/vietnam.jpg",
          folder: "vietnam",
        },
        {
          place: "travels.nepal.title",
          date: "travels.nepal.subtext",
          text: "travels.nepal.text",
          image: "photos/nepal.jpg",
          folder: "nepal",
        },
        {
          place: "travels.india.title",
          date: "travels.india.subtext",
          text: "travels.india.text",
          image: "photos/inde.jpg",
          folder: "india",
        },
      ],
    };
  },
  methods: {},
};
</script>

<style scoped></style>
