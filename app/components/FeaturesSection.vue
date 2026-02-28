<template>
    <section class="py-20 bg-white overflow-hidden">
        <div class="container mx-auto px-4 lg:px-8">
            <!-- Section Header -->
            <div class="text-center mb-20">
                <span
                    class="inline-block px-4 py-1.5 text-xs font-semibold text-primary bg-primary/10 rounded-full mb-4 uppercase tracking-wider"
                >
                    مميزات زد
                </span>
                <h2
                    class="text-3xl lg:text-4xl xl:text-5xl font-bold text-dark-lavender leading-tight mb-4"
                >
                    كل ما تحتاجه في مكان واحد
                </h2>
                <p class="text-gray-500 max-w-2xl mx-auto text-lg">
                    منصة متكاملة تجمع بين البساطة والقوة لمساعدتك على النجاح
                </p>
            </div>

            <!-- Features List -->
            <div class="space-y-24 lg:space-y-32">
                <div
                    v-for="(feature, index) in features"
                    :key="index"
                    class="flex flex-col lg:flex-row items-center gap-12 lg:gap-20"
                    :class="
                        index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                    "
                >
                    <!-- Image -->
                    <div class="w-full lg:w-1/2 relative">
                        <div
                            class="relative rounded-3xl overflow-hidden shadow-2xl shadow-gray-200"
                        >
                            <NuxtImg
                                :src="feature.imageUrl"
                                :alt="feature.title"
                                class="w-full h-auto object-cover rounded-3xl"
                                loading="lazy"
                                format="webp"
                            />
                            <!-- Decorative gradient overlay -->
                            <div
                                class="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent pointer-events-none"
                            ></div>
                        </div>
                        <!-- Floating badge -->
                        <div
                            class="absolute -bottom-4 bg-white rounded-2xl shadow-xl px-5 py-3 flex items-center gap-3 border border-gray-100"
                            :class="index % 2 === 0 ? '-left-4' : '-right-4'"
                        >
                            <div
                                class="w-8 h-8 rounded-xl bg-primary/15 flex items-center justify-center"
                            >
                                <span class="text-primary text-sm font-bold">{{
                                    String(index + 1).padStart(2, "0")
                                }}</span>
                            </div>
                            <span
                                class="text-sm font-semibold text-dark-lavender"
                                >{{ feature.badge }}</span
                            >
                        </div>
                    </div>

                    <!-- Content -->
                    <div class="w-full lg:w-1/2 space-y-5">
                        <div
                            class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10"
                        >
                            <span
                                class="w-1.5 h-1.5 rounded-full bg-primary"
                            ></span>
                            <span
                                class="text-xs font-semibold text-primary uppercase tracking-wide"
                                >{{ feature.category }}</span
                            >
                        </div>

                        <h3
                            class="text-2xl lg:text-3xl xl:text-4xl font-bold text-dark-lavender leading-tight"
                        >
                            {{ feature.title }}
                        </h3>

                        <p
                            class="text-gray-500 text-base lg:text-lg leading-relaxed"
                        >
                            {{ feature.description }}
                        </p>

                        <!-- Feature bullets -->
                        <ul class="space-y-3">
                            <li
                                v-for="(bullet, bi) in feature.bullets"
                                :key="bi"
                                class="flex items-start gap-3"
                            >
                                <div
                                    class="w-5 h-5 rounded-full bg-primary/15 flex items-center justify-center flex-shrink-0 mt-0.5"
                                >
                                    <svg
                                        class="w-3 h-3 text-primary"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        stroke-width="3"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            d="M5 13l4 4L19 7"
                                        />
                                    </svg>
                                </div>
                                <span class="text-gray-600 text-sm">{{
                                    bullet
                                }}</span>
                            </li>
                        </ul>

                        <!-- CTA for last feature -->
                        <div v-if="feature.cta" class="pt-2">
                            <a
                                :href="feature.cta.href"
                                class="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-primary hover:bg-primary-dark rounded-xl transition-all duration-200 shadow-md shadow-primary/30 hover:-translate-y-0.5"
                            >
                                {{ feature.cta.label }}
                                <svg
                                    class="w-4 h-4 rotate-180"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    stroke-width="2"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        d="M9 5l7 7-7 7"
                                    />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
interface FeatureCTA {
    label: string;
    href: string;
}

interface Feature {
    category: string;
    title: string;
    description: string;
    imageUrl: string;
    badge: string;
    bullets: string[];
    cta?: FeatureCTA;
}

const features: Feature[] = [
    {
        category: "التصميم",
        title: "بانٍ المتجر",
        description:
            "صمم متجرك باحترافية بدون أي خبرة تقنية. اختر من بين عشرات القوالب الجاهزة وخصصها بالكامل لتعكس هوية علامتك التجارية.",
        imageUrl:
            "https://zid-website.directus.app/assets/7a8b9c0d-1e2f-3a4b-5c6d-7e8f9a0b1c2d",
        badge: "بدون برمجة",
        bullets: [
            "أكثر من 50 قالب احترافي جاهز للاستخدام",
            "محرر سحب وإفلات بسيط وقوي",
            "تخصيص الألوان والخطوط والتخطيط",
        ],
    },
    {
        category: "الدفع",
        title: "مدفوعات آمنة",
        description:
            "استقبل المدفوعات بأمان وسهولة من خلال أكثر من 20 طريقة دفع متكاملة تناسب جميع عملاؤك في المنطقة.",
        imageUrl:
            "https://zid-website.directus.app/assets/8b9c0d1e-2f3a-4b5c-6d7e-8f9a0b1c2d3e",
        badge: "20+ طريقة دفع",
        bullets: [
            "تكامل مع مدى وفيزا وماستركارد وآبل باي",
            "بوابات دفع BNPL كتابي وتمارا",
            "تشفير SSL لحماية بيانات العملاء",
        ],
    },
    {
        category: "الشحن",
        title: "الشحن والتوصيل",
        description:
            "وصّل منتجاتك لعملائك بسرعة وكفاءة مع شبكة واسعة من شركاء الشحن الموثوقين في المملكة والمنطقة.",
        imageUrl:
            "https://zid-website.directus.app/assets/9c0d1e2f-3a4b-5c6d-7e8f-9a0b1c2d3e4f",
        badge: "+30 شركة شحن",
        bullets: [
            "أكثر من 30 شركة شحن متكاملة",
            "طباعة بوالص الشحن تلقائياً",
            "تتبع الطلبات في الوقت الفعلي",
        ],
    },
    {
        category: "التسويق",
        title: "أدوات التسويق",
        description:
            "نمّ متجرك مع أدوات تسويق ذكية مدمجة تساعدك على جذب المزيد من العملاء وزيادة مبيعاتك.",
        imageUrl:
            "https://zid-website.directus.app/assets/0d1e2f3a-4b5c-6d7e-8f9a-0b1c2d3e4f5a",
        badge: "نمو مضمون",
        bullets: [
            "تكامل مع Google Analytics وFacebook Pixel",
            "حملات البريد الإلكتروني والرسائل النصية",
            "برامج الولاء والكوبونات والعروض",
        ],
    },
    {
        category: "التصميم",
        title: "قوالب احترافية",
        description:
            "تصفح مكتبة قوالب مصممة من قِبل خبراء لتناسب مختلف أنواع المتاجر والصناعات.",
        imageUrl:
            "https://zid-website.directus.app/assets/1e2f3a4b-5c6d-7e8f-9a0b-1c2d3e4f5a6b",
        badge: "50+ قالب",
        bullets: [
            "قوالب مُحسَّنة لمحركات البحث",
            "متوافقة مع جميع الأجهزة",
            "تحديثات مستمرة بأحدث اتجاهات التصميم",
        ],
    },
    {
        category: "البيع المباشر",
        title: "نقاط البيع",
        description:
            "أدر مبيعاتك في المتجر الفعلي بنفس سهولة المتجر الإلكتروني، مع مزامنة تلقائية للمخزون.",
        imageUrl:
            "https://zid-website.directus.app/assets/2f3a4b5c-6d7e-8f9a-0b1c-2d3e4f5a6b7c",
        badge: "بيع أينما كنت",
        bullets: [
            "واجهة سهلة الاستخدام للكاشير",
            "مزامنة تلقائية للمخزون مع المتجر الإلكتروني",
            "تقارير مبيعات شاملة",
        ],
    },
    {
        category: "الدعم",
        title: "دعم متخصص",
        description:
            "فريق متخصص من الخبراء متاح على مدار الساعة لمساعدتك في تحقيق أهدافك التجارية.",
        imageUrl:
            "https://zid-website.directus.app/assets/3a4b5c6d-7e8f-9a0b-1c2d-3e4f5a6b7c8d",
        badge: "دعم 24/7",
        bullets: [
            "دعم فني متخصص عبر الدردشة والهاتف",
            "مركز مساعدة شامل بآلاف المقالات",
            "مجتمع تجار نشط للتبادل والتعاون",
        ],
        cta: {
            label: "ابدأ مجاناً الآن",
            href: "#",
        },
    },
];
</script>
