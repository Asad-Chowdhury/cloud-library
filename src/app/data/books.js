export const books = [
  {
    id: "story-001",
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    description:
      "A landmark novel about childhood, conscience, race, and justice in a small Alabama town.",
    category: "Story",
    available_quantity: 8,
    image_url: "https://covers.openlibrary.org/b/isbn/9780061120084-L.jpg",
  },
  {
    id: "story-002",
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    description:
      "A sharp portrait of wealth, longing, illusion, and reinvention in Jazz Age America.",
    category: "Story",
    available_quantity: 6,
    image_url: "https://covers.openlibrary.org/b/isbn/9780743273565-L.jpg",
  },
  {
    id: "story-003",
    title: "Pride and Prejudice",
    author: "Jane Austen",
    description:
      "A witty romantic classic about family, class, first impressions, and emotional honesty.",
    category: "Story",
    available_quantity: 10,
    image_url: "https://covers.openlibrary.org/b/isbn/9780141439518-L.jpg",
  },
  {
    id: "story-004",
    title: "The Hobbit",
    author: "J. R. R. Tolkien",
    description:
      "Bilbo Baggins leaves the Shire for a dangerous adventure filled with dwarves, dragons, and courage.",
    category: "Story",
    available_quantity: 5,
    image_url: "https://covers.openlibrary.org/b/isbn/9780547928227-L.jpg",
  },
  {
    id: "tech-001",
    title: "Clean Code",
    author: "Robert C. Martin",
    description:
      "A practical guide to writing readable, maintainable, and professional software.",
    category: "Tech",
    available_quantity: 7,
    image_url: "https://covers.openlibrary.org/b/isbn/9780132350884-L.jpg",
  },
  {
    id: "tech-002",
    title: "The Pragmatic Programmer",
    author: "David Thomas, Andrew Hunt",
    description:
      "A durable software engineering guide focused on habits, judgment, and practical development craft.",
    category: "Tech",
    available_quantity: 4,
    image_url: "https://covers.openlibrary.org/b/isbn/9780135957059-L.jpg",
  },
  {
    id: "tech-003",
    title: "Designing Data-Intensive Applications",
    author: "Martin Kleppmann",
    description:
      "A deep look at data systems, distributed architecture, reliability, scalability, and maintainability.",
    category: "Tech",
    available_quantity: 5,
    image_url: "https://covers.openlibrary.org/b/isbn/9781449373320-L.jpg",
  },
  {
    id: "tech-004",
    title: "You Don't Know JS Yet",
    author: "Kyle Simpson",
    description:
      "A detailed exploration of JavaScript mechanics, scope, closures, objects, and language behavior.",
    category: "Tech",
    available_quantity: 9,
    image_url:
      "https://images.unsplash.com/photo-1627398242454-45a1465c2479?auto=format&fit=crop&q=80&w=900",
  },
  {
    id: "science-001",
    title: "A Brief History of Time",
    author: "Stephen Hawking",
    description:
      "A classic introduction to cosmology, black holes, time, and the structure of the universe.",
    category: "Science",
    available_quantity: 6,
    image_url: "https://covers.openlibrary.org/b/isbn/9780553380163-L.jpg",
  },
  {
    id: "science-002",
    title: "Cosmos",
    author: "Carl Sagan",
    description:
      "A sweeping journey through astronomy, scientific discovery, and humanity's place in the universe.",
    category: "Science",
    available_quantity: 7,
    image_url: "https://covers.openlibrary.org/b/isbn/9780345331359-L.jpg",
  },
  {
    id: "science-003",
    title: "The Selfish Gene",
    author: "Richard Dawkins",
    description:
      "An influential explanation of evolution through genes, selection, behavior, and replication.",
    category: "Science",
    available_quantity: 3,
    image_url: "https://covers.openlibrary.org/b/isbn/9780199291151-L.jpg",
  },
  {
    id: "science-004",
    title: "The Gene",
    author: "Siddhartha Mukherjee",
    description:
      "A historical and scientific account of heredity, genetics, medicine, and human identity.",
    category: "Science",
    available_quantity: 4,
    image_url: "https://covers.openlibrary.org/b/isbn/9781476733500-L.jpg",
  },
];

export const categories = ["All", "Story", "Tech", "Science"];

export function getBookById(id) {
  return books.find((book) => book.id === id);
}
