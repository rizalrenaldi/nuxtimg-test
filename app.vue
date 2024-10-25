<template>
  <div>
    <div>
      <div>NuxtImg tag</div>
      <NuxtImg 
      src="/1.jpg" 
      alt="one" 
      width="900"
      />
    </div>
    <div>
      <div>component with NuxtImg in it</div>
      <TheImage 
      src="/1.jpg" 
      alt="one" 
      width="900"
    />
    </div>
    <div>
      <div>img tag</div>
      <img 
      src="/1.jpg" 
      alt="one" 
      width="900"
    />
    </div>
  </div>
</template>

<script setup>
const src = ref('1.jpg')
const imgs = [
  '1.jpg',
  '2.jpg',
  '3.jpg',
  '4.png',
  '5.png'
]
</script>
