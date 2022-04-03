<template>
  <button
    class="button button-outline color-primary"
    @click="openPopup"
    :disabled="pseudo ? false : true"
  >
    {{ $t("boardgame.tab.create") }}
  </button>

  <div v-if="isOpen" class="popup medium">
    <fieldset class="subjects-container create-form">
      <label for="creatorField">{{ $t("boardgame.tab.creator") }}</label>
      <input
        type="text"
        :placeholder="$t('boardgame.tab.creator')"
        id="creatorField"
        disabled
        v-model="newRoom.creator"
      />
      <label for="nameField">{{ $t("boardgame.tab.name") }}</label>
      <input
        type="text"
        :placeholder="$t('boardgame.tab.name')"
        id="nameField"
        v-model="newRoom.name"
        required
      />
      <label for="passwordField">{{ $t("boardgame.tab.password") }}</label>
      <input
        type="password"
        :placeholder="$t('boardgame.tab.password')"
        id="passwordField"
        v-model="newRoom.password"
        required
      />
      <label for="maxSizeField">{{ $t("boardgame.tab.maxSize") }}</label>
      <input
        type="number"
        :placeholder="$t('boardgame.tab.maxSize')"
        id="maxSizeField"
        v-model="newRoom.maxSize"
        required
      />
      <div class="validation-buttons">
        <button
          class="button button-outline color-secondary"
          @click="closePopup"
        >
          {{ $t("common.cancel") }}
        </button>
        <button class="button button-outline color-primary" @click="createRoom">
          {{ $t("common.validate") }}
        </button>
      </div>
      <p class="secondary-text" v-if="error">
        {{ $t("boardgame.tab.create.error") }}
      </p>
    </fieldset>
  </div>
</template>

<script>
export default {
  name: "CreateRoom",
  props: {
    pseudo: String,
  },
  data() {
    return {
      error: false,
      isOpen: false,
      newRoom: {
        creator: "",
        name: "",
        password: "",
        maxSize: 10,
      },
    };
  },
  emits: ['room-creation'],
  methods: {
    isValid() {
      if (
        this.newRoom.name &&
        this.newRoom.password &&
        this.newRoom.maxSize >= 2 &&
        this.newRoom.creator
      )
        return true;
      else return false;
    },
    createRoom() {
      console.log(this.isValid());
      if (!this.isValid()) {
        this.error = true;
        console.log("ko");
      } else {
        this.error = false;
        this.$emit("room-creation", this.newRoom);
        this.closePopup();
      }
    },
    openPopup() {
      console.log("open");
      this.error = false;
      this.newRoom.creator = this.pseudo;
      console.log(this.pseudo);
      console.log(this.newRoom.creator);
      this.isOpen = true;
    },
    closePopup() {
      this.isOpen = false;
      this.newRoom = {
        creator: this.pseudo,
        name: "",
        password: "",
        maxSize: 10,
      };
    },
  },
};
</script>
<style scoped>
.create-form {
  align-items: start;
}
.validation-buttons {
  display: flex;
  flex-flow: row wrap;
  width: 100%;
  justify-content: flex-end;
}
.button {
  margin-left: 10px;
}
</style>