<template>
  <div class="gradient-background">
    <router-view></router-view>
  </div>

</template>

<script>

</script>
<style>
*{
  font-family: 'rounabold', sans-serif;
}
@font-face {
  font-family: 'rounabold';
  src: url('assets/font/rouna/rouna-bold-webfont.eot');
  src: url('assets/font/rouna/rouna-bold-webfont.eot?#iefix') format('embedded-opentype'),
  url('assets/font/rouna/rouna-bold-webfont.woff2') format('woff2'),
  url('assets/font/rouna/rouna-bold-webfont.woff') format('woff'),
  url('assets/font/rouna/rouna-bold-webfont.ttf') format('truetype');
  font-weight: normal;
  font-style: normal;
}
.gradient-background {
  background: linear-gradient(156deg,#f5f5f5,#d8f1f8,#d5dde7);
  background-size: 180% 180%;
  animation: gradient-animation 12s ease infinite;
}

@keyframes gradient-animation {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}
</style>
