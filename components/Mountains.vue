<template>
  <div>
    <svg  v-if="name === 'mountains-xl'" width="2889" height="500" viewBox="0 0 2889 500" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g filter="url(#filter0_d_1_27)">
        <path
          d="M4.5 492L2053.74 256.139C2054.57 256.043 2055.42 256.082 2056.22 256.254L2884.5 432.063L2885 0H4L4.5 492Z"
          fill="url(#paint0_linear_1_27)"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_1_27"
          x="0"
          y="0"
          width="2889"
          height="500"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_27" />
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_27" result="shape" />
        </filter>
        <linearGradient
          id="paint0_linear_1_27"
          x1="1444.5"
          y1="0"
          x2="1444.5"
          y2="846.394"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.0117158" stop-color="#0F0433" />
          <stop offset="1" stop-color="#0E9EBE" />
        </linearGradient>
      </defs>
    </svg>
  </div>
</template>


<script setup lang="ts">
const props = defineProps({
  name: {
    type: String,
    required: true,
  },
});


</script>
