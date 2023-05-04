
<template>
  <button class="flex items-center justify-center w-12 h-12 rounded-full z-10" @click="toggleMobileMenu">
    <Icon name="menu" class="h-6 w-6 fill-white hover:fill-gray-500" />
  </button>
  <transition name="slide">
    <NavigationSideMenu v-if="navMenuActive" id="dropdown" class="fixed flex" @click="toggleMobileMenu" />
  </transition>
</template>

<script setup>
  const navMenuActive = ref(false);

  const toggleMobileMenu = () => {
    navMenuActive.value = !navMenuActive.value;
    navMenuActive.value
      ? document.body.setAttribute("style", "overflow: hidden;")
      : document.body.removeAttribute("style", "overflow: hidden;");
  };
</script>

<style scoped>
  .slide-enter-active {
    transition: transform 0.3s ease-out;
  }
  .slide-enter-from {
    transform: translateX(100%);
  }
  .slide-leave-active {
    transition: transform 0.3s ease-out;
  }
  .slide-leave-to {
    transform: translateX(100%);
  }
</style>
