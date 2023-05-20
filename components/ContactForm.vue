<template>
  <form class="flex flex-col items-center justify-center px-4 py-4" @submit.prevent="submitForm">
    <input
      class="my-4 w-full px-5 text-white bg-transparent border-b-2 h-10 focus:outline-none focus:bg-transparent"
      type="text"
      id="name"
      v-model="form.name"
      required
      placeholder="Your name"
      autocomplete="off"
    />

    <input
      class="my-4 w-full px-5 text-white bg-transparent border-b-2 h-10 focus:outline-none focus:bg-transparent"
      type="email"
      id="email"
      v-model="form.email"
      required
      placeholder="Your email"
      autocomplete="off"
    />

    <ResizeableTextInput
      class="my-4 w-full px-5 text-white bg-transparent border-b-2 h-10 resize-y focus:outline-none focus:bg-transparent"
      id="message"
      v-model="form.message"
      required
      placeholder="Your message for me"
      autocomplete="off"
    />

    <div v-if="requestStatus.success" class="h-12 my-4 bg-green-500">Success</div>
    <div v-if="requestStatus.error" class="h-12 my-4 bg-red-500">Failure: {{ requestStatus.errorMessage }}</div>

    <button class="flex items-center justify-center rounded-md mt-8 px-8 bg-slate-100" type="submit">
      Send <Icon name="paperplane" class="m-2 h-4 w-4 stroke-black"></Icon>
    </button>
  </form>
</template>

<script setup lang="ts">

  const requestStatus = ref({
    success: false,
    error: false,
    errorMessage: ""
  })

  const form = ref({
    name: "",
    email: "",
    message: "",
  });

  const submitForm = () => {
    $fetch("/api/send-email", {
      method: "POST",
      body: {
        name: form.value.name,
        email: form.value.email,
        message: form.value.message,
      },
    })
      .then((response) => {
        console.log(response);
        requestStatus.value.success = true;
      })
      .catch((err) => {
        console.log(err);
        requestStatus.value.error = true;
      });
  };
</script>

<style>
  input,
  select,
  textarea {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    border-radius: 0;
  }
</style>
