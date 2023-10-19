<template>
  <h3 class="  text-center  text-4xl " :class="[variant]">{{ title }}</h3>
  <p class=" my-2 m mx-1 text-lg  text-gray-800" :class="[variantDesc]">{{ desc }}</p>
</template>
<script>
export default {
  props: {
    title: String,
    desc: String,
    variant: {
      default: 'text-4xl text-start ',
      validator(value) {
        return [
          'text-2xl text-black  text-start text-bold',

        ].includes(value)
      }
    },
    variantDesc: {
      default: 'text-lg text-start ',
      validator(value) {
        return [
          'text-2xl text-yellow-700 text-center',
        ].includes(value)
      }

    }
  }
}
</script>
