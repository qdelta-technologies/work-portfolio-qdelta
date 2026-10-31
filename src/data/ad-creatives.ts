export interface AdCreativeItem {
  id: string;
  title: string;
  slotNumber: number;
  image?: string;
  category?: string;
}

export const adCreativesData: AdCreativeItem[] = [
  {
    id: "ad-1",
    title: "Burger Layers Exploded",
    category: "Food & Beverage",
    slotNumber: 1,
    image: "/images/ad-creatives/burger-layers.jpg",
  },
  {
    id: "ad-2",
    title: "Fanta Exploded View",
    category: "Beverage Campaign",
    slotNumber: 2,
    image: "/images/ad-creatives/fanta-exploded-view.jpg",
  },
  {
    id: "ad-3",
    title: "Brooke Bond Taj Mahal Tea",
    category: "Product & Packaging",
    slotNumber: 3,
    image: "/images/ad-creatives/taj-mahal-tea.jpg",
  },
  {
    id: "ad-4",
    title: "Dabur Chyawanprash Immunity",
    category: "Health & Wellness",
    slotNumber: 4,
    image: "/images/ad-creatives/dabur-chyawanprash.jpg",
  },
  {
    id: "ad-5",
    title: "Lay's Cream & Onion Billboard",
    category: "OOH Billboard Creative",
    slotNumber: 5,
    image: "/images/ad-creatives/lays-billboard.jpg",
  },
  {
    id: "ad-6",
    title: "Doritos Sweet Chilli Sci-Fi",
    category: "Gaming & Sci-Fi Campaign",
    slotNumber: 6,
    image: "/images/ad-creatives/doritos-sweet-chilli.jpg",
  },
];
