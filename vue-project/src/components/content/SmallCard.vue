<template>
    <div class="lg:m-4 m-4 ">
        <div style="min-height: 200px;" class="shadow-xl rounded-lg mb-7 text-center card bg-white ">
            <div class="py-9 ">
                <slot name="icon"></slot>
                <h3 class=" mb-4 mt-1 uppercase  " :class="[variant]">{{ title }}</h3>
                <p class=" text-sm  mx-2" :class="[variantdesc]">{{ desc }}</p>
            </div>

        </div>
    </div>
</template>

<script>
export default {
    props: {
        title: String,
        desc: String,
        icon: String,

        variant: {
            default: '',
            validator(value) {
                return [
                    'text-2xl text-yellow-700 text-center',

                ].includes(value)
            }
        },
        variantDesc: {
            default: 'text-2xl text-yellow-700 text-center',
            validator(value) {
                return [
                    'text-2xl text-yellow-700 text-center',
                ].includes(value)
            }

        }
    }
}
</script>