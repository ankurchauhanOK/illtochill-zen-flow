// Single Source of Truth for IllToChill Content
export const siteContent = {
  hero: {
    video: "https://res.cloudinary.com/demo/video/upload/v1/samples/cld-sample-video.mp4", // Placeholder video
    title: "Wear strength. Share hope.",
    subtitle: "Expressive fashion & stories for chronic and mental health warriors.",
    cta: { label: "Shop the Collection", href: "/collections/all" },
    tags: ["Chronic Warriors", "Mental Fighters", "Emotional Strength"]
  },
  chronic: {
    heading: "Chronic Conditions",
    subheading: "Designed for resilience. Built for everyday courage.",
    video: "https://res.cloudinary.com/demo/video/upload/v1/samples/cld-sample-video.mp4", // Placeholder video
    columns: [
      [
        { title: "Chronic Pain Hoodie", slug: "/collections/chronic-pain", kind: "hoodie", h: 64 },
        { title: "Autoimmune Sticker", slug: "/products/autoimmune-sticker", kind: "sticker", h: 40 },
        { title: "Chronic Fatigue Tee", slug: "/products/chronic-fatigue-tee", kind: "tshirt", h: 56 }
      ],
      [
        { title: "Migraine Survivor Cap", slug: "/products/migraine-cap", kind: "cap", h: 48 },
        { title: "Fibromyalgia Shirt", slug: "/products/fibro-shirt", kind: "tshirt", h: 72 },
        { title: "Autoimmune Hoodie", slug: "/products/autoimmune-hoodie", kind: "hoodie", h: 52 }
      ]
    ]
  },
  mental: {
    heading: "Mental Conditions",
    subheading: "Give feelings a voice. Wear your truth.",
    video: "https://res.cloudinary.com/demo/video/upload/v1/samples/cld-sample-video.mp4", // Placeholder video
    columns: [
      [
        { title: "Anxiety Hoodie", slug: "/products/anxiety-hoodie", kind: "hoodie", h: 56 },
        { title: "Depression Sticker", slug: "/products/depression-sticker", kind: "sticker", h: 72 },
        { title: "PTSD Cap", slug: "/products/ptsd-cap", kind: "cap", h: 48 }
      ],
      [
        { title: "BPD Tee", slug: "/products/bpd-tee", kind: "tshirt", h: 64 },
        { title: "OCD Shirt", slug: "/products/ocd-shirt", kind: "tshirt", h: 40 },
        { title: "ADHD Hoodie", slug: "/products/adhd-hoodie", kind: "hoodie", h: 60 }
      ]
    ]
  },
  stories: [
    { quote: "ILLTOCHILL helped me feel seen.", author: "Aarohi · Chronic Pain" },
    { quote: "It's like therapy I can wear.", author: "Zee · Anxiety" },
    { quote: "People ask about my shirt—then listen.", author: "Mahi · Autoimmune" },
    { quote: "The designs speak for me when I can't find the words.", author: "Jordan · Depression" },
    { quote: "Finally, fashion that understands my journey.", author: "Sam · ADHD" }
  ]
};