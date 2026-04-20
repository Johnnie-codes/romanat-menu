# Romanat Restaurant Menu

A fast, scannable, mobile-first digital restaurant menu built with Vue 3 and Tailwind CSS.

## Features

- **Mobile-First Design**: Optimized for QR code access and mobile browsers
- **Bilingual Support**: Toggle between English and Amharic
- **Smart Filtering**: Filter by vegetarian, vegan, gluten-free, and spicy level
- **Search**: Quick item lookup
- **Ordering**: Add items to cart and place orders (dine-in or takeaway)
- **Accessibility**: High contrast mode, adjustable font size, screen-reader friendly
- **Performance**: No heavy animations, optimized for low bandwidth

## Tech Stack

- Vue 3 (Composition API)
- Pinia (State Management)
- Tailwind CSS
- Vite

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Build for production:
```bash
npm run build
```

4. Preview production build:
```bash
npm run preview
```

## Project Structure

```
src/
├── components/          # Vue components
│   ├── AppHeader.vue   # Restaurant name + language toggle
│   ├── SearchBar.vue   # Menu search
│   ├── FilterBar.vue   # Dietary filters
│   ├── CategoryNav.vue # Sticky category navigation
│   ├── MenuSection.vue # Category section container
│   ├── MenuItem.vue    # Individual menu item card
│   ├── CartButton.vue  # Floating cart button
│   ├── CartDrawer.vue  # Cart drawer with checkout
│   └── AccessibilityControls.vue
├── stores/
│   └── menu.js         # Pinia store for state management
├── data/
│   └── menuData.js     # Menu items with translations
├── App.vue
├── main.js
└── style.css
```

## Menu Data Structure

Menu items are defined in `src/data/menuData.js` with the following structure:

```javascript
{
  id: 'unique-id',
  name: { en: 'English Name', am: 'Amharic Name' },
  description: { en: 'English Description', am: 'Amharic Description' },
  price: 250, // ETB
  image: null, // or image URL
  dietary: {
    vegetarian: true,
    vegan: false,
    glutenFree: true
  },
  spicyLevel: 2, // 0-3
  tags: ['popular', 'chefChoice', 'new'],
  allergens: ['nuts', 'dairy'],
  isAvailable: true
}
```

## Customization

### Adding Categories
Edit `menuData.js` and the `categories` computed property in `src/stores/menu.js`.

### Changing Colors
Edit `tailwind.config.js` to update the primary color and other theme settings.

### Adding More Languages
Extend the `translations` object in `src/stores/menu.js` with additional language keys.

## Performance

- No heavy JavaScript animations
- Lazy loading for images (when added)
- Optimized bundle with manual code splitting
- CSS purging via Tailwind
- Works offline with proper caching

## License

MIT
