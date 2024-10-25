<template>
  <div>
    <div class="item">
      <p>Okay, this seems to work. I was following <NuxtLink to="https://masteringnuxt.com/blog/getting-started-with-nuxt-image">https://masteringnuxt.com/blog/getting-started-with-nuxt-image</NuxtLink>, this resulted in [404] [IPX_FILE_NOT_FOUND] error on Vercel. Now without explicit setting `provider` in nuxt config, it's working.</p>
      <p>I guess if you're deploying to Vercel and all of your images are in public folder (Anywhere within '/public' folder, whether it's in the root or inside sub-folder), you SHOULD NOT set the `provider: 'ipx'` in nuxt config.</p>

      <div>
        <span>This issue also mentioned </span>
        <NuxtLink href="https://github.com/nuxt/image/issues/1281" target="_blank">Here</NuxtLink> <span> and </span>
      <NuxtLink href="https://github.com/nuxt/image/issues/1281#issuecomment-2111403408" target="_blank">Here</NuxtLink>
      </div>
    </div>
    <div class="item">
      <div>NuxtImg tag with only width defined</div>
      <NuxtImg 
      src="/1.jpg" 
      alt="one" 
      width="900"
      />
    </div>
    <div class="item">
      <div>NuxtImg tag, no width or height defined</div>
      <NuxtImg 
      src="/1.jpg" 
      alt="one" 
      />
    </div>
    <div class="item">
      <div>NuxtImg tag, file in sub-folder (/public/img/1.jpg) no width or height defined</div>
      <NuxtImg 
      src="/img/1.jpg" 
      alt="one" 
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
.item > div {
  margin-bottom: 8px;
}
</style>
