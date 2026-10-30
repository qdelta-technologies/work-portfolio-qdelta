export interface AdCreativeItem {
  id: string;
  title: string;
  slotNumber: number;
  image?: string;
}

export const adCreativesData: AdCreativeItem[] = [
  {
    id: "ad-1",
    title: "Ad Creative 01",
    slotNumber: 1,
  },
  {
    id: "ad-2",
    title: "Ad Creative 02",
    slotNumber: 2,
  },
  {
    id: "ad-3",
    title: "Ad Creative 03",
    slotNumber: 3,
  },
  {
    id: "ad-4",
    title: "Ad Creative 04",
    slotNumber: 4,
  },
  {
    id: "ad-5",
    title: "Ad Creative 05",
    slotNumber: 5,
  },
];
