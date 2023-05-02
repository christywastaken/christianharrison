<template>
  <div class="flex justify-between items-center px-[10%] h-12 bg-white">
    <div class="font-semibold">
      <NuxtLink :to="{ name: 'index' }">Christian Harrison</NuxtLink>
    </div>
    <NavigationMobileHeader class="block md:hidden" />
    <NavigationDesktopHeader class="hidden md:block" />
  </div>
</template>
