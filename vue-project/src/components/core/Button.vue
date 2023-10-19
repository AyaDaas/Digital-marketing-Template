<template>
    <button type="submit" :class="[variant]"
        class="text-white   right-3 bottom-2.5 bg-violet-500 hover:bg-violet-700 focus:ring-none focus:outline-none  font-medium rounded-3xl text-sm px-5 py-2    ">{{
            label }}</button>
</template>
<script>
export default {
    props: {
        label: String,
        variant: {
            default: ''
        },
    }
}
</script>