<template>
  <h3 class="text-center text-4xl" :class="variant">{{ title }}</h3>
  <p class="my-2 mx-1 mb-4 text-lg text-gray-800" :class="variantDesc">{{ desc }}</p>
</template>

<script>
export default {
  props: {
    title: String,
    desc: String,
    variant: String,
    variantDesc: String,
  }
}
</script>
