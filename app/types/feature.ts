// Enum for categories
export enum FashionCategory {
  Dresses = "Dresses",
  Outerwear = "Outerwear",
  Accessories = "Accessories",
  Footwear = "Footwear",
  Eyewear = "Eyewear",
  Bags = "Bags",
  Jackets = "Jackets",
  Skirts = "Skirts",
  Activewear = "Activewear",
}

// Interface for images
interface FashionImage {
  id: string
  url: string
}

// Interface for store
interface Store {
  name: string
  image: string
}

// Main interface for fashion items
export interface FashionItem {
  id: string
  title: string
  description: string
  category: FashionCategory
  store: Store
  images: FashionImage[]
}
