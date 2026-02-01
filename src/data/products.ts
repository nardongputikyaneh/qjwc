export interface Product {
  id: string;
  name: string;
  category: string;
  categorySlug: string;
  description: string;
  specs: {
    size?: string;
    thickness?: string;
    width?: string;
    length?: string;
    material?: string;
    grade?: string;
    weight?: string;
    colors?: string;
  };
  image: string;
  price?: number;
  inStock: boolean;
  featured?: boolean;
}

export const products: Product[] = [
  // Roofing
  {
    id: "roofing-tilespan-1",
    name: "Tilespan Roofing",
    category: "Roofing",
    categorySlug: "roofing",
    description: "Premium tilespan roofing sheets with elegant tile-like appearance. Perfect for residential and commercial buildings.",
    specs: {
      size: "0.4mm x 1.0m x 3.0m",
      thickness: "0.4mm / 0.5mm / 0.6mm",
      width: "1.0m",
      length: "3.0m",
      material: "Pre-painted Steel",
      colors: "Blue / Green / Red / White / Beige / Borwn / Gray / Black (Special Color)"
    },
    image: "/public/tilespan1.jpg",
    inStock: true,
    featured: true,
  },
  {
    id: "roofing-ribtype-1",
    name: "Ribtype Roofing",
    category: "Roofing",
    categorySlug: "roofing",
    description: "Durable ribtype roofing panels ideal for industrial and agricultural structures.",
    specs: {
      size: "0.4mm x 1.1m x 3.0m",
      thickness: "0.4mm / 0.5mm / 0.6mm",
      width: "1.0m",
      length: "3.0m",
      material: "Galvanized Steel",
      colors: "Blue, Green, White",
    },
    image: "/public/rib1.png",
    inStock: true,
  },
  {
    id: "roofing-corrugated-1",
    name: "Corrugated Roofing",
    category: "Roofing",
    categorySlug: "roofing",
    description: "Classic corrugated design for reliable weather protection. Easy to install and maintain.",
    specs: {
      size: "0.4mm x 0.9m x 2.4m",
      thickness: "0.4mm / 0.5mm / 0.6mm",
      width: "1.1",
      length: "2.4m",
      material: "Pre-painted Steel",
    },
    image: "/public/cor1.jpg",
    inStock: true,
  },
  // Steel Deck
  {
    id: "steel-deck-1",
    name: "Steel Deck Panel - 50mm",
    category: "Steel Deck",
    categorySlug: "steel-deck",
    description: "High-strength steel deck panel for floor and roof applications. Provides excellent structural support.",
    specs: {
      size: "50mm x 150mm x 6.0m",
      thickness: "0.8mm / 1.0mm",
      width: "150mm",
      length: "6.0m",
      material: "Galvanized Steel",
      grade: "Grade 60/90",
    },
    image: "/steeldeck1.png",
    inStock: true,
    featured: true,
  },
  {
    id: "steel-deck-2",
    name: "Steel Deck Panel - 75mm",
    category: "Steel Deck",
    categorySlug: "steel-deck",
    description: "Heavy-duty steel deck panel for demanding structural applications.",
    specs: {
      size: "75mm x 150mm x 6.0m",
      thickness: "1.0mm",
      width: "150mm",
      length: "6.0m",
      material: "Galvanized Steel",
      grade: "Grade 60/90",
    },
    image: "/steeldeck4.png",
    inStock: true,
  },
  // Ficem Board
  {
    id: "ficem-board-1",
    name: "Ficem Board - 6mm",
    category: "Ficem Board",
    categorySlug: "ficem-board",
    description: "Fiber cement board for interior and exterior wall cladding. Water-resistant and durable.",
    specs: {
      size: "6mm x 4ft x 8ft",
      thickness: "6mm",
      width: "4ft",
      length: "8ft",
      material: "Fiber Cement",
    },
    image: "/ficem3.jpg",
    inStock: true,
  },
  {
    id: "ficem-board-2",
    name: "Ficem Board - 9mm",
    category: "Ficem Board",
    categorySlug: "ficem-board",
    description: "Thicker fiber cement board for enhanced durability and sound insulation.",
    specs: {
      size: "9mm x 4ft x 8ft",
      thickness: "9mm",
      width: "4ft",
      length: "8ft",
      material: "Fiber Cement",
    },
    image: "/ficem1.jpg",
    inStock: true,
  },
  // Gypsum Board
  {
    id: "gypsum-board-1",
    name: "Regular Gypsum Board - 12.7mm",
    category: "Gypsum Board",
    categorySlug: "gypsum-board",
    description: "Standard gypsum board for interior walls and ceilings. Easy to cut and install.",
    specs: {
      size: "12.7mm x 4ft x 8ft",
      thickness: "12.7mm",
      width: "4ft",
      length: "8ft",
      material: "Gypsum",
    },
    image: "/gypsum4.jpg",
    inStock: true,
    featured: true,
  },
  {
    id: "gypsum-board-2",
    name: "Moisture-Resistant Gypsum Board",
    category: "Gypsum Board",
    categorySlug: "gypsum-board",
    description: "Specially treated gypsum board for bathrooms and humid areas.",
    specs: {
      size: "12.7mm x 4ft x 8ft",
      thickness: "12.7mm",
      width: "4ft",
      length: "8ft",
      material: "Moisture-Resistant Gypsum",
    },
    image: "/gypsum2.jpg",
    inStock: true,
  },
  // C Purlins
  {
    id: "c-purlin-1",
    name: "C Purlin - 2\" x 4\" x 6m",
    category: "C Purlins",
    categorySlug: "c-purlins",
    description: "Structural C-shaped steel purlins for roof framing and support structures.",
    specs: {
      size: "2\" x 4\" x 6m",
      thickness: "1.5mm",
      length: "6m",
      material: "Galvanized Steel",
      grade: "Grade 50",
    },
    image: "/cpur2.jpg",
    inStock: true,
  },
  {
    id: "c-purlin-2",
    name: "C Purlin - 2\" x 6\" x 6m",
    category: "C Purlins",
    categorySlug: "c-purlins",
    description: "Heavy-duty C purlins for larger span applications.",
    specs: {
      size: "2\" x 6\" x 6m",
      thickness: "2.0mm",
      length: "6m",
      material: "Galvanized Steel",
      grade: "Grade 50",
    },
    image: "/cpur1.jpg",
    inStock: true,
  },
  // Plywood
  {
    id: "plywood-marine-1",
    name: "Marine Plywood - 3/4\"",
    category: "Plywood",
    categorySlug: "plywood",
    description: "High-quality marine plywood for moisture-resistant applications. Ideal for cabinets and outdoor use.",
    specs: {
      size: "3/4\" x 4ft x 8ft",
      thickness: "3/4\"",
      width: "4ft",
      length: "8ft",
      material: "Marine Grade Plywood",
    },
    image: "/plywood2.jpg",
    inStock: true,
    featured: true,
  },
  {
    id: "plywood-ordinary-1",
    name: "Ordinary Plywood - 1/2\"",
    category: "Plywood",
    categorySlug: "plywood",
    description: "Standard plywood for general construction and interior applications.",
    specs: {
      size: "1/2\" x 4ft x 8ft",
      thickness: "1/2\"",
      width: "4ft",
      length: "8ft",
      material: "Standard Plywood",
    },
    image: "/plywood1.jpg",
    inStock: true,
  },
  // Angle Bar
  {
    id: "angle-bar-1",
    name: "Angle Bar - 2\" x 2\" x 6m",
    category: "Angle Bar",
    categorySlug: "angle-bar",
    description: "Steel angle bar for structural support and framing applications.",
    specs: {
      size: "2\" x 2\" x 6m",
      thickness: "3mm",
      length: "6m",
      material: "Mild Steel",
    },
    image: "/anglebar1.jpg",
    inStock: true,
  },
  {
    id: "angle-bar-2",
    name: "Angle Bar - 1.5\" x 1.5\" x 6m",
    category: "Angle Bar",
    categorySlug: "angle-bar",
    description: "Medium-duty angle bar for general construction needs.",
    specs: {
      size: "1.5\" x 1.5\" x 6m",
      thickness: "3mm",
      length: "6m",
      material: "Mild Steel",
    },
    image: "anglebar2.jpg",
    inStock: true,
  },
];

export const categories = [
  { name: "All Products", slug: "all" },
  { name: "Roofing", slug: "roofing" },
  { name: "Steel Deck", slug: "steel-deck" },
  { name: "Ficem Board", slug: "ficem-board" },
  { name: "Gypsum Board", slug: "gypsum-board" },
  { name: "C Purlins", slug: "c-purlins" },
  { name: "Plywood", slug: "plywood" },
  { name: "Angle Bar", slug: "angle-bar" },
];
