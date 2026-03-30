/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface SEOPageData {
  slug: string;
  keyword: string;
  title: string;
  description: string;
  h1: string;
  intro: string;
  faqs: { q: string; a: string }[];
}

const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");

const gamingKeywords = [
  { slug: "free-fire-stylish-name", keyword: "Free Fire Stylish Name" },
  { slug: "pubg-stylish-name", keyword: "PUBG Stylish Name" },
  { slug: "ff-stylish-name", keyword: "FF Stylish Name" },
  { slug: "bgmi-stylish-name", keyword: "BGMI Stylish Name" },
  { slug: "gaming-stylish-name", keyword: "Gaming Stylish Name" },
  { slug: "cod-mobile-stylish-name", keyword: "COD Mobile Stylish Name" },
  { slug: "roblox-stylish-name", keyword: "Roblox Stylish Name" },
  { slug: "minecraft-stylish-name", keyword: "Minecraft Stylish Name" },
  { slug: "fortnite-stylish-name", keyword: "Fortnite Stylish Name" },
];

const socialMediaKeywords = [
  { slug: "tiktok-stylish-name", keyword: "TikTok Stylish Name" },
  { slug: "instagram-stylish-name", keyword: "Instagram Stylish Name" },
  { slug: "youtube-stylish-name", keyword: "YouTube Stylish Name" },
  { slug: "facebook-stylish-name", keyword: "Facebook Stylish Name" },
  { slug: "whatsapp-stylish-name", keyword: "WhatsApp Stylish Name" },
  { slug: "twitter-stylish-name", keyword: "Twitter Stylish Name" },
  { slug: "snapchat-stylish-name", keyword: "Snapchat Stylish Name" },
];

const multiLanguageKeywords = [
  { slug: "urdu-stylish-name", keyword: "Urdu Stylish Name", lang: "ur" },
  { slug: "hindi-stylish-name", keyword: "Hindi Stylish Name", lang: "hi" },
  { slug: "arabic-stylish-name", keyword: "Arabic Stylish Name", lang: "ar" },
  { slug: "bangla-stylish-name", keyword: "Bangla Stylish Name", lang: "bn" },
];

const generalKeywords = [
  { slug: "stylish-name-boy", keyword: "Stylish Name Boy" },
  { slug: "stylish-name-girl", keyword: "Stylish Name Girl" },
  { slug: "beautiful-stylish-name", keyword: "Beautiful Stylish Name" },
  { slug: "cool-stylish-name", keyword: "Cool Stylish Name" },
  { slug: "attitude-stylish-name", keyword: "Attitude Stylish Name" },
  { slug: "urdu-stylish-name-maker", keyword: "Urdu Stylish Name Maker" },
  { slug: "english-to-urdu-stylish-name", keyword: "English to Urdu Stylish Name" },
  { slug: "happy-birthday-stylish-name", keyword: "Happy Birthday Stylish Name" },
  { slug: "rajput-stylish-name", keyword: "Rajput Stylish Name" },
  { slug: "yadav-stylish-name", keyword: "Yadav Stylish Name" },
  { slug: "stylish-name-design", keyword: "Stylish Name Design" },
  { slug: "stylish-name-for-fb", keyword: "Stylish Name for FB" },
  { slug: "stylish-name-for-pubg", keyword: "Stylish Name for PUBG" },
  { slug: "stylish-name-for-free-fire", keyword: "Stylish Name for Free Fire" },
];

const alphabetKeywords = alphabet.map(letter => ({
  slug: `${letter}-stylish-name`,
  keyword: `${letter.toUpperCase()} Stylish Name`
}));

const allKeywords = [
  ...gamingKeywords,
  ...socialMediaKeywords,
  ...multiLanguageKeywords,
  ...generalKeywords,
  ...alphabetKeywords
];

export const SEO_DATA: Record<string, SEOPageData> = allKeywords.reduce((acc, item) => {
  const isGaming = gamingKeywords.some(k => k.slug === item.slug);
  const isSocial = socialMediaKeywords.some(k => k.slug === item.slug);
  
  let intro = `Looking for the best ${item.keyword}? Our free stylish name generator helps you create unique and pro names instantly. Stand out with cool fonts and symbols. Perfect for gaming, social media, and branding.`;
  
  if (isGaming) {
    intro = `Level up your gaming profile with the best ${item.keyword}. Whether you play Free Fire, PUBG, or BGMI, our generator creates pro-level nicknames with cool symbols and unique fonts that work in all games.`;
  } else if (isSocial) {
    intro = `Make your social media profile stand out with a ${item.keyword}. Our tool converts your normal text into aesthetic and stylish fonts perfect for TikTok, Instagram, and Facebook bios.`;
  }

  acc[item.slug] = {
    slug: item.slug,
    keyword: item.keyword,
    title: `${item.keyword} Generator 2026 | Copy & Paste Stylish Names`,
    description: `Generate 1000+ ${item.keyword} instantly. Copy & paste cool, pro, and unique stylish names for Free Fire, PUBG, TikTok, Instagram & more.`,
    h1: `Best ${item.keyword} 2026`,
    intro,
    faqs: [
      { q: `What is a ${item.keyword}?`, a: `It's a decorative version of your name created using Unicode characters and symbols to look stylish on ${isGaming ? 'gaming' : isSocial ? 'social media' : 'various'} platforms.` },
      { q: "Is it free to use?", a: "Yes, our stylish name generator is 100% free with no hidden costs." },
      { q: "Will it work in my game/app?", a: "Most modern apps and games support these Unicode characters. Simply copy and paste to test!" }
    ]
  };
  return acc;
}, {} as Record<string, SEOPageData>);

export const DEFAULT_SEO: SEOPageData = {
  slug: "",
  keyword: "Stylish Name",
  title: "Stylish Name Generator 2026 | Copy & Paste Stylish Names",
  description: "Generate 1000+ stylish names instantly. Copy & paste for Free Fire, PUBG, TikTok, Instagram & more.",
  h1: "Best Stylish Name Generator 2026",
  intro: "Instantly convert normal text into stylish Unicode fonts, symbols, and decorative names for social media, gaming, and branding.",
  faqs: [
    { q: "What is a stylish name generator?", a: "It's a tool that converts normal text into fancy Unicode characters." },
    { q: "Where can I use these names?", a: "You can use them on Instagram, TikTok, Free Fire, PUBG, and more." },
    { q: "Do I need to install anything?", a: "No, it's a completely web-based tool." }
  ]
};
