<template>
  <section class="py-20 bg-gray-50/50">
    <div class="container mx-auto px-4 lg:px-8">
      <!-- Section Header -->
      <div class="text-center mb-16">
        <span class="inline-block px-4 py-1.5 text-xs font-semibold text-primary bg-primary/10 rounded-full mb-4 uppercase tracking-wider">
          لمن صُمِّم زد
        </span>
        <h2 class="text-3xl lg:text-4xl xl:text-5xl font-bold text-dark-lavender leading-tight mb-4">
          زد يخدم كل نوع من الأعمال
        </h2>
        <p class="text-gray-500 max-w-2xl mx-auto text-lg">
          سواء كنت بدأت للتو أو تدير إمبراطورية تجارية، لدينا الحل الأمثل لك
        </p>
      </div>

      <!-- Business Types Grid -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div
          v-for="(type, index) in businessTypes"
          :key="index"
          class="group relative bg-white rounded-3xl overflow-hidden border border-gray-100 hover:border-primary/20 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 cursor-pointer"
        >
          <!-- Image -->
          <div class="relative overflow-hidden h-64">
            <img
              :src="type.imageUrl"
              :alt="type.title"
              class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-dark-lavender/80 via-dark-lavender/20 to-transparent"></div>

            <!-- Number badge -->
            <div class="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center">
              <span class="text-white text-xs font-bold">{{ String(index + 1).padStart(2, '0') }}</span>
            </div>
          </div>

          <!-- Content -->
          <div class="p-6">
            <h3 class="text-lg font-bold text-dark-lavender mb-2 group-hover:text-primary transition-colors duration-200">
              {{ type.title }}
            </h3>
            <p class="text-gray-500 text-sm leading-relaxed">{{ type.description }}</p>

            <!-- Arrow -->
            <div class="flex items-center gap-2 mt-4 text-primary text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 -translate-x-2 group-hover:translate-x-0">
              <span>اعرف أكثر</span>
              <svg class="w-4 h-4 rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
interface BusinessType {
  title: string
  description: string
  imageUrl: string
}

const businessTypes: BusinessType[] = [
  {
    title: 'الرواد',
    description: 'لأصحاب الأفكار الطموحة الذين يريدون تحويل رؤيتهم إلى واقع تجاري ناجح',
    imageUrl: 'https://zid-website.directus.app/assets/3c2d6e4f-1a5b-7c8d-9e0f-1a2b3c4d5e6f',
  },
  {
    title: 'الأبطال المحليون',
    description: 'للمتاجر المحلية التي تريد التوسع والوصول لعملاء جدد عبر الفضاء الرقمي',
    imageUrl: 'https://zid-website.directus.app/assets/4d3e7f5a-2b6c-8d9e-0f1a-2b3c4d5e6f7a',
  },
  {
    title: 'الرواد الرقميون',
    description: 'للأعمال الإلكترونية التي تريد أدوات أكثر احترافية لتسريع نموها',
    imageUrl: 'https://zid-website.directus.app/assets/5e4f8a6b-3c7d-9e0f-1a2b-3c4d5e6f7a8b',
  },
  {
    title: 'نجوم التوسع',
    description: 'للشركات الكبرى التي تبحث عن منصة قادرة على استيعاب نموها المتسارع',
    imageUrl: 'https://zid-website.directus.app/assets/6f5a9b7c-4d8e-0f1a-2b3c-4d5e6f7a8b9c',
  },
]
</script>
