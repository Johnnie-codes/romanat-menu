<template>
  <header class="relative px-4 py-5 border-b" style="border-color: rgba(196,154,108,0.12);" role="banner">
    <div class="relative flex items-center justify-between max-w-2xl mx-auto">
      <!-- Back Button (when in category view) -->
      <button
        v-if="showBack"
        @click="$emit('back')"
        class="flex items-center gap-1.5 text-brand-gold-dark font-medium text-sm hover:text-brand-wine transition-colors"
        aria-label="Back to categories"
      >
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2.5">
          <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7"/>
        </svg>
        {{ menuStore.language === 'en' ? 'Menu' : 'ሜኑ' }}
      </button>

      <!-- Spacer when no back button -->
      <div v-else></div>

      <!-- Logo / Restaurant Name -->
      <div class="absolute left-1/2 -translate-x-1/2 text-center">
        <h1 class="font-display font-bold text-xl text-brand-charcoal leading-tight tracking-tight">
          {{ menuStore.t.restaurantName }}
        </h1>
        <p class="text-[10px] text-brand-gold-dark tracking-[0.15em] uppercase mt-0.5">
          {{ menuStore.language === 'en' ? 'Est. Restaurant' : 'ሬስቶራንት' }}
        </p>
      </div>

      <!-- Language Toggle -->
      <button
        @click="toggleLanguage"
        class="flex items-center gap-1.5 px-3 py-2 rounded-xl text-sm font-medium text-brand-charcoal hover:bg-brand-cream transition-colors"
        :aria-label="menuStore.language === 'en' ? 'Switch to Amharic' : 'Switch to English'"
      >
        <span class="text-base">{{ menuStore.language === 'en' ? '🇪🇹' : '🇬🇧' }}</span>
        <span class="text-xs font-semibold text-gray-500">
          {{ menuStore.language === 'en' ? 'EN' : 'አማ' }}
        </span>
      </button>
    </div>
  </header>
</template>

<script setup>
import { useMenuStore } from '@/stores/menu'

defineProps({
  showBack: { type: Boolean, default: false }
})

defineEmits(['back'])

const menuStore = useMenuStore()

function toggleLanguage() {
  menuStore.setLanguage(menuStore.language === 'en' ? 'am' : 'en')
}
</script>
