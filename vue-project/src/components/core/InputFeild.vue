<template>
    <label>{{ label }}</label>
    <input type="text"
        class="block w-full mt-3 p-4 pl-5 text-sm text-gray-900 border   	focus:outline-none  bg-white     focus:border-violet-700 "
        :placeholder="placeholder" required>
</template>
<script>
export default {
    props: {
        placeholder: String,
        label: String

    }
}
</script>