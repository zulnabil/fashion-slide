import { FashionCategory, FashionItem } from "~/app/types/feature";

export const products: FashionItem[] = [
  {
    id: "1",
    title: "Summer Breeze Sundress",
    description: "Light and airy sundress perfect for warm days",
    category: FashionCategory.Dresses,
    store: {
      name: "Zara",
      image: "https://example.com/zara-logo.png",
    },
    images: [
      {
        id: "img-001",
        url: "/images/fashion-001-1.jpg",
      },
      {
        id: "img-002",
        url: "/images/fashion-001-2.jpg",
      },
    ],
  },
  {
    id: "2",
    title: "Blue Jeans Denim",
    description: "Timeless leather jacket for a cool, edgy look",
    category: FashionCategory.Outerwear,
    store: {
      name: "AllSaints",
      image: "https://example.com/allsaints-logo.png",
    },
    images: [
      {
        id: "img-001",
        url: "/images/fashion-002-1.jpg",
      },
      {
        id: "img-002",
        url: "/images/fashion-002-2.jpg",
      },
      {
        id: "img-003",
        url: "/images/fashion-002-3.jpg",
      },
      {
        id: "img-004",
        url: "/images/fashion-002-4.jpg",
      },
    ],
  },
  {
    id: "3",
    title: "Silk Scarf Collection",
    description: "Elegant silk scarves in various patterns",
    category: FashionCategory.Accessories,
    store: {
      name: "Hermès",
      image: "https://example.com/hermes-logo.png",
    },
    images: [
      {
        id: "img-001",
        url: "/images/fashion-003-1.jpg",
      },
      {
        id: "img-002",
        url: "/images/fashion-003-2.jpg",
      },
      {
        id: "img-003",
        url: "/images/fashion-003-3.jpg",
      },
    ],
  },
  {
    id: "4",
    title: "Athletic Performance Sneakers",
    description: "High-performance sneakers for serious athletes",
    category: FashionCategory.Footwear,
    store: {
      name: "Nike",
      image: "https://example.com/nike-logo.png",
    },
    images: [
      {
        id: "img-001",
        url: "/images/fashion-004-1.jpg",
      },
      {
        id: "img-002",
        url: "/images/fashion-004-2.jpg",
      },
      {
        id: "img-003",
        url: "/images/fashion-004-3.jpg",
      },
      {
        id: "img-004",
        url: "/images/fashion-004-4.jpg",
      },
    ],
  },
  {
    id: "5",
    title: "Vintage Inspired Sunglasses",
    description: "Retro-style sunglasses with modern UV protection",
    category: FashionCategory.Eyewear,
    store: {
      name: "Ray-Ban",
      image: "https://example.com/rayban-logo.png",
    },
    images: [
      {
        id: "img-001",
        url: "/images/fashion-005-1.jpg",
      },
      {
        id: "img-002",
        url: "/images/fashion-005-2.jpg",
      },
      {
        id: "img-003",
        url: "/images/fashion-005-3.jpg",
      },
      {
        id: "img-004",
        url: "/images/fashion-005-4.jpg",
      },
    ],
  },
  {
    id: "6",
    title: "Designer Handbag",
    description: "Luxury leather handbag with signature design",
    category: FashionCategory.Bags,
    store: {
      name: "Gucci",
      image: "https://example.com/gucci-logo.png",
    },
    images: [
      {
        id: "img-001",
        url: "/images/fashion-002-1.jpg",
      },
      {
        id: "img-002",
        url: "/images/fashion-002-2.jpg",
      },
      {
        id: "img-003",
        url: "/images/fashion-002-3.jpg",
      },
      {
        id: "img-004",
        url: "/images/fashion-002-4.jpg",
      },
    ],
  },
  {
    id: "7",
    title: "Smart Casual Blazer",
    description: "Versatile blazer for both office and casual wear",
    category: FashionCategory.Jackets,
    store: {
      name: "J.Crew",
      image: "https://example.com/jcrew-logo.png",
    },
    images: [
      {
        id: "img-001",
        url: "/images/fashion-001-1.jpg",
      },
      {
        id: "img-002",
        url: "/images/fashion-001-2.jpg",
      },
    ],
  },
  {
    id: "8",
    title: "Bohemian Maxi Skirt",
    description: "Flowing maxi skirt with vibrant patterns",
    category: FashionCategory.Skirts,
    store: {
      name: "Free People",
      image: "https://example.com/freepeople-logo.png",
    },
    images: [
      {
        id: "img-001",
        url: "/images/fashion-003-1.jpg",
      },
      {
        id: "img-002",
        url: "/images/fashion-003-2.jpg",
      },
      {
        id: "img-003",
        url: "/images/fashion-003-3.jpg",
      },
    ],
  },
  {
    id: "9",
    title: "Luxury Wristwatch",
    description: "Precision-crafted timepiece with elegant design",
    category: FashionCategory.Accessories,
    store: {
      name: "Rolex",
      image: "https://example.com/rolex-logo.png",
    },
    images: [
      {
        id: "img-001",
        url: "/images/fashion-002-1.jpg",
      },
      {
        id: "img-002",
        url: "/images/fashion-002-2.jpg",
      },
      {
        id: "img-003",
        url: "/images/fashion-002-3.jpg",
      },
      {
        id: "img-004",
        url: "/images/fashion-002-4.jpg",
      },
    ],
  },
  {
    id: "10",
    title: "Eco-friendly Yoga Set",
    description:
      "Sustainable yoga top and leggings made from recycled materials",
    category: FashionCategory.Activewear,
    store: {
      name: "Lululemon",
      image: "https://example.com/lululemon-logo.png",
    },
    images: [
      {
        id: "img-001",
        url: "/images/fashion-002-1.jpg",
      },
      {
        id: "img-002",
        url: "/images/fashion-002-2.jpg",
      },
      {
        id: "img-003",
        url: "/images/fashion-002-3.jpg",
      },
      {
        id: "img-004",
        url: "/images/fashion-002-4.jpg",
      },
    ],
  },
];
