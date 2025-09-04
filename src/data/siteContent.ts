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
        { title: "Chronic Pain Warrior", slug: "/products/chronic-pain-hoodie", kind: "hoodie", h: 60 },
        { title: "Spoon Theory Club", slug: "/products/spoon-theory-tee", kind: "tshirt", h: 45 },
        { title: "Invisible Illness Fighter", slug: "/products/invisible-illness-cap", kind: "cap", h: 40 },
        { title: "Pain Don't Stop Me", slug: "/products/pain-strength-hoodie", kind: "hoodie", h: 55 }
      ],
      [
        { title: "Autoimmune Sticker Pack", slug: "/products/autoimmune-stickers", kind: "sticker", h: 35 },
        { title: "Fibromyalgia Strong", slug: "/products/fibro-strength-tee", kind: "tshirt", h: 50 },
        { title: "Migraine Survivor", slug: "/products/migraine-cap", kind: "cap", h: 40 },
        { title: "Autoimmune Warrior", slug: "/products/autoimmune-hoodie", kind: "hoodie", h: 65 }
      ],
      [
        { title: "Chronic Fatigue Truth", slug: "/products/chronic-fatigue-tee", kind: "tshirt", h: 45 },
        { title: "Endometriosis Fighter", slug: "/products/endo-warrior-hoodie", kind: "hoodie", h: 60 },
        { title: "POTS Awareness", slug: "/products/pots-awareness-tee", kind: "tshirt", h: 50 },
        { title: "Lupus Strength", slug: "/products/lupus-strong-cap", kind: "cap", h: 40 }
      ],
      [
        { title: "EDS Zebra Pride", slug: "/products/eds-zebra-hoodie", kind: "hoodie", h: 58 },
        { title: "Chronic Illness Club", slug: "/products/chronic-club-tee", kind: "tshirt", h: 47 },
        { title: "Gastroparesis Fighter", slug: "/products/gastroparesis-tee", kind: "tshirt", h: 52 },
        { title: "Crohn's Warrior", slug: "/products/crohns-warrior-hoodie", kind: "hoodie", h: 62 }
      ],
      [
        { title: "MS Strong", slug: "/products/ms-strength-tee", kind: "tshirt", h: 48 },
        { title: "Arthritis Warrior", slug: "/products/arthritis-fighter-cap", kind: "cap", h: 42 },
        { title: "Diabetes Type 1", slug: "/products/t1d-warrior-hoodie", kind: "hoodie", h: 55 },
        { title: "Spoonie Life", slug: "/products/spoonie-life-sticker", kind: "sticker", h: 38 }
      ]
    ]
  },
  mental: {
    heading: "Mental Health",
    subheading: "Give feelings a voice. Wear your truth.",
    video: "https://res.cloudinary.com/demo/video/upload/v1/samples/cld-sample-video.mp4", // Placeholder video
    columns: [
      [
        { title: "Anxiety Warrior", slug: "/products/anxiety-warrior-hoodie", kind: "hoodie", h: 55 },
        { title: "Depression Fighter", slug: "/products/depression-strength-tee", kind: "tshirt", h: 45 },
        { title: "PTSD Survivor", slug: "/products/ptsd-survivor-cap", kind: "cap", h: 40 },
        { title: "Mental Health Matters", slug: "/products/mh-matters-sticker", kind: "sticker", h: 35 }
      ],
      [
        { title: "BPD Understanding", slug: "/products/bpd-awareness-tee", kind: "tshirt", h: 50 },
        { title: "OCD Truth", slug: "/products/ocd-truth-hoodie", kind: "hoodie", h: 60 },
        { title: "ADHD Brain", slug: "/products/adhd-brain-tee", kind: "tshirt", h: 47 },
        { title: "Bipolar Strong", slug: "/products/bipolar-strength-cap", kind: "cap", h: 42 }
      ],
      [
        { title: "Panic Attack Survivor", slug: "/products/panic-survivor-hoodie", kind: "hoodie", h: 58 },
        { title: "Social Anxiety Club", slug: "/products/social-anxiety-tee", kind: "tshirt", h: 48 },
        { title: "Therapy Squad", slug: "/products/therapy-squad-sticker", kind: "sticker", h: 38 },
        { title: "Self Care First", slug: "/products/self-care-hoodie", kind: "hoodie", h: 62 }
      ],
      [
        { title: "Neurodivergent Pride", slug: "/products/neurodivergent-tee", kind: "tshirt", h: 52 },
        { title: "Mental Health Break", slug: "/products/mh-break-cap", kind: "cap", h: 40 },
        { title: "Autism Acceptance", slug: "/products/autism-pride-hoodie", kind: "hoodie", h: 56 },
        { title: "Trauma Survivor", slug: "/products/trauma-survivor-tee", kind: "tshirt", h: 49 }
      ],
      [
        { title: "Mindfulness Matters", slug: "/products/mindfulness-sticker", kind: "sticker", h: 36 },
        { title: "Recovery Journey", slug: "/products/recovery-hoodie", kind: "hoodie", h: 59 },
        { title: "Emotional Support", slug: "/products/emotional-support-tee", kind: "tshirt", h: 46 },
        { title: "Mental Strength", slug: "/products/mental-strength-cap", kind: "cap", h: 41 }
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