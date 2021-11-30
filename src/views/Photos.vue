<template>
  <div class="pictures-container">
    <img
      v-for="(picture, index) in pictures"
      :key="index"
      :src="url + folder + '/' + picture"
      class="picture"
    />
    <p v-if="pictures.length === 0">{{$t('common.nopictures')}}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      folder: "",
      url: "https://launay-esteban.ovh/public_files/pictures/",
      pictures: [],
    };
  },
  mounted() {
    this.folder = this.$route.query.folder;
    this.fetchPictures();
  },
  methods: {
    /**
     *  Fetch pictures url to display them
     *
     */
    fetchPictures() {
      fetch(
        `https://launay-esteban.ovh/public_files/pictures/${this.folder}/`,
        {
          method: "GET",
        }
      )
        .then((response) => response.body)
        .then((rb) => {
          const reader = rb.getReader();
          return new ReadableStream({
            start(controller) {
              // The following function handles each data chunk
              function push() {
                // "done" is a Boolean and value a "Uint8Array"
                reader.read().then(({ done, value }) => {
                  // If there is no more data to read
                  if (done) {
                    controller.close();
                    return;
                  }
                  // Get the data and send it to the browser via the controller
                  controller.enqueue(value);
                  push();
                });
              }

              push();
            },
          });
        })
        .then((stream) => {
          // Respond with our stream
          return new Response(stream, {
            headers: { "Content-Type": "text/html" },
          }).text();
        })
        .then((result) => {
          // Do things with result
          const regexp = /=".*\.jpg"/gm;

          const array = [...result.matchAll(regexp)];
          array.forEach((e) => {
            this.pictures.push(e["0"].substring(2, e["0"].length - 1));
          });
        });
    },
  },
};
</script>

<style scoped>
.pictures-container {
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  padding-left: 5em;
  padding-right: 5em;
}
.picture {
  max-height: 20em;
  margin: 5px;
  border-radius: 10px;
}
</style>
