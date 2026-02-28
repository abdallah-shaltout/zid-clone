<template>
  <section class="py-20 bg-gray-50/50 overflow-hidden">
    <div class="container mx-auto px-4 lg:px-8">
      <!-- Section Header -->
      <div class="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-6 mb-12">
        <div>
          <span class="inline-block px-4 py-1.5 text-xs font-semibold text-primary bg-primary/10 rounded-full mb-4 uppercase tracking-wider">
            قصص النجاح
          </span>
          <h2 class="text-3xl lg:text-4xl xl:text-5xl font-bold text-dark-lavender leading-tight">
            تجارنا يتحدثون عن زد
          </h2>
        </div>

        <!-- Navigation Buttons -->
        <div class="flex items-center gap-3">
          <button
            @click="prev"
            class="w-12 h-12 rounded-2xl border-2 border-gray-200 flex items-center justify-center hover:border-primary hover:bg-primary hover:text-white transition-all duration-200 group"
            aria-label="السابق"
          >
            <svg class="w-5 h-5 text-gray-500 group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
          <button
            @click="next"
            class="w-12 h-12 rounded-2xl border-2 border-gray-200 flex items-center justify-center hover:border-primary hover:bg-primary hover:text-white transition-all duration-200 group"
            aria-label="التالي"
          >
            <svg class="w-5 h-5 text-gray-500 group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
        </div>
      </div>

      <!-- Carousel -->
      <div ref="carouselRef" class="overflow-hidden">
        <div
          class="flex gap-6 transition-transform duration-500 ease-out"
          :style="{ transform: `translateX(${currentTranslate}px)` }"
        >
          <div
            v-for="(story, index) in stories"
            :key="index"
            class="flex-shrink-0 w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] bg-white rounded-3xl border border-gray-100 p-8 hover:shadow-xl hover:shadow-gray-200/80 hover:border-primary/20 transition-all duration-300"
          >
            <!-- Quote icon -->
            <div class="w-10 h-10 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
              <svg class="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
              </svg>
            </div>

            <!-- Quote text -->
            <p class="text-dark-lavender/80 text-sm lg:text-base leading-relaxed mb-6 font-medium">
              "{{ story.quote }}"
            </p>

            <!-- Merchant info -->
            <div class="flex items-center gap-4 pt-4 border-t border-gray-100">
              <img
                :src="story.photoUrl"
                :alt="story.name"
                class="w-12 h-12 rounded-2xl object-cover ring-2 ring-primary/20"
              />
              <div>
                <div class="font-semibold text-dark-lavender text-sm">{{ story.name }}</div>
                <div class="text-primary text-xs font-medium">{{ story.subtitle }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Dots -->
      <div class="flex items-center justify-center gap-2 mt-8">
        <button
          v-for="(_, i) in dots"
          :key="i"
          @click="goTo(i)"
          class="rounded-full transition-all duration-300"
          :class="[
            currentPage === i
              ? 'w-8 h-2 bg-primary'
              : 'w-2 h-2 bg-gray-300 hover:bg-gray-400'
          ]"
        ></button>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
interface Story {
  name: string
  subtitle: string
  quote: string
  photoUrl: string
}

const stories: Story[] = [
  {
    name: 'أحمد الشهري',
    subtitle: 'صاحب متجر أزياء',
    quote: 'زد غيّرت حياتي بالكامل. كنت أبيع عبر الإنستغرام وكان الأمر فوضوياً، الآن لدي متجر احترافي وعملائي سعداء ومبيعاتي تضاعفت.',
    photoUrl: 'https://zid-website.directus.app/assets/a1b2c3d4-e5f6-7a8b-9c0d-1e2f3a4b5c6d',
  },
  {
    name: 'سارة المطيري',
    subtitle: 'مؤسسة متجر عطور',
    quote: 'الدعم الفني في زد لا يُصدق. في كل مرة واجهت مشكلة، كان الفريق جاهزاً للمساعدة بسرعة واحترافية. أنصح كل من يريد بدء تجارته.',
    photoUrl: 'https://zid-website.directus.app/assets/b2c3d4e5-f6a7-8b9c-0d1e-2f3a4b5c6d7e',
  },
  {
    name: 'خالد العتيبي',
    subtitle: 'تاجر إلكترونيات',
    quote: 'ما يميز زد هو سهولة الاستخدام مع القدرات المتقدمة. فتحت متجري في يوم واحد وبدأت أبيع في نفس الأسبوع. النتائج تجاوزت توقعاتي.',
    photoUrl: 'https://zid-website.directus.app/assets/c3d4e5f6-a7b8-9c0d-1e2f-3a4b5c6d7e8f',
  },
  {
    name: 'نورة القحطاني',
    subtitle: 'بائعة مستحضرات طبيعية',
    quote: 'أدوات التسويق في زد ساعدتني كثيراً. أستطيع إدارة إعلاناتي وبريدي الإلكتروني من مكان واحد. مبيعاتي الشهرية ارتفعت ثلاثة أضعاف.',
    photoUrl: 'https://zid-website.directus.app/assets/d4e5f6a7-b8c9-0d1e-2f3a-4b5c6d7e8f9a',
  },
  {
    name: 'فهد الدوسري',
    subtitle: 'صاحب مطعم وكافيه',
    quote: 'نظام الطلبات عبر زد جعل حياتي أسهل. كل طلب ينظّم نفسه تلقائياً. وفّرت وقتاً كبيراً وأصبحت أركز على جودة منتجاتي.',
    photoUrl: 'https://zid-website.directus.app/assets/e5f6a7b8-c9d0-1e2f-3a4b-5c6d7e8f9a0b',
  },
  {
    name: 'لمى السبيعي',
    subtitle: 'مصممة أزياء',
    quote: 'قوالب زد الجميلة أعطت متجري هوية احترافية دون أي تكلفة إضافية. عملائي دائماً يمدحون شكل الموقع وسهولة التنقل فيه.',
    photoUrl: 'https://zid-website.directus.app/assets/f6a7b8c9-d0e1-2f3a-4b5c-6d7e8f9a0b1c',
  },
]

const carouselRef = ref<HTMLElement | null>(null)
const currentPage = ref(0)
const itemsPerPage = ref(3)
const cardWidth = ref(0)
const gap = 24

const dots = computed(() => {
  return Array.from({ length: Math.ceil(stories.length / itemsPerPage.value) })
})

const currentTranslate = computed(() => {
  if (!cardWidth.value) return 0
  const slideWidth = cardWidth.value + gap
  return currentPage.value * itemsPerPage.value * slideWidth * -1
})

function updateItemsPerPage() {
  const w = window.innerWidth
  if (w < 640) itemsPerPage.value = 1
  else if (w < 1024) itemsPerPage.value = 2
  else itemsPerPage.value = 3
}

function updateCardWidth() {
  if (!carouselRef.value) return
  const containerWidth = carouselRef.value.offsetWidth
  cardWidth.value = (containerWidth - (itemsPerPage.value - 1) * gap) / itemsPerPage.value
}

function next() {
  if (currentPage.value < dots.value.length - 1) {
    currentPage.value++
  } else {
    currentPage.value = 0
  }
}

function prev() {
  if (currentPage.value > 0) {
    currentPage.value--
  } else {
    currentPage.value = dots.value.length - 1
  }
}

function goTo(index: number) {
  currentPage.value = index
}

onMounted(() => {
  updateItemsPerPage()
  updateCardWidth()
  window.addEventListener('resize', () => {
    updateItemsPerPage()
    updateCardWidth()
  })
})
</script>
