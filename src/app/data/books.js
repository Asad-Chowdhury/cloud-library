export const books = [
  {
    id: "story-001",
    title: "The Midnight Archive",
    author: "Elena Marlowe",
    description:
      "A young archivist discovers a hidden wing of a city library where unfinished stories keep rewriting the lives of their readers.",
    category: "Story",
    available_quantity: 7,
    image_url:
      "https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&q=80&w=900",
  },
  {
    id: "tech-001",
    title: "Cloud Native Patterns",
    author: "Rafiq Hossain",
    description:
      "A practical guide to designing resilient services, event-driven systems, and scalable deployment workflows for modern teams.",
    category: "Tech",
    available_quantity: 5,
    image_url:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=900",
  },
  {
    id: "science-001",
    title: "Signals from Saturn",
    author: "Dr. Mira Sen",
    description:
      "An accessible journey through planetary science, radio astronomy, and the search for patterns in the deep solar system.",
    category: "Science",
    available_quantity: 4,
    image_url:
      "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&q=80&w=900",
  },
  {
    id: "story-002",
    title: "Lanterns Over Dhaka",
    author: "Nadia Karim",
    description:
      "A warm generational novel about family, ambition, and a bookshop that becomes a shelter during a season of change.",
    category: "Story",
    available_quantity: 9,
    image_url:
      "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&q=80&w=900",
  },
  {
    id: "tech-002",
    title: "Next.js Field Notes",
    author: "Avery Chen",
    description:
      "A compact handbook for building fast App Router interfaces, managing data boundaries, and shipping production-ready routes.",
    category: "Tech",
    available_quantity: 6,
    image_url:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=900",
  },
  {
    id: "science-002",
    title: "The Biology of Wonder",
    author: "Prof. Leila Rahman",
    description:
      "A lively science collection exploring ecosystems, human perception, and the tiny mechanisms that keep living worlds in motion.",
    category: "Science",
    available_quantity: 8,
    image_url:
      "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&q=80&w=900",
  },
  {
    id: "story-003",
    title: "The Cartographer's Door",
    author: "Jon Bell",
    description:
      "A fantasy adventure about an apprentice mapmaker whose drawings open paths into forgotten kingdoms and dangerous bargains.",
    category: "Story",
    available_quantity: 3,
    image_url:
      "https://images.unsplash.com/photo-1509021436665-8f07dbf5bf1d?auto=format&fit=crop&q=80&w=900",
  },
  {
    id: "tech-003",
    title: "MongoDB in Practice",
    author: "Samira Noor",
    description:
      "Schema design, aggregation strategies, indexing, and data modeling examples for developers building document-first products.",
    category: "Tech",
    available_quantity: 10,
    image_url:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=900",
  },
  {
    id: "science-003",
    title: "Quantum Everyday",
    author: "Dr. Theo Morgan",
    description:
      "A clear introduction to quantum ideas through familiar objects, modern experiments, and the technologies they enable.",
    category: "Science",
    available_quantity: 2,
    image_url:
      "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&q=80&w=900",
  },
  {
    id: "story-004",
    title: "River House Letters",
    author: "Maya Iqbal",
    description:
      "A literary mystery told through letters discovered in a riverside home after decades of silence and one impossible promise.",
    category: "Story",
    available_quantity: 5,
    image_url:
      "https://images.unsplash.com/photo-1476275466078-4007374efbbe?auto=format&fit=crop&q=80&w=900",
  },
  {
    id: "tech-004",
    title: "Secure Auth Systems",
    author: "Jordan Vale",
    description:
      "Authentication concepts, session design, OAuth flows, and practical security decisions for web applications.",
    category: "Tech",
    available_quantity: 7,
    image_url:
      "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&q=80&w=900",
  },
  {
    id: "science-004",
    title: "Ocean of Stars",
    author: "Dr. Anika Bose",
    description:
      "A beautifully written tour of marine biology and astrophysics, connecting tides, navigation, and life under dark skies.",
    category: "Science",
    available_quantity: 6,
    image_url:
      "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?auto=format&fit=crop&q=80&w=900",
  },
];

export const categories = ["All", "Story", "Tech", "Science"];

export function getBookById(id) {
  return books.find((book) => book.id === id);
}
