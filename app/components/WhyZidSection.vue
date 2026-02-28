<template>
  <section class="py-20 bg-white">
    <div class="container mx-auto px-4 lg:px-8">
      <!-- Section Header -->
      <div class="text-center mb-16">
        <span class="inline-block px-4 py-1.5 text-xs font-semibold text-primary bg-primary/10 rounded-full mb-4 uppercase tracking-wider">
          لماذا زد
        </span>
        <h2 class="text-3xl lg:text-4xl xl:text-5xl font-bold text-dark-lavender leading-tight mb-4">
          ما الذي يجعل زد مختلفة؟
        </h2>
        <p class="text-gray-500 max-w-2xl mx-auto text-lg">
          نحن لسنا مجرد منصة — نحن شريكك في النجاح
        </p>
      </div>

      <!-- Differentiators Grid -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
        <div
          v-for="(item, index) in differentiators"
          :key="index"
          class="group relative p-8 rounded-3xl border border-gray-100 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 cursor-default"
        >
          <!-- Number accent -->
          <div class="absolute top-6 left-6 text-5xl font-black text-gray-50 group-hover:text-primary/5 transition-colors leading-none select-none">
            {{ String(index + 1).padStart(2, '0') }}
          </div>

          <!-- Icon -->
          <div class="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300 relative">
            <HugeiconsIcon :icon="item.icon" :size="28" class="text-primary" :stroke-width="1.5" />
          </div>

          <h3 class="text-lg font-bold text-dark-lavender mb-3 relative">
            {{ item.title }}
          </h3>
          <p class="text-gray-500 text-sm leading-relaxed relative">
            {{ item.description }}
          </p>

          <!-- Hover decoration -->
          <div class="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary to-primary-light rounded-b-3xl scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-right"></div>
        </div>
      </div>

      <!-- Bottom CTA -->
      <div class="text-center mt-16">
        <a
          href="#"
          class="inline-flex items-center gap-3 px-8 py-4 text-base font-semibold text-white bg-dark-lavender hover:bg-dark-lavender-light rounded-2xl transition-all duration-200 shadow-xl shadow-dark-lavender/30 hover:-translate-y-0.5"
        >
          اكتشف كل مميزات زد
          <svg class="w-5 h-5 rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </a>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { HugeiconsIcon } from '@hugeicons/vue'
import { UserGroupIcon, Settings01Icon, ChartIncreaseIcon, Location01Icon } from '@hugeicons/core-free-icons'

interface Differentiator {
  title: string
  description: string
  icon: unknown
}

const differentiators: Differentiator[] = [
  {
    title: 'مجتمع تجار نشط',
    description: 'انضم لمجتمع يضم آلاف التجار الناجحين وتبادل الخبرات والنصائح معهم لتنمية عملك.',
    icon: UserGroupIcon,
  },
  {
    title: 'مصمم لاحتياجاتك',
    description: 'تم تطوير زد خصيصاً للسوق السعودي والخليجي بفهم عميق للبيئة التجارية المحلية.',
    icon: Settings01Icon,
  },
  {
    title: 'يركز على نموك',
    description: 'لا تكتفِ بالبيع — حقق نمواً مستداماً مع أدوات تحليل وتسويق مدمجة ذكية.',
    icon: ChartIncreaseIcon,
  },
  {
    title: 'خبرة محلية عميقة',
    description: 'فريقنا يفهم السوق المحلي ويتحدث لغتك، مع دعم متوفر باللغة العربية على مدار الساعة.',
    icon: Location01Icon,
  },
]
</script>
