import type { BrandConfig } from "@/types/brand";

/**
 * SINGLE SOURCE OF TRUTH.
 *
 * To rebrand this website for a different jewellery business, edit ONLY this
 * file and the Cloudinary asset URLs. No component code should change.
 */
export const BRAND: BrandConfig = {
  businessName: "Dazzles Collections",
  tagline: "Trusted Jewellery Store in Chalakudy",
  description:
    "Dazzles Collections is Chalakudy's trusted destination for exquisite gold, diamond, and silver jewellery. Serving Chalakudy with timeless craftsmanship and elegant designs for every celebration.",

  logo: "/icons/logo.svg",
  favicon: "/favicon.ico",

  heroVideo:
    "https://res.cloudinary.com/fylz5e3j/video/upload/v1782936959/VN20260702_013328_tbexfn.mp4",

  storyVideos: [
    {
      quote: "ലാളിത്യത്തിലെ പൂർണ്ണത.",
      description:
        "അണിയാൻ തീരെ ഭാരമില്ലാത്ത, എന്നാൽ കണ്ണഞ്ചിപ്പിക്കുന്ന ഡിസൈനുകൾ. നിങ്ങളുടെ ഓരോ സാധാരണ ദിവസത്തെയും മനോഹരമാക്കാൻ ഇവ മതിയാകും.",
      video:
        "https://res.cloudinary.com/fylz5e3j/video/upload/v1782936959/VN20260702_013328_tbexfn.mp4",
      segments: { startAt: 0, loopEnd: 8 },
    },
    {
      quote: "കൈകളിൽ വിരിയുന്ന വിസ്മയം.",
      description:
        "ഓരോ ആഭരണവും ഓരോ കലാരൂപമാണ്. അതിസൂക്ഷ്മമായി, തികഞ്ഞ പൂർണ്ണതയോടെ രൂപപ്പെടുത്തിയെടുത്തവ. നിങ്ങളുടെ സ്വപ്നങ്ങൾക്ക് സ്വർണ്ണത്തിൽ ജീവൻ വയ്ക്കുമ്പോൾ.",
      video:
        "https://res.cloudinary.com/fylz5e3j/video/upload/v1782936959/VN20260702_013328_tbexfn.mp4",
      segments: { startAt: 32, loopEnd: 40 },
    },
    {
      quote: "ചാലക്കുടിയുടെ ഹൃദയത്തിൽ നിന്ന്.",
      description:
        "ഈ നാടിന്റെ പൈതൃകവും പുതുമയും ഒത്തുചേരുന്ന ആഭരണങ്ങൾ. തലമുറകളായി നിങ്ങൾ നൽകുന്ന വിശ്വാസത്തിന് സ്വർണ്ണത്തേക്കാൾ തിളക്കമുണ്ട്.",
      video:
        "https://res.cloudinary.com/fylz5e3j/video/upload/v1782936959/VN20260702_013328_tbexfn.mp4",
      segments: { startAt: 16, loopEnd: 24 },
    },
  ],

  storeImages: [
    "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWkMEQKsm76MNqkDpMJ0l5-ThXVs7Tqxcs3OObrHsihSrUwxj0kq2u2ag069nFfXBXuIsW90Nupc4cs9AkL9ZpBdBZLnE_dbBwqZg4i7oeLlw7jnnK0I_71GD5QWVObfORVJJl3aAg=s1600",
    "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWn69ZhQD6MepmCBLcPqsiddOCPFbJKipi56Zr4t0F9z-nhTovunMVMx3isnzP5W81Fj-61nekvG57YniNif9jtP1_NFk7QGqla93SR6CJ9pV9MbRTx77mM6b99chL_2FVhBezoVuNHN8gzM=s1600",
    "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWlNHblWc_GDabQfPNxgGkvaRukpzW08GWFCLlv4rOn5o-CKkDeJcg11D77vbHPejR4yX1XrWmbVQ6YRKbJ9xJ6LQaI6aQ3-gLibCKIobjjGZSUJGJfXw5a-ShOIp8lXDkDzMIWsvAIWcBaf=s1600",
    "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWnwS6PMJoKimRM8PGWegsCtUZ_YPZJcmO7hOoJKajSemIl_ClaS_2rR9OZ8r8ZegHHKXGxSeJu0kWp4Ue4uke6Twqp4uGN7FVj9jj76nKg8D07EKJIiEtJuQwi_2YxDf8HKKwlMqmNODJMT=s1600",
  ],

  address: "Main road, near Kalyan silks, Chalakudy, Kerala 680307",
  city: "Chalakudy",
  state: "Kerala",
  pincode: "680307",

  phone: "+919539073676",
  whatsapp: "919539073676",
  email: "",

  mapsLink:
    "https://www.google.com/maps/search/?api=1&query=Dazzles%20Collections&query_place_id=ChIJIzno-WoCCDsRVbZUjwtjfqQ",

  openingHours: "Mon–Sat: 9:30 AM – 8:00 PM · Sunday: 10:00 AM – 7:00 PM",

  instagram: "",
  facebook: "",

  seo: {
    title: "Dazzles Collections | Jewellery in Chalakudy",
    description:
      "Dazzles Collections is Chalakudy's trusted destination for exquisite gold, diamond, and silver jewellery. Serving Chalakudy with timeless craftsmanship and elegant designs for every celebration.",
    keywords: [
      "Dazzles Collections",
      "jewellery Chalakudy",
      "gold jewellery Chalakudy",
      "diamond jewellery Chalakudy",
      "silver jewellery Chalakudy",
      "jewellery store Kerala",
    ],
    canonical: "https://dazzles-collections-chalakudy.vercel.app",
    ogImage:
      "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWkMEQKsm76MNqkDpMJ0l5-ThXVs7Tqxcs3OObrHsihSrUwxj0kq2u2ag069nFfXBXuIsW90Nupc4cs9AkL9ZpBdBZLnE_dbBwqZg4i7oeLlw7jnnK0I_71GD5QWVObfORVJJl3aAg=s1600",
  },

  faq: [],

  whatsappMessage:
    "Hello Dazzles Collections, I'd like to know more about your jewellery collections.",
};
