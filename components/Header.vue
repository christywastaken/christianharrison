<template>
  <div class="flex flex-col">
    <nav class="w-full flex justify-between items-center text-white px-[10%] h-12 bg-primary-70">
      <div class="font-semibold hidden sm:block">
        <NuxtLink :to="{ name: 'index' }">Christian Harrison</NuxtLink>
      </div>

      <div class="font-semibold block sm:hidden">
        <NuxtLink :to="{ name: 'index' }">CH</NuxtLink>
      </div>
      <div class="hidden md:block">
        <NavigationDesktopHeader />
      </div>
      <div class="block md:hidden">
        <NavigationMobileHeader />
      </div>
    </nav>
    <!-- <img src="@/assets/png/mountains5.png" class="h-32 md:h-auto w-full absolute top-12" /> -->
  </div>
</template>

