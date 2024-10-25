<template>
  <div>
    <NuxtImg 
      :src="src" 
      :alt="alt" 
      :width="width"
      />
  </div>
</template>

<script setup>
defineProps({
  src: {
    type: String,
    default: "/1.jpg"
  },
  alt: {
    type: String,
    default: "image"
  },
  width: {
    type: String,
    default: "1920"
  },
  height: {
    type: String,
    default: "1080"
  },
})
</script>