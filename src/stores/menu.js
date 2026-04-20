import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useMenuStore = defineStore('menu', () => {
  // State
  const language = ref('en')

  // Translations
  const translations = computed(() => ({
    en: {
      restaurantName: 'Romanat Restaurant',
      categories: {
        brakfast: 'Breakfast',
        pasta: 'Pasta',
        burger: 'Burger',
        pizza: 'Pizza',
        sandwich: 'Sandwich',
        wrap: 'Wrap',
        fish: 'Fish',
        'traditiona-ethiopian-food': 'Traditional Ethiopian Food',
        salad: 'Salad',
        juice: 'Juice',
        yogurt: 'Yogurt',
        cake: 'Cake',
        'hot-drink': 'Hot Drink',
        'soft-drink': 'Soft Drink',
        'ice-drink': 'Ice Drink',
        soup: 'Soup'
      }
    },
    am: {
      restaurantName: 'ሮማናት ሬስቶራንት',
      categories: {
        brakfast: 'ቁርስ',
        pasta: 'ፓስታ',
        burger: 'በርገር',
        pizza: 'ፒዛ',
        sandwich: 'ሳንድዊች',
        wrap: 'ጥቅል',
        fish: 'ዓሣ',
        'traditiona-ethiopian-food': 'ባህላዊ የኢትዮጵያ ምግብ',
        salad: 'ሰላጣ',
        juice: 'ጭማቂ',
        yogurt: 'እርጎ',
        cake: 'ኬክ',
        'hot-drink': 'ትኩስ መጠጥ',
        'soft-drink': 'ለስላሳ መጠጥ',
        'ice-drink': 'አይስ መጠጥ',
        soup: 'ሾርባ'
      }
    }
  }))

  const t = computed(() => translations.value[language.value])

  const categories = computed(() => Object.keys(t.value.categories).map(id => ({
    id,
    label: t.value.categories[id]
  })))

  // Actions
  function setLanguage(lang) {
    language.value = lang
  }

  return {
    language,
    t,
    categories,
    setLanguage
  }
})
