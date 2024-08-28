const books = [
  {
    id: "book-1",
    title: "Harry Potter Book",
    author: "J.K Rowling",
    publish_at: "1998-07-02",
    category: "Fantasy",
    total: 10,
  },
  {
    id: "book-2",
    title: "Lord of the Rings",
    author: "J.R.R Tolkien",
    publish_at: "1998-07-02",
    category: "Fantasy",
    total: 10,
  },
  {
    id: "book-3",
    title: "The Alchemist",
    author: "Paulo Coelho",
    publish_at: "1998-07-02",
    category: "Fantasy",
    total: 10,
  },
  {
    id: "book-4",
    title: "The Lord of the Rings",
    author: "J.R.R Tolkien",
    publish_at: "1998-07-02",
    category: "Fantasy",
    total: 10,
  },
  {
    id: "book-5",
    title: "The Alchemist",
    author: "Paulo Coelho",
    publish_at: "1998-07-02",
    category: "Fantasy",
    total: 10,
  },
];

const members = [
  {
    id: "member-1",
    name: "Singgih",
    email: "singgih@gmail.com",
    verified: true,
  },
  {
    id: "member-2",
    name: "Budi",
    email: "budi@gmail.com",
    verified: false,
  },
];

const lendings = [
  {
    id: "lend-1",
    book_id: "book-1",
    member_id: "member-1",
    borrowed_at: "2024-06-28",
    return_at: "2024-07-01",
  },
  {
    id: "lend-2",
    book_id: "book-2",
    member_id: "member-1",
    borrowed_at: "2024-06-28",
    return_at: "2024-07-01",
  },
];

export { books, members, lendings };
