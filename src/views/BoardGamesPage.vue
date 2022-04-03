<template>
  <div class="subjects-container">
    <title-page
      :title="$t('boardgame.title')"
      :text="$t('boardgame.text')"
      background="photos/boardGame.jpg"
    />
    <div>
      <input type="text" placeholder="Pseudo" id="nameField" v-model="pseudo"/>
    </div>
    <create-room :pseudo="pseudo" />
    <div>
      <table>
        <thead>
          <tr>
            <th>{{ $t("boardgame.tab.creator") }}</th>
            <th>{{ $t("boardgame.tab.name") }}</th>
            <th>{{ $t("boardgame.tab.currentSize") }}</th>
            <th>{{ $t("boardgame.tab.maxSize") }}</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(room, index) in rooms" :key="index">
            <th>{{ room.creator }}</th>
            <th>{{ room.name }}</th>
            <th>{{ room.currentSize }}</th>
            <th>{{ room.maxSize }}</th>
            <th>
              <input
                class="button button-clear"
                :value="$t('boardgame.tab.join')"
                :disabled="pseudo ? false : true"
              />
            </th>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
import TitlePage from "../components/TitlePage.vue";
import CreateRoom from "../components/CreateRoom.vue";
import { getRooms } from "../services/BoardGameServices";

export default {
  components: { TitlePage, CreateRoom },
  name: "BoardGamesPage",
  data() {
    return {
      pseudo: "",
      rooms: [],
    };
  },
  methods: {
    init() {
      getRooms().then((resp) => {
        this.rooms = resp.data;
      });
    },

  },
  mounted() {
    this.init();
  },
};
</script>
<style scoped>
</style>