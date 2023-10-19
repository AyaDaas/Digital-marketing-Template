<template>
  <div class="mt-3">
    <div
      class="relative  me-20 flex items-start justify-center before:absolute before:h-[400px] before:w-[400px] before:rounded-full before:bg-violet-500">
      <img class="z-10   h-[400px]" :src="src" type="image" alt="person1" />
      <div
        class="absolute flex mt-36 items-center justify-csnter me-24 before:absolute before:h-[320px] before:w-[320px] before:rounded-full before:bg-yellow-500">
        >
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    src: String
  }
}
</script>
