export interface AdCreativeItem {
  id: string;
  title: string;
  slotNumber: number;
  image: string;
  category?: string;
  blurDataURL?: string;
}

export const adCreativesData: AdCreativeItem[] = [
  {
    id: "ad-1",
    title: "Burger Layers Exploded",
    category: "Food & Beverage",
    slotNumber: 1,
    image: "/images/ad-creatives/burger-layers.webp",
    blurDataURL:
      "data:image/webp;base64,UklGRoYAAABXRUJQVlA4IHoAAADQAwCdASoQABQAPzmEuVOvKKWisAgB4CcJbACdMoACtQk+GzSJMkAA/oOaW9iL1kIoqXT6Sq7QQ/A0gGdHIOHs6j3zMYNaMKMaXwXPirSqDONJmQNitStqNvEuUNdewZUu6nT9vrYp7wiyFJia/GTWlVIvQbSgkAAAAA==",
  },
  {
    id: "ad-2",
    title: "Fanta Exploded View",
    category: "Beverage Campaign",
    slotNumber: 2,
    image: "/images/ad-creatives/fanta-exploded-view.webp",
    blurDataURL:
      "data:image/webp;base64,UklGRpAAAABXRUJQVlA4IIQAAABQBACdASoQABQAPzmEuVOvKKWisAgB4CcJbACdMoFWZgP2gMul6MJ3Bz44AP21OC8SipS40dRXa5qvvYw9v57cz3825SXt08DHua9NySVulibBQ9147OtEKWnlRxGio3NbUkxXh+hdEq6W38GLQ+FvmooxnbzeQEEYQ36NVg3X1LBYAAA=",
  },
  {
    id: "ad-3",
    title: "Brooke Bond Taj Mahal Tea",
    category: "Product & Packaging",
    slotNumber: 3,
    image: "/images/ad-creatives/taj-mahal-tea.webp",
    blurDataURL:
      "data:image/webp;base64,UklGRogAAABXRUJQVlA4IHwAAADQAwCdASoQABQAPzmEuVOvKKWisAgB4CcJZACdABkt+HWMyWfi8BAA/Kpf/Mx2Ilj786bKghBe1h0L5b5Jn9hJ7eT93MAwudTvsUahvswyGJrl0VZwc/7Jw3Lm3ULZvdyUtLUyvqLEmwZduQtXlbNw6EFG2eC/xCS5AAAA",
  },
  {
    id: "ad-4",
    title: "Dabur Chyawanprash Immunity",
    category: "Health & Wellness",
    slotNumber: 4,
    image: "/images/ad-creatives/dabur-chyawanprash.webp",
    blurDataURL:
      "data:image/webp;base64,UklGRpgAAABXRUJQVlA4IIwAAADwAwCdASoQABQAPzmEuVOvKKWisAgB4CcJbACdMoADUqf7KEKqiqqAAP66AC1KStUxzLsLkEYC1bnYoSiWybo0iL7b1CeHWPl4FGBqDNnQCoi8nJyqipI3elcOgz614UF/mTAT33elPTrBeA39lWyqtFTXkG0vEsJ8bP5pGO4lcAiKyiEocY49q64gAA==",
  },
  {
    id: "ad-5",
    title: "Lay's Cream & Onion Billboard",
    category: "OOH Billboard Creative",
    slotNumber: 5,
    image: "/images/ad-creatives/lays-billboard.webp",
    blurDataURL:
      "data:image/webp;base64,UklGRpoAAABXRUJQVlA4II4AAABQBACdASoQABQAPzmEuVOvKKWisAgB4CcJbACdMoMjbE4PZr6A7LqUgYrAANusacj7ha2qVGJC31zfeBmhU6kAXe8XHHnHpVKA2fPyCz9pmGQBttxOdJ/OS15Z6CGf51AGhDoxZ6K9O0qu9vu7C9yF3X6WrvCky44cHQ0p72ekKMmqWF0D2941/t3YLAAA",
  },
  {
    id: "ad-6",
    title: "Doritos Sweet Chilli Sci-Fi",
    category: "Gaming & Sci-Fi Campaign",
    slotNumber: 6,
    image: "/images/ad-creatives/doritos-sweet-chilli.webp",
    blurDataURL:
      "data:image/webp;base64,UklGRnAAAABXRUJQVlA4IGQAAADQAwCdASoQABQAPzmEuVOvKKWisAgB4CcJZgCdABtsFh97gxyOHwAA/ulCdQ0b0rIuUhUxM0xLDqRoJh5vQPRbQjw92nCbxqMxtuPXMXDSz0hOrtYJDS4UQp8zSEDXlINmJcgA",
  },
];
