<template>
  <div
    class="subject-details title-background image-background"
    :style="background ? `background-image: url(${background})` : ''"
  >
    <div
      :class="
        !background
          ? 'white-background '
          : 'title-page side-detail-text side-detail'
      "
    >
      <h1>{{ title }}</h1>
      <span>{{ text }}</span>
      <em>{{ subText }}</em>
    </div>
  </div>
</template>

<script>
export default {
  name: "TitlePage",
  props: {
    title: String,
    text: String,
    subText: String,
    background: String,
  },
};
</script>

<style scoped>
.title-page {
  width: 100%;
}

.white-background {
  background-color: white;
}
</style>
