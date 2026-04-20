<template>
  <div class="min-h-screen bg-brand-bg food-bg">
    <!-- Header -->
    <AppHeader 
      :show-back="!!selectedCategory" 
      @back="selectedCategory = null" 
    />

    <!-- Category Grid (Home) -->
    <Transition name="fade" mode="out-in">
      <main v-if="!selectedCategory" key="home" class="px-4 pt-6 pb-12 relative z-10">
        <div class="max-w-2xl mx-auto">
          <!-- Welcome -->
          <div class="text-center mb-8">
            <div class="gold-line mx-auto mb-4"></div>
            <p class="text-sm text-brand-gold-dark tracking-[0.2em] uppercase font-medium">
              {{ menuStore.language === 'en' ? 'Our Menu' : 'የእኛ ሜኑ' }}
            </p>
          </div>

          <!-- Category Cards -->
          <div class="grid grid-cols-2 gap-4">
            <button
              v-for="cat in menuStore.categories"
              :key="cat.id"
              @click="openCategory(cat.id)"
              class="category-card text-left"
            >
              <span class="text-3xl block mb-3">{{ getCategoryIcon(cat.id) }}</span>
              <h2 class="font-display font-bold text-brand-charcoal text-base leading-tight">
                {{ cat.label }}
              </h2>
              <p class="text-xs text-gray-400 mt-1.5">
                {{ getCategoryCount(cat.id) }} {{ menuStore.language === 'en' ? 'items' : 'አይነቶች' }}
              </p>
            </button>
          </div>
        </div>
      </main>

      <!-- Category Detail Page -->
      <main v-else key="detail" class="px-4 pt-6 pb-12 relative z-10">
        <div class="max-w-2xl mx-auto">
          <!-- Category Header -->
          <div class="text-center mb-6">
            <span class="text-4xl block mb-3">{{ getCategoryIcon(selectedCategory) }}</span>
            <h2 class="font-display font-bold text-2xl text-brand-charcoal">
              {{ getCategoryLabel(selectedCategory) }}
            </h2>
            <div class="gold-line mx-auto mt-3"></div>
          </div>

          <!-- Menu Items -->
          <div class="bg-white rounded-3xl px-5 py-2" style="border: 1px solid rgba(196,154,108,0.1); box-shadow: 0 2px 16px rgba(0,0,0,0.04);">
            <div
              v-for="item in getCategoryItems(selectedCategory)"
              :key="item.id"
              class="menu-item-row"
            >
              <div class="flex items-start justify-between gap-4">
                <div class="flex-1 min-w-0">
                  <h3 class="font-semibold text-brand-charcoal text-[0.95rem] leading-snug">
                    {{ item.name[menuStore.language] }}
                  </h3>
                  <p v-if="item.description[menuStore.language]" class="text-sm text-gray-400 mt-1 leading-relaxed">
                    {{ item.description[menuStore.language] }}
                  </p>
                </div>
                <span class="price-text text-sm mt-0.5">
                  {{ formatPrice(item.price) }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </Transition>

    <!-- Footer -->
    <footer class="text-center py-6 relative z-10">
      <div class="section-divider max-w-xs mx-auto mb-4"></div>
      <p class="text-xs text-gray-400">
        {{ menuStore.language === 'en' ? 'Prices include VAT & service charge' : 'ዋጋዎች ተ.እ.ታ እና የአገልግሎት ክፍያ ያካትታሉ' }}
      </p>
    </footer>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useMenuStore } from '@/stores/menu'
import AppHeader from '@/components/AppHeader.vue'
import { menuData } from '@/data/menuData'

const menuStore = useMenuStore()
const selectedCategory = ref(null)

const categoryIcons = {
  brakfast: '🍳', pasta: '🍝', burger: '🍔', pizza: '🍕',
  sandwich: '🥪', wrap: '🌯', fish: '🐟',
  'traditiona-ethiopian-food': '🥘', salad: '🥗', juice: '🧃',
  yogurt: '🥛', cake: '🍰', 'hot-drink': '☕',
  'soft-drink': '🥤', 'ice-drink': '🧊', soup: '🍲'
}

function getCategoryIcon(id) { return categoryIcons[id] || '🍽️' }

function getCategoryLabel(id) {
  return menuStore.t.categories[id] || id
}

function getCategoryCount(id) {
  const cat = menuData.find(c => c.id === id)
  return cat ? cat.items.length : 0
}

function getCategoryItems(id) {
  const cat = menuData.find(c => c.id === id)
  return cat ? cat.items : []
}

function formatPrice(price) {
  return `ETB ${price.toFixed(0)}`
}

function openCategory(id) {
  selectedCategory.value = id
  window.scrollTo({ top: 0, behavior: 'smooth' })
}
</script>
