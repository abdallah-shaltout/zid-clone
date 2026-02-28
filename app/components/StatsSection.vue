<template>
  <section class="py-20 bg-white">
    <div class="container mx-auto px-4 lg:px-8">
      <!-- Section Header -->
      <div class="text-center mb-16">
        <h2 class="text-3xl lg:text-4xl font-bold text-dark-lavender mb-4">
          أرقام تتحدث عن نفسها
        </h2>
        <p class="text-gray-500 max-w-xl mx-auto">
          نحن نفخر بثقة آلاف التجار ومئات الملايين من العملاء
        </p>
      </div>

      <!-- Stats Grid -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
        <div
          v-for="(stat, index) in stats"
          :key="index"
          class="relative group bg-white border border-gray-100 rounded-3xl p-8 lg:p-10 text-center hover:border-primary/30 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300"
        >
          <!-- Icon -->
          <div class="w-16 h-16 mx-auto mb-6 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
            <img :src="stat.iconUrl" :alt="stat.label" class="w-8 h-8 object-contain" />
          </div>

          <!-- Number -->
          <div class="flex items-end justify-center gap-2 mb-3">
            <span class="text-5xl lg:text-6xl font-bold text-dark-lavender">{{ stat.number }}</span>
            <span class="text-2xl font-semibold text-primary mb-1">{{ stat.unit }}</span>
          </div>

          <!-- Label -->
          <p class="text-gray-500 text-sm font-medium">{{ stat.label }}</p>

          <!-- Decoration -->
          <div class="absolute top-4 left-4 w-2 h-2 rounded-full bg-primary/20 group-hover:bg-primary/40 transition-colors"></div>
          <div class="absolute bottom-4 right-4 w-1.5 h-1.5 rounded-full bg-primary/15 group-hover:bg-primary/35 transition-colors"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
interface Stat {
  number: string
  unit: string
  label: string
  iconUrl: string
}

const stats: Stat[] = [
  {
    number: '+13,500',
    unit: 'تاجر',
    label: 'تاجر يثق في منصة زد لإدارة أعماله',
    iconUrl: 'https://zid-website.directus.app/assets/3a4b5c6d-7e8f-9a0b-1c2d-3e4f5a6b7c8d',
  },
  {
    number: '+10',
    unit: 'مليار',
    label: 'ريال سعودي قيمة المبيعات عبر منصتنا',
    iconUrl: 'https://zid-website.directus.app/assets/4b5c6d7e-8f9a-0b1c-2d3e-4f5a6b7c8d9e',
  },
  {
    number: '+15',
    unit: 'مليون',
    label: 'عميل يتسوق من متاجر زد حول المنطقة',
    iconUrl: 'https://zid-website.directus.app/assets/5c6d7e8f-9a0b-1c2d-3e4f-5a6b7c8d9e0f',
  },
]
</script>
