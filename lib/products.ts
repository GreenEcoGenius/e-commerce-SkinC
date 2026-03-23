export type Product = {
  slug: string;
  name: string;
  price: number;
  image: string;
  category: "women" | "men" | "accessories";
  collection?: "premium" | "feels";
  type?: "sweats" | "tshirts" | "limited" | "new";
  label: string;
  description: string;
};

export const products: Product[] = [
  {
    slug: "isyf-essential-tee-women",
    name: "ISYF Essential Tee",
    price: 35,
    image: "/product-tshirt.jpg",
    category: "women",
    collection: "premium",
    type: "tshirts",
    label: "ISYF Premium",
    description: "A wardrobe essential, elevated. Our signature tee features premium organic cotton, embroidered ISYF logo, and a relaxed contemporary fit that feels as good as it looks.",
  },
  {
    slug: "isyf-embroidered-hoodie-women",
    name: "ISYF Embroidered Hoodie",
    price: 89,
    image: "/product-hoodie.jpg",
    category: "women",
    collection: "premium",
    type: "sweats",
    label: "ISYF Premium",
    description: "Our signature hoodie with intricate tone-on-tone embroidery. 400gsm organic cotton fleece, dropped shoulders, and a slightly oversized fit for everyday luxury.",
  },
  {
    slug: "isyf-feels-message-tee-women",
    name: "ISYF FEELS Message Tee",
    price: 29.9,
    image: "/product-feels-tee.jpg",
    category: "women",
    collection: "feels",
    type: "tshirts",
    label: "ISYF FEELS",
    description: "Say it without saying it. This relaxed-fit tee carries a bold typographic message on the chest. 100% organic cotton, pre-washed for that lived-in softness.",
  },
  {
    slug: "isyf-oversized-tee-women",
    name: "ISYF Oversized Tee",
    price: 42,
    image: "/p-oversized-tee-w.jpg",
    category: "women",
    collection: "feels",
    type: "tshirts",
    label: "ISYF FEELS",
    description: "The perfect oversized silhouette. Dropped shoulders, extended length, and a boxy cut in heavyweight 240gsm cotton. A statement of effortless cool.",
  },
  {
    slug: "isyf-premium-sweater-women",
    name: "ISYF Premium Sweater",
    price: 95,
    image: "/p-sweater-w.jpg",
    category: "women",
    collection: "premium",
    type: "sweats",
    label: "ISYF Premium",
    description: "Crafted from brushed organic cotton, this crewneck sweater features subtle embroidered details. Relaxed fit with ribbed cuffs and hem for a refined, comfortable feel.",
  },
  {
    slug: "isyf-limited-hoodie-women",
    name: "ISYF Limited Drop Hoodie",
    price: 110,
    image: "/p-limited-hoodie-w.jpg",
    category: "women",
    collection: "premium",
    type: "limited",
    label: "ISYF Premium — Limited",
    description: "Part of our limited capsule. Unique embroidery artwork, numbered edition. Once sold out, gone forever. Heavy 450gsm organic cotton, oversized fit.",
  },
  {
    slug: "isyf-essential-tee-men",
    name: "ISYF Essential Tee",
    price: 35,
    image: "/p-essential-tee-m.jpg",
    category: "men",
    collection: "premium",
    type: "tshirts",
    label: "ISYF Premium",
    description: "A wardrobe essential, elevated. Premium organic cotton with embroidered ISYF logo. Relaxed fit designed for everyday wear with an understated luxury feel.",
  },
  {
    slug: "isyf-embroidered-hoodie-men",
    name: "ISYF Embroidered Hoodie",
    price: 89,
    image: "/p-hoodie-m.jpg",
    category: "men",
    collection: "premium",
    type: "sweats",
    label: "ISYF Premium",
    description: "Our signature hoodie with intricate tone-on-tone embroidery. 400gsm organic cotton fleece, dropped shoulders, and an oversized fit for effortless street style.",
  },
  {
    slug: "isyf-feels-message-tee-men",
    name: "ISYF FEELS Message Tee",
    price: 29.9,
    image: "/p-feels-tee-m.jpg",
    category: "men",
    collection: "feels",
    type: "tshirts",
    label: "ISYF FEELS",
    description: "Wear what you feel. Bold typographic message on heavyweight organic cotton. Boxy cut, pre-washed fabric, and a relaxed streetwear silhouette.",
  },
  {
    slug: "isyf-feels-graphic-hoodie-men",
    name: "ISYF FEELS Graphic Hoodie",
    price: 69,
    image: "/p-graphic-hoodie-m.jpg",
    category: "men",
    collection: "feels",
    type: "sweats",
    label: "ISYF FEELS",
    description: "Street energy meets comfort. Bold graphic print on the chest, kangaroo pocket, and a washed finish that gets better with every wear.",
  },
  {
    slug: "isyf-premium-sweater-men",
    name: "ISYF Premium Sweater",
    price: 95,
    image: "/p-sweater-m.jpg",
    category: "men",
    collection: "premium",
    type: "sweats",
    label: "ISYF Premium",
    description: "Clean lines, premium fabric. This crewneck sweater in brushed organic cotton features minimal embroidered branding. Relaxed contemporary fit.",
  },
  {
    slug: "isyf-new-arrival-tee-men",
    name: "ISYF New Season Tee",
    price: 38,
    image: "/p-new-tee-m.jpg",
    category: "men",
    collection: "feels",
    type: "new",
    label: "ISYF FEELS — New",
    description: "Fresh from the new season drop. Updated fit, new colorway, same emotional connection. Organic cotton, relaxed cut, minimal branding.",
  },
  {
    slug: "isyf-cap",
    name: "ISYF Cap",
    price: 39,
    image: "/product-cap.jpg",
    category: "accessories",
    label: "Accessories",
    description: "The finishing touch. Unstructured six-panel cap in washed cotton with tonal embroidered ISYF logo. Adjustable strap for a perfect fit.",
  },
  {
    slug: "isyf-tote-bag",
    name: "ISYF Tote Bag",
    price: 25,
    image: "/product-tote.jpg",
    category: "accessories",
    label: "Accessories",
    description: "Carry the feeling. Heavyweight organic cotton canvas tote with screen-printed ISYF branding. Spacious interior, reinforced handles, built to last.",
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getRelatedProducts(slug: string, limit = 4): Product[] {
  const product = getProductBySlug(slug);
  if (!product) return products.slice(0, limit);
  return products
    .filter((p) => p.slug !== slug && (p.category === product.category || p.collection === product.collection))
    .slice(0, limit);
}

export function filterProducts(params: { category?: string; collection?: string; type?: string }): Product[] {
  return products.filter((p) => {
    if (params.category && p.category !== params.category) return false;
    if (params.collection && p.collection !== params.collection) return false;
    if (params.type && p.type !== params.type) return false;
    return true;
  });
}

export function formatPrice(price: number): string {
  return `€${price.toFixed(2)}`;
}
