<template>
  <div>
    <TheHeader />
    <main>
      <HeroSection />
      <ClientMarquee />
      <StatsSection />
      <BusinessTypesGrid />
      <FeaturesSection />
      <MerchantStoriesCarousel />
      <WhyZidSection />
    </main>
    <TheFooter />
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'زد - منصة التجارة الإلكترونية الأولى في السعودية',
  meta: [
    {
      name: 'description',
      content: 'أنشئ متجرك الإلكتروني مجاناً مع زد، المنصة الرائدة للتجارة الإلكترونية في المملكة العربية السعودية',
    },
    {
      property: 'og:title',
      content: 'زد - ابنِ متجرك الإلكتروني',
    },
    {
      property: 'og:description',
      content: 'منصة التجارة الإلكترونية الأولى في السعودية',
    },
  ],
})
</script>
