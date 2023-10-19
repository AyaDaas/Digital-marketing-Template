<template>
    <br /><br />
    <div class="lg:flex md:flex-wrap">
        <div class="lg:w-1/2 mt-10">
            <Photo src="../../public/assets/person1.png"></Photo>
        </div>
        <div class="lg:w-1/2 mt-10">
            <div class="lg:mx-4 mx-10">
                <title-desc variantDesc="text-xl lg:text-start text-center text-gray-800"
                    variant=" font-bold lg:text-start text-center text-bold text-5xl"
                    title="Digital Product marketing agency"
                    desc="Lorem ipsum dolor repellat sapiente sum dolor repellat sapiente."></title-desc>
                <div class="bg-gray-200 lg:w-4/5 justify-center lg:mx-0 mx-auto p-5">
                    <form class="">
                        <div class="relative">
                            <InputFeild class="rounded-3xl" placeholder="Enter a valid email address"></InputFeild>
                            <Button class="absolute" label="SUBMIT"></Button>
                        </div>
                    </form>
                </div>

                <br />
                <br />

                <div class="lg:mx-0 mt-3 mx-auto lg:w-4/5 justify-center">
                    <FlPhoneVibrate
                        class="text-5xl inline mr-7 rounded-xl text-center border bg-yellow-500 p-1 text-white" />
                    <span class="text-2xl font-bold">+1 (234) 234-2423</span>
                    <p class="mx-20 text-gray-700">info@sample.com</p>
                </div>
            </div>
        </div>
    </div>

    <br />

    <div class="flex mt-4 flex-wrap justify-between lg:mt-8 container mx-auto">
        <img class="w-1/5" src="../../public/assets/logobrand.png" />
        <img class="w-1/5" src="../../public/assets/logobrand1.png" />
        <img class="w-1/5" src="../../public/assets/logobrand2.png" />
        <img class="w-1/5" src="../../public/assets/logobrand3.png" />
        <img class="w-1/5" src="../../public/assets/logobrand4.png" />
    </div>

    <div class="bg-sky-50 py-8 px-5">
        <div class="md:flex md:flex-wrap">
            <div class="md:w-1/2">
                <div class="mx-3">
                    <h3 class="text-4xl mb-6">Why you need digital marketing</h3>
                    <p class="text-lg">
                        Amet luctus venenatis lectus magna fringilla urna porttitor rhoncus dolor. A lacus
                        vestibulum sed arcu non. Dolor magna comes est lorem ipsum dolor sit amet consectetur.
                        <br />
                        <br />

                        Nec feugiat nisl pretium fosce id. Just laoreet sit amet cursus sit amet. Porta non
                        pulvinar neque laoreet suspendisse interdum consectetur libero.
                    </p>
                    <br />
                    <br />
                    <Button class="px-8 py-3" label="Read More"></Button>
                </div>
                <br />
                <br />
            </div>
            <div class="md:w-1/2 lg:h-1/2">
                <div class="lg:flex md:flex-wrap">
                    <div class="lg:w-1/2">
                        <SmallCard desc="DISCOVER, EXPLORE THE PRODUCT">
                            <template #icon>
                                <IcInternet
                                    class="text-5xl inline p-2 rounded-full text-center border bg-violet-500 p-1 text-white" />
                            </template>
                        </SmallCard>
                        <SmallCard desc="ART DIRECTION & BRAND STRATEGY">
                            <template #icon>
                                <BsLightbulb
                                    class="text-5xl inline p-2 rounded-full text-center border bg-yellow-500 bg-blue-300  p-1 text-white" />
                            </template>
                        </SmallCard>
                    </div>
                    <div class="lg:w-1/2 lg:h-1/2">
                        <SmallCard desc="PRODUCT UX, DESIGN & DEVELOPMENT">
                            <template #icon>
                                <AnOutlinedSetting
                                    class="text-5xl inline p-2 rounded-full text-center bg-blue-300 border  p-1 text-white" />
                            </template>
                        </SmallCard>
                        <SmallCard desc="MARKETING STRATEGY & SEO CAMPAIGNS">
                            <template #icon>
                                <AkLocation
                                    class="text-5xl inline p-2 rounded-full text-center border bg-lime-500 p-1 text-white" />
                            </template>
                        </SmallCard>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <br />
    <br />
    <div>
        <div class="lg:flex md:flex-wrap">
            <div class="lg:w-1/2 mt-10">
                <Photo src="../../public/assets/phone.png"></Photo>
            </div>
            <div class="lg:w-1/2 mt-20">
                <div class="lg:mx-4 mx-10">
                    <title-desc variantDesc=" lg:text-start text-center text-gray-800"
                        variant=" lg:text-start text-center text-bold text-4xl" title="Make your marketing more effective"
                        desc="Nec feugiat nisl pretium fusce id justo laoreet sit amet cursus sit amet. Porta non pulvinar neque laoreet suspendisse interdum consectetur libero."></title-desc>
                    <div class="lg:text-start text-center">
                        <Button class="px-8 py-3" label="Read More"></Button>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <br />
    <br />
    <br />
    <div class="bg-blue-300 py-12 px-10">
        <div class="p-6 bg-white rounded-lg">
            <div class="lg:flex md:flex-wrap">
                <div class="lg:w-1/2">
                    <p class="text-2xl">Convert more customers and grow more revenue now</p>
                </div>
                <div class="lg:w-1/2">
                    <div class="lg:mt-0 mt-6">
                        <div class="lg:text-end text-center">
                            <Button class="px-8 py-3" label="Read More"></Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="bg-sky-50 py-20 md:px-5 px-5">
        <div class="lg:flex md:flex-wrap">

            <div class="lg:w-1/2 mt-10 ">

                <div class="lg:mx-2 ">

                    <div class="md:flex md:flex-row-reverse  mx-5  justify-around  flex-wrap md:mx-auto">
                        <div class="md:w-1/2   ">
                            <SmallCard variant="text-4xl font-bold text-yellow-700 text-center" title="560k"
                                desc="DIGITAL GLOBAL AUDIENCE REACH">
                            </SmallCard>
                            <SmallCard variant="text-4xl font-bold text-yellow-700 text-center" title="79%"
                                desc="OF THE AUDIENCE IS UNDER 34 YEARS OLD">
                            </SmallCard>
                        </div>
                        <div class="md:w-1/2  ">
                            <SmallCard variant="text-4xl  font-bold text-yellow-700 text-center" title="80%"
                                desc="CONTENT PIECES PRODUCED EVERYDAY">
                            </SmallCard>
                            <SmallCard variant="text-4xl font-bold text-yellow-700 text-center" title="1340"
                                desc="MARKETING STRATEGY & SEO CAMPAIGNS">
                            </SmallCard>
                        </div>
                    </div>
                </div>
            </div>
            <div class="lg:w-1/2 mt-10">
                <Photo src="../../public/assets/person2.png"></Photo>
            </div>
        </div>

    </div>
    <br><br>

    <div>
        <title-desc variantDesc="  text-center mx-6 text-gray-800" variant="  text-center text-2xl"
            title="Out Modren Office Space"
            desc="Nec feugiat nisl pretium fusce id justo laoreet sit amet cursus sit amet. Porta non pulvinar neque laoreet suspendisse interdum consectetur libero."></title-desc>

    </div>
    <Carousel :slides="slides"></Carousel>



    <div class="bg-sky-50  py-24   ">
        <title-desc variantDesc="  text-center text-gray-800" variant="  text-center text-2xl"
            title="Why We Need Digital Marketing"
            desc="Nec feugiat nsit amet. Porta non pulvinar neque laoreet suspendisse interdum consectetur libero."></title-desc>

        <div class="md:grid grid md:grid-cols-3 grid-cols-2  mx-7 gap-7">

            <SmallCard title="SEO" variantdesc="text-sm " desc="DISCOVER, EXPLORE THE PRODUCT">
                <template #icon>
                    <IcInternet class="text-5xl inline p-2 rounded-full text-center border bg-violet-500 p-1 text-white" />
                </template>
            </SmallCard>
            <SmallCard title="DEVELOPMENT" desc="ART DIRECTION & BRAND STRATEGY">
                <template #icon>
                    <BsLightbulb class="text-5xl inline p-2 rounded-full text-center border bg-yellow-500 p-1 text-white" />
                </template>
            </SmallCard>
            <SmallCard title="Web design" desc="PRODUCT UX, DESIGN & DEVELOPMENT">
                <template #icon>
                    <AnOutlinedSetting
                        class="text-5xl inline p-2 rounded-full text-center bg-blue-300 border  p-1 text-white" />
                </template>
            </SmallCard>
            <SmallCard title="CMS" desc="MARKETING STRATEGY & SEO CAMPAIGNS">
                <template #icon>
                    <AkLocation class="text-5xl inline p-2 rounded-full text-center border bg-lime-500 p-1 text-white" />
                </template>
            </SmallCard>

            <SmallCard title="maintenance" desc="ART DIRECTION & BRAND STRATEGY">
                <template #icon>
                    <AnOutlinedUser
                        class="text-5xl inline p-2 rounded-full text-center border bg-gray-400 p-1 text-white" />
                </template>
            </SmallCard>
            <SmallCard title="Hosting" desc="ART DIRECTION & BRAND STRATEGY">
                <template #icon>
                    <BsDatabase class="text-5xl inline p-2 rounded-full text-center border  bg-violet-500 p-1 text-white" />
                </template>
            </SmallCard>
        </div>

    </div>



    <div class="lg:flex md:flex-wrap">
        <div class="lg:w-1/2 lg:mt-36 mt-10 ">
            <Photo src="../../public/assets/person3.png"></Photo>
        </div>
        <div class="lg:w-1/2 mt-20">
            <div class="lg:mx-4 mx-10">
                <title-desc variantDesc=" lg:text-start text-center text-gray-800"
                    variant=" lg:text-start text-center text-bold text-4xl" title="Get Free SEO Analysis? "
                    desc="Nec feugiat nisl pretium fusce id justo laoreet sit amet cursus sit amet. Porta non pulvinar neque laoreet suspendisse interdum consectetur libero."></title-desc>
                <div class="lg:text-start text-center">
                    <form>
                        <div class="bg-gray-200 p-5  text-start  ">
                            <div class="md:flex justify-around">
                                <div class="md:w-1/2 mx-4">

                                    <InputFeild label="Email" class="w-full" placeholder="Enter a valid email address">
                                    </InputFeild>
                                </div>
                                <br>
                                <div class="md:w-1/2 mx-4">

                                    <InputFeild label="Name" placeholder="Enter your name"></InputFeild>
                                </div>
                            </div>
                            <br>
                            <div class=" mx-4">
                                <label>Message</label>
                                <br>
                                <textarea placeholder="Enter you Message" class="w-full mb-3 mt-3" rows="5"></textarea>
                                <Button class="px-8 py-3 rounded-lg" label="SUBMIT"></Button>
                            </div>


                        </div>
                    </form>


                </div>
            </div>
        </div>
    </div>

    <br><br>


    <div class="bg-yellow-500 py-12 px-10">
        <div class="p-6 bg-white text-center rounded-lg ">
            <title-desc variantDesc="   text-center text-gray-800" variant="   text-center text-bold text-4xl"
                title="Got new project " desc="Call us for fast support to this number."></title-desc>

            <BsTelephoneFill class="text-center text-3xl mx-3 inline-block  text-yellow-500" />
            <span class="font-bold text-xl">+1 (234) 234-8978</span>
            <br><br>
            <Button class="px-8 py-3 rounded-xl" label="Get started"></Button>


        </div>
    </div>


    <div class="bg-sky-50  py-24  text-center ">
        <title-desc variantDesc="   text-center text-gray-800" variant="   text-center text-bold text-4xl"
            title="Read What our customers Say" desc="Sample text Click to select the text element."></title-desc>
        <div class="md:flex mx-4 mb-3">
            <figure
                class="flex m-3 flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 rounded-tr-lg dark:bg-gray-800 dark:border-gray-700">
                <blockquote class=" mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
                    <h3 class="text-3xl font-semibold text-yellow-500 dark:text-white">
                        <div class="flex">
                            <FlFilledComma class="-me-4" />
                            <FlFilledComma />
                        </div>


                    </h3>
                    <p class="my-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos voluptates animi quos ut
                        ratione aut, beatae, quo nostrum quae molestiae neque accusantium sunt. Voluptas, nostrum sint!
                        Earum, est. Aut, ipsum.</p>
                </blockquote>
                <figcaption class="flex items-center justify-center space-x-3">
                    <img class="rounded-full w-9 h-9" src="../../public/assets/person3.png" alt="profile picture">
                    <div class="space-y-0.5 font-medium dark:text-white text-left">
                        <div>Roberta Casas</div>
                        <div class="text-sm text-gray-500 dark:text-gray-400">CEO COMPANY</div>
                    </div>
                </figcaption>
            </figure>
            <figure
                class="flex m-3 flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 rounded-tr-lg dark:bg-gray-800 dark:border-gray-700">
                <blockquote class=" mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
                    <h3 class="text-3xl font-semibold text-yellow-500 dark:text-white">
                        <div class="flex">
                            <FlFilledComma class="-me-4" />
                            <FlFilledComma />
                        </div>
                    </h3>
                    <p class="my-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos odio velit suscipit
                        adipisci soluta ratione perferendis id esse eius libero. Facilis reprehenderit eum totam nisi
                        voluptatibus quod earum quisquam! Eligendi?</p>
                </blockquote>
                <figcaption class="flex items-center justify-center space-x-3">
                    <img class="rounded-full w-9 h-9" src="../../public/assets/person4.png" alt="profile picture">
                    <div class="space-y-0.5 font-medium dark:text-white text-left">
                        <div>Celia Almeda</div>
                        <div class="text-sm text-gray-500 dark:text-gray-400">FINANCIAL DIRECTOR</div>
                    </div>
                </figcaption>
            </figure>

        </div>
        <Button class="px-8 py-3 rounded-xl" label="Get started"></Button>


    </div>
</template>
<script>
import { FlFilledComma } from "@kalimahapps/vue-icons";
import { BsTelephoneFill } from "@kalimahapps/vue-icons";
import Carousel from '../components/content/Carousel.vue'
import { AnOutlinedSetting } from '@kalimahapps/vue-icons'
import { FlPhoneVibrate } from '@kalimahapps/vue-icons'
import { AkLocation } from '@kalimahapps/vue-icons'
import { BsLightbulb } from '@kalimahapps/vue-icons'
import { IcInternet } from '@kalimahapps/vue-icons'
import { AnOutlinedUser } from "@kalimahapps/vue-icons";
import { BsDatabase } from "@kalimahapps/vue-icons";
export default {
    components: {
        FlPhoneVibrate,
        AnOutlinedSetting,
        AkLocation,
        BsLightbulb,
        IcInternet,
        AnOutlinedUser,
        BsDatabase,
        Carousel,
        BsTelephoneFill,
        FlFilledComma
    },
    data() {
        return {
            slides: [{ slide: '../../public/assets/company.png' },
            { slide: '../../public/assets/company1.png' },
            { slide: '../../public/assets/company2.png' },
            { slide: '../../public/assets/company3.png' },
            { slide: '../../public/assets/company4.png' }
            ]
        }
    }
}
</script>
