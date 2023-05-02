<template>
  <textarea
    ref="el" v-model="text" type="text"  placeholder="Your message to me"
    @input="resizeAndEmit"
  />
</template>

<script setup lang="ts">


const emit = defineEmits<{
  (event: "textUpdated", value: string): void;
}>();

const el = ref(null);
const text = ref<any>(null);

const resizeAndEmit = (event) => {
  event.target.style.height = "auto"; // Removing this stops the textarea from shrinking
  event.target.style.height = (event.target.scrollHeight) + "px";
  emit("textUpdated", text.value);
};

</script>
