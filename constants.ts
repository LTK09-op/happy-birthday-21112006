export const IMAGES = {
  cakeIcon: "/images/cakeicon.png", 
  heroChar: "/images/heroChar.png", 
  heroCake: "/images/heroCake.png",
  gift1: "/images/gift1.jpg",
  gift2: "/images/gift2.jpg",
  gift3: "/images/gift3.jpg",
  gift4: "/images/gift4.jpg",
  gift5: "/images/gift5.jpg",

};

export interface GiftItem {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
}

export const GIFTS: GiftItem[] = [
  {
    id: 1,
    title: "when she was 5 years old 🧸",
    description: "Just look at her smile! She is absolutely adorable and stunningly beautiful.",
    imageUrl: IMAGES.gift1,
  },
  {
    id: 2,
    title: "when she grew up she was 19 years old🫧",
    description: "Here's a photo taken right before her birthday in Canada. It's truly rare to find someone this beautiful; my eyes certainly chose well.",
    imageUrl: IMAGES.gift2,
  },
  {
    id: 3,
    title: "when she belongs to me🌷",
    description: "Happy 409 days of love! This journey is so precious, and I can't wait to celebrate countless more birthdays with you.",
    imageUrl: IMAGES.gift3,
  },
  {
    id: 4,
    title: "princess 🩵",
    description: "I love you so much, so beautiful!.",
    imageUrl: IMAGES.gift4, 
  },
  {
    id: 5,
    title: "so cute ˃ᴗ˂ ",
    description: "She's just too cute.",
    imageUrl: IMAGES.gift5, 
  },
];