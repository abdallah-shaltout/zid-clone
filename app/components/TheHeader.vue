<template>
  <header
    class="sticky top-0 z-50 w-full bg-white border-b border-gray-100 shadow-sm"
    :class="{ 'shadow-md': isScrolled }"
  >
    <div class="container mx-auto px-4 lg:px-8">
      <div class="flex items-center justify-between h-16 lg:h-20">

        <!-- Logo -->
        <a href="/" class="flex-shrink-0">
          <img
            src="https://zid-website.directus.app/assets/a8fd3690-d927-4c77-a5f0-db72e479b830"
            alt="زد"
            class="h-8 lg:h-10 w-auto"
          />
        </a>

        <!-- Desktop Navigation -->
        <nav class="hidden lg:flex items-center gap-1">
          <div
            v-for="item in navItems"
            :key="item.label"
            class="relative"
            @mouseenter="item.hasDropdown ? openDropdown(item.label) : null"
            @mouseleave="item.hasDropdown ? closeDropdown() : null"
          >
            <a
              :href="item.href || '#'"
              class="flex items-center gap-1 px-3 py-2 text-sm font-medium text-gray-700 hover:text-primary rounded-lg hover:bg-purple-50 transition-colors duration-200"
              :class="{ 'text-primary': activeDropdown === item.label }"
            >
              {{ item.label }}
              <svg
                v-if="item.hasDropdown"
                class="w-4 h-4 transition-transform duration-200"
                :class="{ 'rotate-180': activeDropdown === item.label }"
                fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"
              >
                <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </a>

            <!-- Dropdown -->
            <div
              v-if="item.hasDropdown && item.dropdownItems"
              v-show="activeDropdown === item.label"
              class="absolute top-full right-0 mt-1 w-64 bg-white rounded-2xl shadow-xl border border-gray-100 py-2 z-50"
            >
              <a
                v-for="sub in item.dropdownItems"
                :key="sub.label"
                :href="sub.href"
                class="flex items-start gap-3 px-4 py-3 hover:bg-purple-50 transition-colors duration-150 group"
              >
                <div class="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                  <span class="text-primary text-xs">{{ sub.icon }}</span>
                </div>
                <div>
                  <div class="text-sm font-medium text-gray-800">{{ sub.label }}</div>
                  <div v-if="sub.description" class="text-xs text-gray-500 mt-0.5">{{ sub.description }}</div>
                </div>
              </a>
            </div>
          </div>
        </nav>

        <!-- Desktop CTAs -->
        <div class="hidden lg:flex items-center gap-3">
          <a
            href="#"
            class="px-4 py-2 text-sm font-medium text-gray-700 hover:text-primary transition-colors duration-200"
          >
            تسجيل الدخول
          </a>
          <a
            href="#"
            class="px-5 py-2.5 text-sm font-semibold text-white bg-primary hover:bg-primary-dark rounded-xl transition-colors duration-200 shadow-sm shadow-primary/30"
          >
            أنشئ متجرك
          </a>
        </div>

        <!-- Mobile Menu Button -->
        <button
          class="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          @click="isMobileMenuOpen = !isMobileMenuOpen"
          aria-label="القائمة"
        >
          <svg v-if="!isMobileMenuOpen" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
          <svg v-else class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>

    <!-- Mobile Menu -->
    <div
      v-show="isMobileMenuOpen"
      class="lg:hidden border-t border-gray-100 bg-white"
    >
      <div class="container mx-auto px-4 py-4 space-y-1">
        <div v-for="item in navItems" :key="item.label">
          <button
            class="w-full flex items-center justify-between px-3 py-3 text-sm font-medium text-gray-700 hover:text-primary hover:bg-purple-50 rounded-lg transition-colors"
            @click="item.hasDropdown ? toggleMobileDropdown(item.label) : null"
          >
            <span>{{ item.label }}</span>
            <svg
              v-if="item.hasDropdown"
              class="w-4 h-4 transition-transform"
              :class="{ 'rotate-180': activeMobileDropdown === item.label }"
              fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"
            >
              <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          <div
            v-if="item.hasDropdown && item.dropdownItems"
            v-show="activeMobileDropdown === item.label"
            class="mr-4 mt-1 space-y-1"
          >
            <a
              v-for="sub in item.dropdownItems"
              :key="sub.label"
              :href="sub.href"
              class="block px-3 py-2 text-sm text-gray-600 hover:text-primary hover:bg-purple-50 rounded-lg transition-colors"
            >
              {{ sub.label }}
            </a>
          </div>
        </div>

        <div class="pt-4 border-t border-gray-100 flex flex-col gap-2">
          <a href="#" class="block text-center px-4 py-3 text-sm font-medium text-gray-700 border border-gray-200 rounded-xl hover:bg-gray-50">
            تسجيل الدخول
          </a>
          <a href="#" class="block text-center px-4 py-3 text-sm font-semibold text-white bg-primary rounded-xl">
            أنشئ متجرك
          </a>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
interface DropdownItem {
  label: string
  href: string
  description?: string
  icon?: string
}

interface NavItem {
  label: string
  href?: string
  hasDropdown?: boolean
  dropdownItems?: DropdownItem[]
}

const navItems: NavItem[] = [
  {
    label: 'الحلول',
    hasDropdown: true,
    dropdownItems: [
      { label: 'متجر إلكتروني', href: '#', description: 'أنشئ متجرك الإلكتروني باحترافية', icon: '🛒' },
      { label: 'نقاط البيع', href: '#', description: 'نظام متكامل لإدارة المبيعات', icon: '💳' },
      { label: 'تطبيق الجوال', href: '#', description: 'تجربة تسوق سلسة على الجوال', icon: '📱' },
      { label: 'التسويق', href: '#', description: 'أدوات تسويقية متكاملة', icon: '📣' },
    ],
  },
  { label: 'الأسعار', href: '#' },
  {
    label: 'لماذا زد',
    hasDropdown: true,
    dropdownItems: [
      { label: 'قصص النجاح', href: '#', description: 'تجارب تجار ناجحين مع زد', icon: '⭐' },
      { label: 'المميزات', href: '#', description: 'اكتشف ما يجعل زد مختلفة', icon: '✨' },
    ],
  },
  {
    label: 'كيف يخدمك زد',
    hasDropdown: true,
    dropdownItems: [
      { label: 'للمبتدئين', href: '#', description: 'ابدأ رحلتك في التجارة الإلكترونية', icon: '🚀' },
      { label: 'للأعمال المتوسطة', href: '#', description: 'نمو مستدام لعملك', icon: '📈' },
      { label: 'للشركات الكبرى', href: '#', description: 'حلول مؤسسية متكاملة', icon: '🏢' },
    ],
  },
  {
    label: 'المصادر',
    hasDropdown: true,
    dropdownItems: [
      { label: 'المدونة', href: '#', description: 'مقالات ونصائح للتجار', icon: '📝' },
      { label: 'مركز المساعدة', href: '#', description: 'دعم فني متخصص', icon: '💡' },
      { label: 'الأكاديمية', href: '#', description: 'تعلم وطور مهاراتك', icon: '🎓' },
    ],
  },
  { label: 'انتقل إلى زد', href: '#' },
]

const activeDropdown = ref<string | null>(null)
const activeMobileDropdown = ref<string | null>(null)
const isMobileMenuOpen = ref(false)
const isScrolled = ref(false)

let closeTimer: ReturnType<typeof setTimeout> | null = null

function openDropdown(label: string) {
  if (closeTimer) clearTimeout(closeTimer)
  activeDropdown.value = label
}

function closeDropdown() {
  closeTimer = setTimeout(() => {
    activeDropdown.value = null
  }, 150)
}

function toggleMobileDropdown(label: string) {
  activeMobileDropdown.value = activeMobileDropdown.value === label ? null : label
}

onMounted(() => {
  window.addEventListener('scroll', () => {
    isScrolled.value = window.scrollY > 10
  })
})
</script>
