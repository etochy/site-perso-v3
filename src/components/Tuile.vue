<template>
  <div v-if="index % 2 === 0" class="side-detail">
    <div class="side-detail-text side-detail-text-grey">
      <h2>{{ title }}</h2>
      <span>{{ text }}</span>
      <em>{{ subText }}</em>
    </div>
  </div>
  <div
    v-if="index % 2 === 0"
    :style="`background-image: url(${image})`"
    class="side-detail image-background"
    :alt="title"
  />

  <div
    v-if="index % 2 === 1"
    class="side-detail image-background"
    :style="`background-image: url(${image})`"
  />
  <div v-if="index % 2 === 1" class="side-detail">
    <div class="side-detail-text side-detail-text-grey">
      <h2>{{ title }}</h2>
      <span>{{ text }}</span>
      <em>{{ subText }}</em>
    </div>
  </div>
</template>

<script>
export default {
  name: "Tuile",
  props: {
    title: String,
    text: String,
    subText: String,
    image: String,
    index: Number,
  },
};
</script>

<style scoped>
.side-detail-text {
  height: 100%;
  width: 100%;
}
</style>
