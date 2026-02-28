<template>
    <section class="py-12 bg-white border-y border-gray-100 overflow-hidden">
        <div class="container mx-auto px-4 mb-8 text-center">
            <p
                class="text-sm font-medium text-gray-400 uppercase tracking-widest"
            >
                يثق بنا أكثر من 13,500 تاجر
            </p>
        </div>

        <!-- Marquee Wrapper -->
        <div class="relative">
            <!-- Fade edges -->
            <div
                class="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"
            ></div>
            <div
                class="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"
            ></div>

            <!-- Marquee Track -->
            <div class="flex overflow-hidden">
                <div
                    class="flex items-center gap-12 animate-marquee"
                    style="--marquee-duration: 35s"
                >
                    <!-- First set -->
                    <div
                        v-for="(logo, index) in logos"
                        :key="`first-${index}`"
                        class="flex-shrink-0 flex items-center justify-center h-12"
                    >
                        <NuxtImg
                            :src="logo.url"
                            :alt="logo.name"
                            class="h-12 object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                            loading="lazy"
                            format="webp"
                        />
                    </div>
                    <!-- Duplicate for seamless loop -->
                    <div
                        v-for="(logo, index) in logos"
                        :key="`second-${index}`"
                        class="flex-shrink-0 flex items-center justify-center h-12"
                    >
                        <NuxtImg
                            :src="logo.url"
                            :alt="logo.name"
                            class="h-12 object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                            loading="lazy"
                            format="webp"
                        />
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
interface Logo {
    name: string;
    url: string;
}

const logos: Logo[] = [
    {
        name: "التميمي",
        url: "https://zid-website.directus.app/assets/7f8e1c3a-2b4d-4e5f-9a8b-1c2d3e4f5a6b",
    },
    {
        name: "نونو",
        url: "https://zid-website.directus.app/assets/b2c3d4e5-f6a7-8b9c-0d1e-2f3a4b5c6d7e",
    },
    {
        name: "دكان",
        url: "https://zid-website.directus.app/assets/c3d4e5f6-a7b8-9c0d-1e2f-3a4b5c6d7e8f",
    },
    {
        name: "بيبي شوب",
        url: "https://zid-website.directus.app/assets/d4e5f6a7-b8c9-0d1e-2f3a-4b5c6d7e8f9a",
    },
    {
        name: "البيك",
        url: "https://zid-website.directus.app/assets/e5f6a7b8-c9d0-1e2f-3a4b-5c6d7e8f9a0b",
    },
    {
        name: "سبيس",
        url: "https://zid-website.directus.app/assets/f6a7b8c9-d0e1-2f3a-4b5c-6d7e8f9a0b1c",
    },
    {
        name: "ماكس",
        url: "https://zid-website.directus.app/assets/a7b8c9d0-e1f2-3a4b-5c6d-7e8f9a0b1c2d",
    },
    {
        name: "لازوردي",
        url: "https://zid-website.directus.app/assets/b8c9d0e1-f2a3-4b5c-6d7e-8f9a0b1c2d3e",
    },
    {
        name: "بتلر",
        url: "https://zid-website.directus.app/assets/c9d0e1f2-a3b4-5c6d-7e8f-9a0b1c2d3e4f",
    },
    {
        name: "هوم سنتر",
        url: "https://zid-website.directus.app/assets/d0e1f2a3-b4c5-6d7e-8f9a-0b1c2d3e4f5a",
    },
    {
        name: "ناين ويست",
        url: "https://zid-website.directus.app/assets/e1f2a3b4-c5d6-7e8f-9a0b-1c2d3e4f5a6b",
    },
    {
        name: "سيفي",
        url: "https://zid-website.directus.app/assets/f2a3b4c5-d6e7-8f9a-0b1c-2d3e4f5a6b7c",
    },
    {
        name: "فلوريست",
        url: "https://zid-website.directus.app/assets/a3b4c5d6-e7f8-9a0b-1c2d-3e4f5a6b7c8d",
    },
    {
        name: "جرير",
        url: "https://zid-website.directus.app/assets/b4c5d6e7-f8a9-0b1c-2d3e-4f5a6b7c8d9e",
    },
];
</script>

<style scoped>
@keyframes marquee-scroll {
    from {
        transform: translateX(0);
    }
    to {
        transform: translateX(50%);
    }
}

.animate-marquee {
    animation: marquee-scroll var(--marquee-duration, 35s) linear infinite;
    will-change: transform;
    min-width: max-content;
}

.animate-marquee:hover {
    animation-play-state: paused;
}
</style>
