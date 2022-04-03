<template>
  <button
    class="button button-outline"
    @click="openPopup"
    :disabled="pseudo ? false : true"
  >
    Create
  </button>

  <form v-if="isOpen" class="popup medium">
    <fieldset>
      <label for="creatorField">Creator</label>
      <input
        type="text"
        placeholder="Createur"
        id="creatorField"
        disabled
        v-model="newRoom.creator"
      />
      <label for="nameField">Name</label>
      <input
        type="text"
        placeholder="Name"
        id="nameField"
        :model="newRoom.name"
      />
      <label for="nameField">Password</label>
      <input
        type="password"
        placeholder="Password"
        id="passwordField"
        :model="newRoom.password"
      />
      <label for="nameField">maxSize</label>
      <input
        type="number"
        placeholder="10"
        id="maxSizeField"
        :model="newRoom.maxSize"
      />
      <button class="button button-outline" @click="closePopup">Cancel</button>
      <button
        class="button button-outline"
        @click="createRoom"
        :disabled="isValid() ? false : true"
      >
        Create
      </button>
    </fieldset>
  </form>
</template>

<script>
export default {
  name: "CreateRoom",
  props: {
    pseudo: String,
  },
  data() {
    return {
      isOpen: false,
      newRoom: {
        creator: "",
        name: "",
        password: "",
        maxSize: 10,
      },
    };
  },
  methods: {
    isValid() {
      return (this.newRoom.name && this.newRoom.password && this.newRoom.maxSize >= 2 && this.newRoom.creator);
    },
    createRoom() {
      this.$emit("roomCreation", this.newRoom);
    },
    openPopup() {
      console.log("open");
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