<template>
  <div class="relative">
    <img src="@/assets/png/mountains2.png" class="h-auto w-full shadow-lg" />
    <nav class="absolute top-0 w-full flex justify-between items-center text-white px-[10%] h-12 bg-transparent">
      <div class="font-semibold">
        <NuxtLink :to="{ name: 'index' }">Christian Harrison</NuxtLink>
      </div>
      <div class="hidden md:block">
        <NavigationDesktopHeader />
      </div>
      <div class="block md:hidden">
        <NavigationMobileHeader />
      </div>
    </nav>
  </div>
</template>

<style scoped>
  .mountains-bg {
    background-image: url(assets/png/mountains2.png);
    background-size: contain;
    background-repeat: no-repeat;
    background-attachment: fixed;
  }
</style>