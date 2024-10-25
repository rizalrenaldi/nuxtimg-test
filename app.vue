<template>
  <div>
    <div class="item">
      <div>NuxtImg tag</div>
      <NuxtImg 
      src="/1.jpg" 
      alt="one" 
      width="900"
      />
    </div>
    <div class="item">
      <div>icon.png NuxtImg tag with preset</div>
      <NuxtImg 
      src="/icon.png" 
      alt="icon" 
      width="40"
      height="40"
      preset="icon"
      />
    </div>
    <div class="item">
      <div>icon.png img tag</div>
      <img 
      src="/icon.png" 
      alt="icon"
      width="40"
      height="40"
      />
    </div>
    <div class="item">
      <div>component with NuxtImg in it</div>
      <TheImage 
      src="/1.jpg" 
      alt="one" 
      width="900"
    />
    </div>
    <div class="item">
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

<style>
.item {
  padding: 24px 0px;
  border-bottom: 1px solid #333;
}
</style>
