// Centralized category configuration for the entire application
export const CATEGORIES = {
  // Main categories with consistent naming
  ALL: "all",
  T_LIGHT: "tlight",
  JAR: "jar", 
  PILLAR: "pillar",
  GIFT_SETS: "giftsets",
  HOME_DECOR: "homedecor",
  HVAC: "hvac",
  HUMIDIFIERS: "humidifiers",
  RAW_MATERIAL: "rawmaterial"
};

// Category display configuration
export const CATEGORY_CONFIG = {
  [CATEGORIES.ALL]: {
    title: "Our Collections",
    subtitle: "Discover luxury candles for every moment",
    image: "https://images.pexels.com/photos/278549/pexels-photo-278549.jpeg"
  },
  [CATEGORIES.T_LIGHT]: {
    title: "T-Light Candles",
    subtitle: "Perfect for meditation and ambiance",
    image: "https://images.pexels.com/photos/278549/pexels-photo-278549.jpeg"
  },
  [CATEGORIES.JAR]: {
    title: "Jar & Container Candles",
    subtitle: "Long-lasting luxury scents",
    image: "https://images.pexels.com/photos/1652109/pexels-photo-1652109.jpeg"
  },
  [CATEGORIES.PILLAR]: {
    title: "Pillar Candles",
    subtitle: "Classic elegance for any space",
    image: "https://images.pexels.com/photos/278549/pexels-photo-278549.jpeg"
  },
  [CATEGORIES.GIFT_SETS]: {
    title: "Aroma Gift Sets",
    subtitle: "Perfect gifts for loved ones",
    image: "https://images.pexels.com/photos/1652109/pexels-photo-1652109.jpeg"
  },
  [CATEGORIES.HOME_DECOR]: {
    title: "Home Decor",
    subtitle: "Enhance your living space",
    image: "https://images.pexels.com/photos/243125/pexels-photo-243125.jpeg"
  },
  [CATEGORIES.HVAC]: {
    title: "Intelligent Aroma Systems",
    subtitle: "HVAC & AHU Systems for Office Spaces & Luxury Homes",
    image: "https://images.pexels.com/photos/278549/pexels-photo-278549.jpeg"
  },
  [CATEGORIES.HUMIDIFIERS]: {
    title: "Humidifiers",
    subtitle: "Maintain perfect humidity for your space",
    image: "https://images.pexels.com/photos/321444/pexels-photo-321444.jpeg"
  },
  [CATEGORIES.RAW_MATERIAL]: {
    title: "Raw Materials",
    subtitle: "Waxes, Wicks, Fragrances, Moulds & More",
    image: "https://images.pexels.com/photos/1652109/pexels-photo-1652109.jpeg"
  }
};

// Legacy category mapping for backward compatibility
export const LEGACY_CATEGORY_MAP = {
  "jar_candles": CATEGORIES.JAR,
  "pillar_candles": CATEGORIES.PILLAR,
  "arome_gift_sets": CATEGORIES.GIFT_SETS,
  "t_light": CATEGORIES.T_LIGHT,
  "home_decor": CATEGORIES.HOME_DECOR,
  "raw_material": CATEGORIES.RAW_MATERIAL,
  "humidifiers": CATEGORIES.HUMIDIFIERS,
  "hvac": CATEGORIES.HVAC,
};

// Helper function to normalize category names
export const normalizeCategory = (category) => {
  if (!category) return CATEGORIES.ALL;
  
  // Check if it's already a valid category
  if (Object.values(CATEGORIES).includes(category)) {
    return category;
  }
  
  // Check legacy mapping
  if (LEGACY_CATEGORY_MAP[category]) {
    return LEGACY_CATEGORY_MAP[category];
  }
  
  // Log unmapped categories for debugging
  console.log(`Unmapped category: "${category}" - defaulting to "all"`);
  
  // Default to all if not found
  return CATEGORIES.ALL;
};

// Helper function to get category content
export const getCategoryContent = (category) => {
  const normalizedCategory = normalizeCategory(category);
  return CATEGORY_CONFIG[normalizedCategory] || CATEGORY_CONFIG[CATEGORIES.ALL];
};

// All available categories for dropdowns/forms
export const ALL_CATEGORIES = Object.values(CATEGORIES).filter(cat => cat !== CATEGORIES.ALL);

// Category options for forms
export const CATEGORY_OPTIONS = ALL_CATEGORIES.map(category => ({
  value: category,
  label: CATEGORY_CONFIG[category]?.title || category
}));
