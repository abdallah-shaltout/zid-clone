<template>
  <footer class="bg-dark-lavender text-white">
    <!-- CTA Section -->
    <div class="border-b border-white/10">
      <div class="container mx-auto px-4 lg:px-8 py-16 lg:py-20">
        <div class="flex flex-col lg:flex-row items-center justify-between gap-8">
          <div>
            <h2 class="text-3xl lg:text-4xl xl:text-5xl font-bold text-white leading-tight mb-3">
              جاهز تفتح متجرك؟
            </h2>
            <p class="text-white/60 text-lg">
              انضم لآلاف التجار الناجحين اليوم — مجاناً
            </p>
          </div>
          <div class="flex flex-col sm:flex-row items-center gap-4 flex-shrink-0">
            <a
              href="#"
              class="w-full sm:w-auto px-8 py-4 text-base font-semibold text-dark-lavender bg-white hover:bg-gray-100 rounded-2xl transition-all duration-200 text-center shadow-xl shadow-black/20 hover:-translate-y-0.5"
            >
              أنشئ متجرك مجاناً
            </a>
            <a
              href="#"
              class="w-full sm:w-auto px-8 py-4 text-base font-semibold text-white border-2 border-white/30 hover:border-white/60 hover:bg-white/10 rounded-2xl transition-all duration-200 text-center"
            >
              تحدث مع المبيعات
            </a>
          </div>
        </div>
      </div>
    </div>

    <!-- Navigation Columns -->
    <div class="container mx-auto px-4 lg:px-8 py-16">
      <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8">
        <div
          v-for="(column, index) in footerColumns"
          :key="index"
        >
          <h4 class="text-sm font-semibold text-white/90 mb-5 uppercase tracking-wider">
            {{ column.title }}
          </h4>
          <ul class="space-y-3">
            <li v-for="(link, li) in column.links" :key="li">
              <a
                :href="link.href"
                class="text-sm text-white/50 hover:text-white transition-colors duration-200"
              >
                {{ link.label }}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <!-- Bottom Bar -->
    <div class="border-t border-white/10">
      <div class="container mx-auto px-4 lg:px-8 py-8">
        <div class="flex flex-col lg:flex-row items-center justify-between gap-6">

          <!-- Logo + Language -->
          <div class="flex items-center gap-6">
            <a href="/">
              <img
                src="https://zid-website.directus.app/assets/a8fd3690-d927-4c77-a5f0-db72e479b830"
                alt="زد"
                class="h-8 w-auto brightness-0 invert"
              />
            </a>
            <button class="flex items-center gap-2 text-xs text-white/50 hover:text-white transition-colors border border-white/20 hover:border-white/40 rounded-lg px-3 py-1.5">
              <svg class="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <circle cx="12" cy="12" r="10" />
                <path d="M2 12h20M12 2a15.3 15.3 0 010 20M12 2a15.3 15.3 0 000 20" stroke-linecap="round"/>
              </svg>
              عربي
            </button>
          </div>

          <!-- Social Icons -->
          <div class="flex items-center gap-3">
            <a
              v-for="social in socialLinks"
              :key="social.name"
              :href="social.href"
              :aria-label="social.name"
              class="w-9 h-9 rounded-xl bg-white/10 hover:bg-primary flex items-center justify-center transition-all duration-200 hover:scale-110"
              target="_blank"
              rel="noopener noreferrer"
            >
              <HugeiconsIcon :icon="social.icon" :size="16" :stroke-width="1.5" class="text-white" />
            </a>
          </div>

          <!-- App Stores -->
          <div class="flex items-center gap-3">
            <a href="#" class="block hover:opacity-80 transition-opacity">
              <img
                src="https://zid-website.directus.app/assets/app-store-badge-ar"
                alt="App Store"
                class="h-9 w-auto"
                onerror="this.style.display='none'"
              />
              <div class="h-9 px-4 flex items-center gap-2 bg-white/10 hover:bg-white/20 rounded-xl transition-colors border border-white/10">
                <svg class="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98l-.09.06c-.22.14-2.2 1.28-2.18 3.81.03 3.02 2.65 4.03 2.68 4.04l-.05.22zM13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                </svg>
                <div class="text-xs text-white">
                  <div class="text-white/60 text-[10px]">Download on the</div>
                  <div class="font-semibold leading-tight">App Store</div>
                </div>
              </div>
            </a>
            <a href="#" class="block hover:opacity-80 transition-opacity">
              <div class="h-9 px-4 flex items-center gap-2 bg-white/10 hover:bg-white/20 rounded-xl transition-colors border border-white/10">
                <svg class="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3.18 23.76a2 2 0 001.76-.2l11.72-6.93-3.05-3.05-10.43 10.18zM20.49 10.32L16.85 8.2l-3.43 3.43 3.43 3.43 3.66-2.15a1.54 1.54 0 000-2.59zM1.11.3A1.93 1.93 0 000 2.06v19.88a1.93 1.93 0 001.11 1.76L13.13 12 1.11.3zM14.94 12l-3.43-3.43L3.18.24A2 2 0 001.42 0L14.94 12z"/>
                </svg>
                <div class="text-xs text-white">
                  <div class="text-white/60 text-[10px]">Get it on</div>
                  <div class="font-semibold leading-tight">Google Play</div>
                </div>
              </div>
            </a>
          </div>
        </div>

        <!-- Legal -->
        <div class="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/40">
          <p>© 2024 زد - جميع الحقوق محفوظة</p>
          <p>سجل تجاري رقم 1010518918 | ترخيص تجارة إلكترونية رقم 2035051939</p>
          <div class="flex items-center gap-4">
            <a href="#" class="hover:text-white/70 transition-colors">سياسة الخصوصية</a>
            <a href="#" class="hover:text-white/70 transition-colors">الشروط والأحكام</a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { HugeiconsIcon } from '@hugeicons/vue'
import { SnapchatIcon, Linkedin01Icon, TwitterIcon, YoutubeIcon, InstagramIcon } from '@hugeicons/core-free-icons'

interface FooterLink {
  label: string
  href: string
}

interface FooterColumn {
  title: string
  links: FooterLink[]
}

interface SocialLink {
  name: string
  href: string
  icon: unknown
}

const footerColumns: FooterColumn[] = [
  {
    title: 'الحلول',
    links: [
      { label: 'المتجر الإلكتروني', href: '#' },
      { label: 'نقاط البيع', href: '#' },
      { label: 'تطبيق الجوال', href: '#' },
      { label: 'المدفوعات', href: '#' },
      { label: 'الشحن والتوصيل', href: '#' },
    ],
  },
  {
    title: 'لماذا زد',
    links: [
      { label: 'قصص النجاح', href: '#' },
      { label: 'المقارنة', href: '#' },
      { label: 'الأمان', href: '#' },
      { label: 'الأداء', href: '#' },
    ],
  },
  {
    title: 'كيف يخدمك زد',
    links: [
      { label: 'للمبتدئين', href: '#' },
      { label: 'للأعمال المتوسطة', href: '#' },
      { label: 'للمؤسسات', href: '#' },
      { label: 'للعلامات الكبرى', href: '#' },
    ],
  },
  {
    title: 'المصادر',
    links: [
      { label: 'المدونة', href: '#' },
      { label: 'الأكاديمية', href: '#' },
      { label: 'البودكاست', href: '#' },
      { label: 'حالات الاستخدام', href: '#' },
    ],
  },
  {
    title: 'الدعم',
    links: [
      { label: 'مركز المساعدة', href: '#' },
      { label: 'تواصل معنا', href: '#' },
      { label: 'حالة المنصة', href: '#' },
      { label: 'التوثيق التقني', href: '#' },
    ],
  },
  {
    title: 'متوفر في',
    links: [
      { label: 'المملكة العربية السعودية', href: '#' },
      { label: 'الإمارات العربية المتحدة', href: '#' },
      { label: 'المملكة الأردنية', href: '#' },
      { label: 'البحرين', href: '#' },
      { label: 'الكويت', href: '#' },
    ],
  },
]

const socialLinks: SocialLink[] = [
  { name: 'سناب شات', href: '#', icon: SnapchatIcon },
  { name: 'لينكد إن', href: '#', icon: Linkedin01Icon },
  { name: 'تويتر / X', href: '#', icon: TwitterIcon },
  { name: 'يوتيوب', href: '#', icon: YoutubeIcon },
  { name: 'إنستغرام', href: '#', icon: InstagramIcon },
]
</script>
