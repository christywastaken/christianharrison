<template>
  <div>
    <div>
      <form
        v-if="!requestStatus.success && !requestStatus.error"
        class="flex flex-col items-center justify-center px-4 py-4"
        @submit.prevent="submitForm"
      >
        <h2 class="header-text">Get in touch below.</h2>
        <input
          class="input-field focus:outline-none focus:bg-transparent"
          type="text"
          id="name"
          v-model="form.name"
          required
          placeholder="Your name"
          autocomplete="off"
        />

        <input
          class="input-field focus:outline-none focus:bg-transparent"
          type="email"
          id="email"
          v-model="form.email"
          required
          placeholder="Your email"
          autocomplete="off"
        />

        <ResizeableTextInput
          class="input-field focus:outline-none focus:bg-transparent resize-y"
          id="message"
          v-model="form.message"
          required
          placeholder="Your message for me"
          autocomplete="off"
        />

        <button
          class="flex items-center justify-center rounded-md mt-8 px-8 bg-slate-100 disabled:bg-slate-400"
          :disabled="requestStatus.waiting"
          type="submit"
        >
          {{ buttonText }}
          <Icon v-if="!requestStatus.waiting" name="paperplane" class="m-2 h-4 w-4 stroke-black"></Icon>
          <Icon v-if="requestStatus.waiting" name="spinner" class="m-2 h-4 w-4 fill-black icon-spin"></Icon>
        </button>
      </form>
    </div>
    <h2 v-if="requestStatus.success" class="header-text">
      Thanks for getting in touch.<br /><br />I'll get back to you shortly via email.
    </h2>
    <h2 v-if="requestStatus.error" class="header-text">
      Oh dear. There was a problem submitting your request. Refresh the page and try again.<br /><br />
      If that doesn't fix it, contact me on my GitHub:
      <a href="https://github.com/christywastaken" target="_blank" class="hover:text-gray-400"
        ><u><i>github.com/christywastaken</i></u></a
      >
    </h2>
  </div>
</template>

<script setup lang="ts">
  const requestStatus = ref({
    waiting: false,
    success: false,
    error: false,
    errorMessage: "",
  });

  const buttonText = computed(() => {
    return requestStatus.value.waiting ? "Sending" : "Send";
  });

  const form = ref({
    name: "",
    email: "",
    message: "",
  });

  const submitForm = () => {
    requestStatus.value.waiting = true;
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

<style scoped>
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  .icon-spin {
    animation: spin 1s linear infinite;
  }

  .header-text {
    display: flex-col;
    justify-content: center;
    color: white;
    font-weight: 600;
    font-size: 1.25rem;
    text-align: center;
    text-decoration: inherit;
  }

  .input-field {
    margin-top: 1rem;
    margin-bottom: 1rem;
    width: 100%;
    padding-left: 1.25rem;
    padding-right: 1.25rem;
    color: white;
    background-color: transparent;
    border-bottom-width: 2px;
    height: 2.5rem;
  }
</style>
