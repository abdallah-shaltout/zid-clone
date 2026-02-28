<template>
    <section
        class="relative min-h-[90dvh] flex items-center justify-center overflow-hidden"
    >
        <!-- Video Background -->
        <div class="absolute inset-0 p-2 w-full h-full">
            <video
                class="w-full h-full object-cover rounded-lg"
                autoplay
                muted
                loop
                playsinline
                preload="auto"
            >
                <source
                    src="https://zid-website.directus.app/assets/78e8111e-3408-436d-9b7e-15172c57b8b0"
                    type="video/mp4"
                />
            </video>
        </div>

        <!-- Dark Overlay -->
        <!-- <div class="hero-overlay absolute inset-0"></div>  -->

        <!-- Content -->
        <div class="relative z-10 container mx-auto px-4 lg:px-8 text-center">
            <!-- Badge -->
            <div class="inline-flex items-center gap-2 mb-8">
                <span
                    class="inline-flex items-center gap-2 px-5 py-2 rounded-full text-sm font-medium text-white border border-white/20 bg-white/10 backdrop-blur-sm"
                >
                    <span
                        class="w-2 h-2 rounded-full bg-primary animate-pulse"
                    ></span>
                    ابدأ تجارتك مجانًا
                </span>
            </div>

            <!-- Heading -->
            <h1
                class="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold text-white leading-tight mb-6"
            >
                <span class="block">ابنِ متجرك الإلكتروني</span>
                <span class="block text-primary mt-2">واكسب عملاءك</span>
            </h1>

            <!-- Description -->
            <p
                class="max-w-2xl mx-auto text-lg sm:text-xl text-white/80 leading-relaxed mb-10"
            >
                منصة التجارة الإلكترونية الأولى في السعودية، تمنحك كل الأدوات
                التي تحتاجها لبناء متجر ناجح وتنمية أعمالك
            </p>

            <!-- CTA Buttons -->
            <div
                class="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
                <a
                    href="#"
                    class="w-full sm:w-auto px-8 py-4 text-base font-semibold text-white bg-primary hover:bg-primary-dark rounded-2xl transition-all duration-200 shadow-lg shadow-primary/40 hover:shadow-primary/60 hover:-translate-y-0.5"
                >
                    أنشئ متجرك مجاناً
                </a>
                <a
                    href="#"
                    class="w-full sm:w-auto px-8 py-4 text-base font-semibold text-white border-2 border-white/40 hover:border-white/70 hover:bg-white/10 rounded-2xl transition-all duration-200"
                >
                    تعرّف على زد
                </a>
            </div>

            <!-- Stats hint -->
            <div
                class="flex flex-col sm:flex-row items-center justify-center gap-6 mt-12 text-white/60 text-sm"
            >
                <div class="flex items-center gap-2">
                    <svg
                        class="w-4 h-4 text-primary"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                    >
                        <path
                            fill-rule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clip-rule="evenodd"
                        />
                    </svg>
                    بدون عمولة على المبيعات
                </div>
                <div class="flex items-center gap-2">
                    <svg
                        class="w-4 h-4 text-primary"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                    >
                        <path
                            fill-rule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clip-rule="evenodd"
                        />
                    </svg>
                    +13,500 تاجر يثق بنا
                </div>
                <div class="flex items-center gap-2">
                    <svg
                        class="w-4 h-4 text-primary"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                    >
                        <path
                            fill-rule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clip-rule="evenodd"
                        />
                    </svg>
                    دعم فني 24/7
                </div>
            </div>
        </div>

        <!-- Scroll Indicator -->
        <div
            class="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/50"
        >
            <span class="text-xs">اسحب للأسفل</span>
            <div
                class="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center pt-1.5"
            >
                <div
                    class="w-1 h-2.5 bg-white/50 rounded-full animate-bounce"
                ></div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
// No additional logic needed — all handled by CSS/HTML
</script>
